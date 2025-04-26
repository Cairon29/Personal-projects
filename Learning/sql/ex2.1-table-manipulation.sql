use bike_db;

CREATE TABLE yamaha (
	id INT auto_increment PRIMARY KEY NOT NULL,
    brand varchar(100) NOT NULL,
	model VARCHAR(200) NOT NULL,
	year YEAR NOT NULL,
	topSpeed FLOAT NOT NULL,
	engineSize INT NOT NULL, 
	dryWeight INT NOT NULL,
	wetWeight INT NOT NULL
);

INSERT INTO yamaha (brand, model, year, topSpeed, engineSize, dryWeight, wetWeight)
VALUES
('Yamaha', 'YZF-R1', 2023, 186, 998, 201, 206),
('Yamaha', 'MT-09', 2023, 140, 890, 189, 193),
('Yamaha', 'YZF-R7', 2023, 135, 689, 188, 194),
('Yamaha', 'MT-07', 2023, 130, 689, 182, 184),
('Yamaha', 'Ténéré 700', 2023, 115, 689, 204, 205),
('Yamaha', 'YZF-R6', 2022, 165, 599, 190, 196),
('Yamaha', 'XSR900', 2023, 140, 890, 193, 195),
('Yamaha', 'Bolt R-Spec', 2023, 110, 942, 247, 252),
('Yamaha', 'WR250R', 2023, 85, 250, 134, 144),
('Yamaha', 'Niken GT', 2023, 125, 847, 263, 270),
('Yamaha', 'VMAX', 2023, 150, 1679, 270, 310);


SELECT * FROM yamaha;

-- ADD NEW COLUMN
ALTER TABLE yamaha ADD inStock boolean DEFAULT(false) -- Default in this case sets the column in 0

-- RENAME COLUMN
ALTER TABLE yamaha RENAME COLUMN inStock TO stock;
ALTER TABLE yamaha RENAME COLUMN stock TO inStock;

-- MODIFY
ALTER TABLE yamaha MODIFY COLUMN brand VARCHAR(120);

