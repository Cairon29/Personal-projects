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


INSERT INTO bikes (brand, max_speed) values ('kawasaki', 340), ('ducati', 350), ('bmw', 300);
INSERT INTO users (name) values ('johan'), ('ajelandro'), ('Arley');
INSERT INTO plates (plate_number, city) VALUES ('ACS32', 'Bogota DC'), ('XF23D3', 'Cali'), ('RTV876', 'Medellin');

UPDATE bikes SET user_id = 3 where id = 2;
UPDATE bikes SET plate_id = 1 where id = 1;
UPDATE bikes SET plate_id = 2 where id = 2;
UPDATE bikes SET plate_id = 3 where id = 3;

SELECT * from bikes;

SELECT * from bikes
JOIN users
on user_id = users.id ORDER BY max_speed DESC;

-- It does not matter the order in which we place the 'on' value closures

SELECT * from bikes
JOIN users
on users.id = bikes.user_id ORDER BY max_speed DESC;


-- We can skip the 'inner' closure since in most of DB engines support only using JOIN in this statements

SELECT * from bikes
INNER JOIN users
on user_id = users.id ORDER BY max_speed DESC;

-- LEFT JOIN

-- It makes the SQL consult keep not only the common values but also the 'from' table values (in this case bikes table)
SELECT * from bikes
LEFT JOIN users
on user_id = users.id ORDER BY max_speed DESC;


-- In this case it works the same as the LEFT JOIN but keeps the not common values of the evaluated table (in this case users table)
SELECT * from bikes
RIGHT JOIN users
on user_id = users.id ORDER BY max_speed DESC;


-- In this case we are accessing the data as if it was an object
SELECT (bikes.brand, users.id, users.name) AS custom_consult from bikes
JOIN users
on user_id = users.id ORDER BY max_speed DESC;

-- imagine both columns are not null, when we insert it will be necessary to provide a value for each argument
INSERT INTO bikes (value1, value2) VALUES ('here value 1', 'here value 2')
