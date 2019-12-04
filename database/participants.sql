CREATE TABLE participants (
    participant UUID NOT NULL REFERENCES users(user_id) PRIMARY KEY,
    session_id UUID NOT NULL REFERENCES sessions(session_id)
);