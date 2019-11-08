CREATE TABLE tasks (
    task_id UUID NOT NULL PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_value VARCHAR(3) NOT NULL,
    session_id UUID NOT NULL REFERENCES session(session_id),
);