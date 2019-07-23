CREATE DATABASE gymbuddy_db;

USE gymbuddy_db;

CREATE TABLE users (

id INTEGER AUTO_INCREMENT NOT NULL,

user_name VARCHAR NOT NULL,

current_workout VARCHAR NOT NULL,

gym_name VARCHAR NOT NULL,

workout_schedule DATETIME NOT NULL, 

PRIMARY KEY (id)
);