# Curso NODE + MySQL

API de Carros feito em NODE, Express e MySQL.

Para Rodar o Projeto

```sh
npm install 

npm start
```

Comandos para criar Banco de Dados

```sh
CREATE DATABASE dbApiCarros;

USE dbApiCarros;

CREATE TABLE carros (
    codigo int primary key auto_increment,
    modelo varchar(30),
    placa varchar(7)
);

INSERT INTO carros (modelo, placa)
VALUES ("Toyota Corola", "HTL9856");

```


Link do vídeo no [YouTube](https://youtu.be/boQfcrc6b6A)