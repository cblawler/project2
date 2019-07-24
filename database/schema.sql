CREATE DATABASE tv2pdeplazyhg5ny;

USE tv2pdeplazyhg5ny;

CREATE TABLE users (

id INTEGER(60) AUTO_INCREMENT NOT NULL,

user_name VARCHAR(60) NOT NULL,

current_workout VARCHAR(60) NOT NULL,

gym_name VARCHAR(60) NOT NULL,

workout_schedule DATETIME NOT NULL, 

PRIMARY KEY (id)
);