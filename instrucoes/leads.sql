DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS leads;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100),
	email VARCHAR(50),
	senha VARCHAR(200)
);

CREATE TABLE leads(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100),
	email VARCHAR(50),
	cpf INT,
	cep INT,
	telefone INT,
	investimento VARCHAR(100),
	segmento VARCHAR(100),
	observacoes TEXT
);

