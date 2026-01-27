-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop tables in reverse order (child tables first)
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
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster email searches
CREATE INDEX idx_users_email ON users(email);

-- Create index for phone searches
CREATE INDEX idx_users_phone ON users(phone);


-- Create events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,  -- Changed from integer to SERIAL for auto-increment
    name VARCHAR(50) NOT NULL,
    description TEXT,
    selected_date TIMESTAMP,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    created_by UUID NOT NULL,  -- Changed from integer to UUID

    CONSTRAINT fk_events_created_by  -- Unique constraint name
        FOREIGN KEY (created_by)
        REFERENCES users(id)
        ON DELETE CASCADE  -- Added action
);

CREATE INDEX idx_events_created_by ON events(created_by);


-- Create labels table
CREATE TABLE labels (
    id INTEGER GENERATED ALWAYS AS IDENTITY
        (START WITH 17 INCREMENT BY 3) PRIMARY KEY,
    name VARCHAR(20) NOT NULL  -- Added NOT NULL constraint
);


-- Create event_label_inter table (many-to-many between events and labels)
CREATE TABLE event_label_inter (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_id INTEGER NOT NULL,
    label_id INTEGER NOT NULL,
    
    CONSTRAINT fk_event_label_inter_event  -- Unique constraint name
        FOREIGN KEY (event_id)
        REFERENCES events(id)
        ON DELETE CASCADE,
    
    CONSTRAINT fk_event_label_inter_label  -- Unique constraint name
        FOREIGN KEY (label_id)
        REFERENCES labels(id)
        ON DELETE CASCADE,
    
    -- Prevent duplicate label assignments to same event
    UNIQUE (event_id, label_id)
);

CREATE INDEX idx_event_label_inter_event_id ON event_label_inter(event_id);
CREATE INDEX idx_event_label_inter_label_id ON event_label_inter(label_id);


-- Create user_event_inter table (many-to-many between users and events)
CREATE TABLE user_event_inter (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_id INTEGER NOT NULL,
    user_id UUID NOT NULL,  -- Changed from integer to UUID to match users.id
    
    CONSTRAINT fk_user_event_inter_event  -- Unique constraint name
        FOREIGN KEY (event_id)
        REFERENCES events(id)
        ON DELETE CASCADE,
    
    CONSTRAINT fk_user_event_inter_user  -- Unique constraint name
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,
    
    -- Prevent duplicate user assignments to same event
    UNIQUE (event_id, user_id)
);

CREATE INDEX idx_user_event_inter_event_id ON user_event_inter(event_id);
CREATE INDEX idx_user_event_inter_user_id ON user_event_inter(user_id);


-- Add comments
COMMENT ON TABLE users IS 'Users who can create and participate in events';
COMMENT ON TABLE events IS 'Entries of users scheduled happenings';
COMMENT ON TABLE labels IS 'Descriptive words for identifying events';
COMMENT ON TABLE event_label_inter IS 'Intermediate table for many-to-many relationship between events and labels';
COMMENT ON TABLE user_event_inter IS 'Intermediate table for many-to-many relationship between users and events';

