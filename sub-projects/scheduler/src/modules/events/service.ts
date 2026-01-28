import type { Res } from "../../types/types.ts";
import { pool } from "../../db";
import type { CreateEventData } from "../../types/types.ts";

export class EventService {
    static getEvents = async (): Promise<Res> => {
        try {
            const result = await pool.query(
                'SELECT * FROM events'
            );
            return {
                status: 200,
                details: 'Events retrieved successfully',
                data: result.rows,
                success: true
            }
        } catch (error: any) {
            console.error('Error retrieving events:', error)
            return {
                status: 500,
                error: 'Error retrieving events.',
                details: error.message,
                success: false
            }
        }
    }

    static createEvent = async (data: CreateEventData): Promise<Res> => {
        
        // first insert the event into the events table
        // second, once it success insert the generated event ID into the user_event_inter table
        // third, insert the people invited into the user_event_inter table
        // foruth, insert the labels into the event_label_inter table
        // fifth, Run a SELECT query to retrieve all the new event data
        // sixth, return the event
        
        const { 
            // EVENT TABLE
            name, 
            created_by, 
            selected_date, 
            description, 
            will_repeat, 
            repeat_rate,

            // OTHER TABLES
            invitations,
            labels 
        } = data;

        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            // INSERT INTO EVENTS
            const insert_event = await client.query(
                'INSERT INTO events (name, created_by, description, selected_date, will_repeat, repeat_rate) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [name, created_by, description, selected_date, will_repeat, repeat_rate]
            );
            
            if (insert_event.rows.length === 0) {
                await client.query('ROLLBACK');
                return {
                    status: 500,
                    error: 'Event creation failed.',
                    details: 'Error inserting event during event creation.',
                    success: false
                }
            }
            const event_id = insert_event.rows[0].id;

            // INSERT INTO EVENT PARTICIPANTS THE CREATOR OF THE EVENT (inter table of event and user)
            const insert_event_participant = await client.query(
                'INSERT INTO event_participants (user_id, event_id) VALUES ($1, $2) RETURNING *',
                [created_by, event_id]
            );

            if (insert_event_participant.rows.length === 0) {
                await client.query('ROLLBACK');
                return {
                    status: 500,
                    error: 'Event creation failed.',
                    details: 'Error inserting event participant during event creation.',
                    success: false
                }
            }

            // INSERT INTO INVITATIONS AS MANY AS THERE ARE PEOPLE INVITED
            if (invitations) {
                try {
                    for (const user_id of invitations.user_id) {
                        await client.query(
                            'INSERT INTO invitations (user_id, event_id, invited_by, title, description, is_closed) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                            [
                                user_id, // ← iteration of the user id in the Invitations array
                                event_id, 
                                invitations.invited_by, 
                                invitations.title, 
                                invitations.description, 
                                invitations.is_closed
                            ]
                        );
                    }
                } catch (error ){
                    await client.query('ROLLBACK');
                    return {
                        status: 500,
                        error: 'Event creation failed.',
                        details: 'Error inserting invitation during event creation.',
                        success: false
                    }
                } 
            }

            if (labels) {
                try {
                    for (const label of labels) {
                        await client.query(
                            'INSERT INTO event_label_inter (event_id, label_id) VALUES ($1, $2) RETURNING *',
                            [event_id, label]
                        );
                    }
                } catch (error ){
                    await client.query('ROLLBACK');
                    return {
                        status: 500,
                        error: 'Event creation failed.',
                        details: 'Error inserting label during event creation.',
                        success: false
                    }
                } 
            }

            //  do an inner join of all the tables to get the event with all the data
            const eventWithDataQuery = await client.query(
                `SELECT 
                    e.id AS event_id,
                    e.name AS event_name,
                    e.description AS event_description,
                    e.selected_date,
                    e.created_at AS event_created_at,
                    e.updated_at AS event_updated_at,
                    e.will_repeat,
                    e.repeat_rate,
                    e.created_by AS creator_id,
                    creator.full_name AS creator_name,
                    creator.email AS creator_email,
                    
                    COALESCE(
                        JSON_AGG(DISTINCT jsonb_build_object(
                            'label_id', l.id,
                            'label_name', l.name
                        )) FILTER (WHERE l.id IS NOT NULL),
                        '[]'
                    ) AS labels,
                    
                    COALESCE(
                        JSON_AGG(DISTINCT jsonb_build_object(
                            'user_id', p.id,
                            'full_name', p.full_name,
                            'email', p.email
                        )) FILTER (WHERE p.id IS NOT NULL),
                        '[]'
                    ) AS participants
                    
                FROM events e
                INNER JOIN users creator ON e.created_by = creator.id
                LEFT JOIN event_label_inter eli ON e.id = eli.event_id
                LEFT JOIN labels l ON eli.label_id = l.id
                LEFT JOIN event_participants ep ON e.id = ep.event_id
                LEFT JOIN users p ON ep.user_id = p.id
                WHERE e.id = $1
                GROUP BY 
                    e.id, e.name, e.description, e.selected_date, e.created_at, 
                    e.updated_at, e.will_repeat, e.repeat_rate, e.created_by,
                    creator.full_name, creator.email`,
                [event_id]
            );

            await client.query('COMMIT');

            return {
                status: 201,
                details: 'Event created successfully',
                data: eventWithDataQuery.rows[0],
                success: true
            }
            
        } catch (error: any) {
            // Rollback on any error
            await client.query('ROLLBACK');
            console.error('Error creating event:', error);
            return {
                status: 500,
                error: 'Error creating event.', 
                details: error.message,
                success: false
            };
        } finally {
            // Always release the client back to the pool
            client.release();
        }
    }
}