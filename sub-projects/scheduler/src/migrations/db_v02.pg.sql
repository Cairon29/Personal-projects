-- Add password column to users table
ALTER TABLE users ADD COLUMN password varchar(200);
ALTER TABLE users ALTER COLUMN password SET not null;

-- Create invitations table
CREATE TABLE invitations (
	id INTEGER GENERATED ALWAYS AS IDENTITY,
	user_id UUID NOT NULL,
	invited_by UUID not null,
	title varchar(50) not null,
	description text,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

	CONSTRAINT fk_user_id
		foreign key (user_id)
		references users(id)
		ON DELETE CASCADE,
		
	CONSTRAINT fk_invited_by
		foreign key (invited_by)
		references users(id)
		ON DELETE CASCADE
)

-- Add will_repeat and repeat_rate columns to events table
ALTER TABLE events
RENAME CONSTRAINT fk_events_created_by to fk_created_by;

ALTER TABLE events
ADD COLUMN will_repeat boolean default false;

ALTER TABLE events
ADD COLUMN repeat_rate integer default 0;

ALTER TABLE invitations
ADD COLUMN event_id integer not null;

ALTER TABLE invitations
ADD CONSTRAINT fk_event_id
	foreign key (event_id)
	references events(id)
	ON DELETE CASCADE;

ALTER TABLE invitations
ADD COLUMN is_closed boolean default false;

ALTER TABLE user_event_inter RENAME TO event_participants

ALTER TABLE event_participants
RENAME CONSTRAINT fk_user_event_inter_event TO fk_participants_id_event;

ALTER TABLE event_participants
RENAME CONSTRAINT fk_user_event_inter_user TO fk_participants_id_user;