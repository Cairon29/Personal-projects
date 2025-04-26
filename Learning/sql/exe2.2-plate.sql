use bike_db;

DROP TABLE IF EXISTS plates;

CREATE TABLE plates (
	id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
	plate_code varchar(20),
    city varchar(100),
    year year,
    bike_id int,
    foreign key (bike_id) REFERENCES bikes(id)
);