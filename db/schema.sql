-- delete the database if it is there already
DROP DATABASE IF EXISTS burgers_db;

-- make a new database
CREATE DATABASE burgers_db;

-- tell the app which database to use
USE burgers_db;

CREATE TABLE burgers (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);