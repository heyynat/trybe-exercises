CREATE DATABASE IF NOT EXISTS zoologico;
Use zoologico;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	especie VARCHAR(35) NOT NULL,
	sexo VARCHAR(15),
    idade INTEGER,
    localização VARCHAR(35) NOT NULL
);

CREATE TABLE gerente(
	nome VARCHAR(100) NOT NULL,
    gerenteId INT(4) NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE cuidador(
	nome VARCHAR(100) NOT NULL,
	cuidadorId INT(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	gerenteId INT  NOT NULL,
	FOREIGN KEY (gerenteId) REFERENCES gerente (gerenteId)
);

CREATE TABLE animal_cuidador(
	animal_id INT,
	cuidadorId INT,
	CONSTRAINT PRIMARY KEY(animal_id, cuidadorId),
	FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
	FOREIGN KEY (cuidadorId) REFERENCES cuidador (cuidadorId)
);

