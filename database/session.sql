CREATE TABLE session (
    session_id UUID NOT NULL PRIMARY KEY,
    session_name VARCHAR(255) NOT NULL,
    session_admin UUID NOT NULL REFERENCES user(user_id),
);