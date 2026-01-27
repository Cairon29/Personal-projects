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
            const event_with_data = await client.query(
                'SELECT e.*, u.username AS created_by_username, i.user_id AS invited_user_id, i.invited_by AS invited_by_username, l.label_name FROM events e JOIN users u ON e.created_by = u.id LEFT JOIN invitations i ON e.id = i.event_id LEFT JOIN event_label_inter eli ON e.id = eli.event_id LEFT JOIN labels l ON eli.label_id = l.id WHERE e.id = $1',
                [event_id]
            );

            return {
                status: 201,
                details: 'Event created successfully',
                data: event_with_data.rows[0],
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