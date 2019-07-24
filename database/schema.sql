CREATE DATABASE gymbuddy_db;

USE gymbuddy_db;

CREATE TABLE users (

id INTEGER AUTO_INCREMENT NOT NULL,

user_name VARCHAR(60) NOT NULL,

current_workout VARCHAR(60) NOT NULL,

gym_name VARCHAR(60) NOT NULL,

workout_schedule DATETIME NOT NULL, 

PRIMARY KEY (id)
);