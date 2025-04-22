-- Multi select

SELECT title, release FROM 

-- Difference between Like and =

SELECT * FROM table1 WHERE title = var1; -- case sensitive
 
SELECT * FROM table1 WHERE title like var1; -- not case sensitive

-- % for string search

SELECT * from table1 WHERE title '%something%'; -- evaluates if title has the 'something' string in it

-- BETWEEN

SELECT * from table1 WHERE release BETWEEN 1995 AND 2025;

-- LIMIT 

SELECT * FROM table1 LIMIT 3; -- It is only going to get the first 3 eleemnts. Important for very populated databases.

-- MIN and MAX

SELECT MIN(age) from table1; -- returns the minimal age of the table
SELECT MAX(age) from table1; -- returns the maximum age of the table

-- AND, OR, NOT

SELECT * FROM table1 WHERE title1 = 'amazingTitle' OR title1 = 'impresiveTitle';
SELECT * FROM table1 WHERE title1 = 'amazingTitle' AND release = 2021;
SELECT * FROM table1 WHERE NOT title1 = 'amazingTitle' AND NOT release = 2021;


