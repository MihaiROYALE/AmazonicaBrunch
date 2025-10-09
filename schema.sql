-- Schema for Restaurant Reservation System
-- This file sets up the PostgreSQL database tables.

-- Table to store restaurant tables (optional, for reference)
CREATE TABLE IF NOT EXISTS tables (
    id SERIAL PRIMARY KEY,
    capacity INTEGER NOT NULL CHECK (capacity > 0)
);

-- Insert sample tables (10 tables of 4 seats each, total 40 seats)
INSERT INTO tables (capacity) VALUES
(4), (4), (4), (4), (4),
(4), (4), (4), (4), (4);

-- Table to store bookings
CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    guests INTEGER NOT NULL CHECK (guests > 0 AND guests <= 10),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index on date for faster availability checks
CREATE INDEX idx_bookings_date ON bookings (date);

-- Note: To prevent overbooking, we will use application logic with transactions
-- No unique constraint on date/time since multiple bookings per slot are allowed as long as seats suffice