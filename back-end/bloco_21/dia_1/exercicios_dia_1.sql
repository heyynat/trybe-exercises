-- Exercicios do dia
SELECT MAX(SALARY) FROM hr.employees;

SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

SELECT  JOB_ID, AVG(SALARY) AS 'average_salary'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `average_salary` DESC;

SELECT SUM(SALARY)
FROM hr.employees;

SELECT MAX(SALARY),
    MIN(SALARY),
  SUM(SALARY),
    ROUND(AVG(SALARY), 2)
FROM hr.employees;

SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";

SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID;

SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";


SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;


SELECT department_id,
    AVG(salary) 'average_salary' ,
    COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;

SELECT employee_id, first_name,
    MID(hire_date, 1, 4) 'hire_year'
FROM hr.employees;

SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME))
FROM hr.employees;

SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';

SELECT first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM hr.employees;