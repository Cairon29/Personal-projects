CREATE DATABASE bikes_relationships;

CREATE TABLE bikes(
    id INT AUTO_INCREMENT not null PRIMARY key,
    brand varchar(100) not null,
    max_speed int
);

CREATE TABLE plates(
    id INT AUTO_INCREMENT not null PRIMARY key,
    city varchar(100) not null,
    plate_number varchar(10)
);

CREATE TABLE users(
    id INT AUTO_INCREMENT not null PRIMARY key,
    name varchar(100) not null
);

SELECT * FROM bikes;

ALTER TABLE bikes
ADD plate_id int;

ALTER TABLE bikes
ADD CONSTRAINT fk_plate
FOREIGN KEY (plate_id) REFERENCES plates(id);

ALTER TABLE bikes
MODIFY COLUMN plate_id int UNIQUE;
ALTER TABLE bikes
ADD user_id int;

ALTER TABLE bikes
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) REFERENCES users(id);