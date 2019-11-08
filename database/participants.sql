CREATE TABLE participants (
    participant UUID NOT NULL REFERENCES user(user_id),
    session_id UUID NOT NULL REFERENCES session(session_id)
);