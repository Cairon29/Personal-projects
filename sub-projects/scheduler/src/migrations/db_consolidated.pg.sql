-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop tables in reverse order (child tables first)
DROP TABLE IF EXISTS event_participants CASCADE;
DROP TABLE IF EXISTS invitations CASCADE;
DROP TABLE IF EXISTS user_event_inter CASCADE;
DROP TABLE IF EXISTS event_label_inter CASCADE;
DROP TABLE IF EXISTS labels CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Create users table
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(10) NOT NULL,
    password VARCHAR(200) NOT NULL,  -- Increased size and NOT NULL from migration
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster email searches
CREATE INDEX idx_users_email ON users(email);

-- Create index for phone searches
CREATE INDEX idx_users_phone ON users(phone);

-- Create events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    selected_date TIMESTAMP,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    created_by UUID NOT NULL,
    will_repeat boolean DEFAULT false,  -- Added from migration
    repeat_rate integer DEFAULT 0,       -- Added from migration
    
    CONSTRAINT fk_created_by  -- Renamed from fk_events_created_by in migration
        FOREIGN KEY (created_by)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_events_created_by ON events(created_by);

-- Create labels table
CREATE TABLE labels (
    id INTEGER GENERATED ALWAYS AS IDENTITY
        (START WITH 17 INCREMENT BY 3) PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

-- Create event_label_inter table (many-to-many between events and labels)
CREATE TABLE event_label_inter (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_id INTEGER NOT NULL,
    label_id INTEGER NOT NULL,
    
    CONSTRAINT fk_event_label_inter_event
        FOREIGN KEY (event_id)
        REFERENCES events(id)
        ON DELETE CASCADE,
    
    CONSTRAINT fk_event_label_inter_label
        FOREIGN KEY (label_id)
        REFERENCES labels(id)
        ON DELETE CASCADE,
    
    -- Prevent duplicate label assignments to same event
    UNIQUE (event_id, label_id)
);

CREATE INDEX idx_event_label_inter_event_id ON event_label_inter(event_id);
CREATE INDEX idx_event_label_inter_label_id ON event_label_inter(label_id);

-- Create invitations table
CREATE TABLE invitations (
    id INTEGER GENERATED ALWAYS AS IDENTITY,
    user_id UUID NOT NULL,
    invited_by UUID NOT NULL,
    title VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    event_id INTEGER NOT NULL,       -- Added from migration
    is_closed BOOLEAN DEFAULT false, -- Added from migration

    CONSTRAINT fk_user_id
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,
        
    CONSTRAINT fk_invited_by
        FOREIGN KEY (invited_by)
        REFERENCES users(id)
        ON DELETE CASCADE,
        
    CONSTRAINT fk_event_id
        FOREIGN KEY (event_id)
        REFERENCES events(id)
        ON DELETE CASCADE
);

-- Create event_participants table (renamed from user_event_inter in migration)
CREATE TABLE event_participants (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_id INTEGER NOT NULL,
    user_id UUID NOT NULL,
    
    CONSTRAINT fk_participants_id_event  -- Renamed from fk_user_event_inter_event in migration
        FOREIGN KEY (event_id)
        REFERENCES events(id)
        ON DELETE CASCADE,
    
    CONSTRAINT fk_participants_id_user  -- Renamed from fk_user_event_inter_user in migration
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,
    
    -- Prevent duplicate user assignments to same event
    UNIQUE (event_id, user_id)
);

CREATE INDEX idx_event_participants_event_id ON event_participants(event_id);
CREATE INDEX idx_event_participants_user_id ON event_participants(user_id);

-- Add comments
COMMENT ON TABLE users IS 'Users who can create and participate in events';
COMMENT ON TABLE events IS 'Entries of users scheduled happenings';
COMMENT ON TABLE labels IS 'Descriptive words for identifying events';
COMMENT ON TABLE event_label_inter IS 'Intermediate table for many-to-many relationship between events and labels';
COMMENT ON TABLE event_participants IS 'Intermediate table for many-to-many relationship between users and events';
COMMENT ON TABLE invitations IS 'Invitations sent to users for events';