DROP DATABASE if EXISTS bike_db;

CREATE DATABASE bike_db;

USE bike_db;

CREATE TABLE bikes (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	brand VARCHAR(150) NOT NULL,
	model VARCHAR(200) NOT NULL,
	year YEAR NOT NULL,
	topSpeed FLOAT NOT NULL,
	engineSize INT NOT NULL, 
	dryWeight INT NOT NULL,
	wetWeight INT NOT NULL
);

INSERT INTO bikes 
    (brand, model, year, topSpeed, engineSize, dryWeight, wetWeight)
VALUES 
    ('Honda', 'CBR600RR', 2024, 260.0, 599, 180, 190),
    ('Yamaha', 'YZF-R1', 2020, 298, 998, 177, 200), 
    ('ducati', 'Paganile V4', 2022, 305, 1103, 175, 198)
    ('Kawasaki', 'Ninja ZX-10R', 2018, 299, 998, 174, 206)
    ('Suzuki', 'GSX-R1000', 2021, 299, 999, 178, 202),
    ('BMW', 'S1000RR', 2023, 303, 999, 169, 197),
    ('Aprilia', 'RSV4 1100', 2022, 302, 1099, 177, 199),
    ('MV Agusta', 'F4 RR', 2019, 299, 998, 175, 192),
    ('Triumph', 'Daytona 675', 2017, 249, 675, 167, 184),
    ('KTM', 'RC8 R', 2015, 280, 1195, 179, 195),
    ('Honda', 'CBR1000RR-R Fireblade', 2023, 300, 999, 172, 201),
    ('Yamaha', 'YZF-R6', 2019, 257, 599, 167, 190),
    ('Ducati', 'Panigale V2', 2022, 258, 955, 169, 200),
    ('Kawasaki', 'Ninja H2', 2021, 326, 998, 174, 238);

SELECT brand, model, year, topspeed FROM bikes WHERE wetWeight > 200;
SELECT brand, model, year, topSpeed FROM bikes WHERE year BETWEEN 2020 AND 2025 order by brand DESC;
SELECT DISTINCT brand, modeL, dryWeight, topSpeed FROM bikes;
SELECT brand, model, dryWeight FROM bikes WHERE brand LIKE '%aha';
SELECT * FROM bikes WHERE brand LIKE 'KT_';
SELECT * FROM bikes LIMIT 3;
SELECT MIN(dryweight) FROM bikes;
SELECT MAX(dryweight) FROM bikes;
SELECT * FROM bikes WHERE brand = 'ducati' OR brand = 'yamaha';
SELECT * FROM bikes WHERE NOT brand = 'ducati' AND NOT brand = 'yamaha';

/*_____ Learning commands _____*/

-- < and > symbols
SELECT brand, model, year, topspeed FROM bikes WHERE wetWeight > 200;

-- Between along order by
SELECT brand, model, year, topSpeed FROM bikes WHERE year BETWEEN 2020 AND 2025 order by brand DESC;

-- DISTINCT
SELECT DISTINCT brand, modeL, dryWeight, topSpeed FROM bikes;

-- LIKE and % in strings
SELECT brand, model, dryWeight FROM bikes WHERE brand LIKE '%aha';

-- LIKE and _ in strings
SELECT * FROM bikes WHERE brand LIKE 'KT_';

-- LIMIT
SELECT * FROM bikes LIMIT 3;

-- MIN and MAX
SELECT MIN(dryweight) FROM bikes;
SELECT MAX(dryweight) FROM bikes;

-- OR, AND, NOT
SELECT * FROM bikes WHERE brand = 'ducati' OR brand = 'yamaha';
SELECT * FROM bikes WHERE NOT brand = 'ducati' AND NOT brand = 'yamaha';