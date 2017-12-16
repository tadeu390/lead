DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS leads;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(200) NOT NULL
);

CREATE TABLE leads(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	ativo BOOLEAN,
	data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	cpf VARCHAR(14) NOT NULL,
	cep VARCHAR(10) NOT NULL,
	telefone VARCHAR(15) NOT NULL,
	observacoes TEXT
);

INSERT INTO usuario(nome,email,senha) VALUES('teste','teste@teste.com',sha2('teste',512));

