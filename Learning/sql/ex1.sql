-- Multi select

SELECT title, release FROM 

-- Difference between Like and =

SELECT * FROM table1 WHERE title = var1; -- case sensitive
 
SELECT * FROM table1 WHERE title like var1; -- not case sensitive

-- % for string search

SELECT * from table1 WHERE title '%something%'; -- evaluates if title has the 'something' string in it

-- BETWEEN

SELECT * from table1 WHERE release BETWEEN 1995 AND 2025;

