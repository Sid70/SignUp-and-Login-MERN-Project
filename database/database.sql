CREATE DATABASE IF NOT EXISTS practice_sid70;

CREATE TABLE IF NOT EXISTS registration_form(
    sl_no INT(8) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    phnumber VARCHAR(15),
    password VARCHAR(20)
);