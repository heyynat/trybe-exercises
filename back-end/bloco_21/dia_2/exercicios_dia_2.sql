USE Pixar;

SELECT  m.title, b.domestic_sales, b.international_sales
FROM Movies m
INNER JOIN
BoxOffice b ON b.movie_id = m.id;

SELECT 
m.title, b.domestic_sales, b.international_sales
FROM
Movies m
INNER JOIN
BoxOffice b ON b.movie_id = m.id
WHERE
b.international_sales > b.domestic_sales;

SELECT 
m.title, b.rating
FROM
Movies m
INNER JOIN
BoxOffice b ON b.movie_id = m.id
ORDER BY b.rating DESC;

SELECT 
t.name,
t.location,
m.title,
m.director,
m.year,
m.length_minutes
FROM
Theater t
LEFT JOIN
Movies m ON t.id = m.theater_id
ORDER BY t.name;

SELECT 
t.id,
t.name,
t.location,
m.title,
m.director,
m.year,
m.length_minutes
FROM
Theater t
RIGHT JOIN
Movies m ON t.id = m.theater_id
ORDER BY t.name;


SELECT 
m.title
FROM
Movies m
INNER JOIN
BoxOffice b ON b.movie_id = m.id
WHERE
b.rating > 7.5;

SELECT 
title
FROM
Movies
WHERE
id IN (SELECT 
movie_id
FROM
BoxOffice
WHERE
rating > 7.5);

SELECT 
rating
FROM
BoxOffice
WHERE
movie_id IN (SELECT 
id
FROM
Movies
WHERE
year > 2009);

SELECT 
b.rating
FROM
BoxOffice b
INNER JOIN
Movies m ON b.movie_id = m.id
WHERE
m.year > 2009;


SELECT 
t.name, t.location
FROM
Theater AS t
WHERE
EXISTS( SELECT 
*
FROM
Movies
WHERE
Movies.theater_id = t.id);