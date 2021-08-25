SELECT UCASE('trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
SELECT LENGTH('Uma frase qualquer');  
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 12, 11);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

SELECT
    film_id,
    title,
    CASE
        WHEN title = 'ACE GOLDFINGER' THEN 'Já assisti a esse filme'
        ELSE 'Não conheço o filme'
    END AS conheço_o_filme
FROM sakila.film 
LIMIT 10;

SELECT
    title, 
    rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
		WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS público_alvo
FROM sakila.film 
LIMIT 10;

SELECT ROUND(15 + (RAND() * 20));
SELECT ROUND(15.7515971, 5); 
SELECT FLOOR(39.494);
SELECT CEIL(85.234);

SELECT DATEDIFF('2020-01-20', CURRENT_DATE());
SELECT TIMEDIFF('10:25:45', '11:00:00');
