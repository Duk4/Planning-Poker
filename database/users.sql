CREATE TABLE users (
    user_id UUID NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pw VARCHAR(100) NOT NULL,
    joined_on DATE NOT NULL,
    last_entry DATE NOT NULL,
    UNIQUE(email)
);

INSERT INTO users (user_id, first_name, last_name, email, pw, joined_on, last_entry) 
VALUES (uuid_generate_v4(), "Dušan", "Tanasić", "crashendodt@gmail.com", "password123", NOW(), NOW());