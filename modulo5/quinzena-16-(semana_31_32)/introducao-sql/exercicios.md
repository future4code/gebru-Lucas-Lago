## Exercício 1
    CREATE TABLE actor (
        id VARCHAR(255) PRIMARY	KEY,
        name VARCHAR(255) NOT NULL,
        salary FLOAT NOT NULL,
        birth_date DATE NOT NULL,
        gender VARCHAR(6) NOT NULL
    );

### a)
	 VARCHAR(255) : Variavel de até 255 caracteres;
	 VARCHAR(6): Variável de até 6 caracteres;
	 FLOAT: Variavel número e não é número inteiro, ex. 1.5, 1.66 ...;
     DATE : Variável do tipo data;
     PRIMARY KEY: Chave primária ;
     NOT NULL: Indica se a coluna não pode ser nula;

<br>

SHOW databases; <br>
SHOW tables; <br>
DESCRIBE actor; <br>

<br>

## Exercício 2
    INSERT INTO actor (id, name, salary, birth_date, gender)
    VALUES(
        "001",
        "Tonny Ramos",
        400000,
        "1948-08-25",
        "male"
    );
<br>

### a) 
    INSERT INTO actor (id, name, salary, birth_date, gender)
    VALUES(
        "002",
        "Glória Pires",
        1200000,
        "1963-08-23",
        "female"
    );

<br>

### b)
    INSERT INTO actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Lucas Coimbra",
        10,
        "1997-05-03", 
        "male"
    );
### Resposta: Entrada duplicada '002' para chave primária, acontece porque não pode ter 2 primary key iguais.

### c)
    INSERT INTO actor (id, name, salary)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );
### Resposta: A contagem de colunas não corresponde à contagem de valores na linha 1, isso acontece, pois o  as colunas inseridas diferem da quantidade enviada.

### d)
    INSERT INTO actor (id, salary, birth_date, gender)
    VALUES(
        "004",
        400000,
        "1949-04-18", 
        "male"
    );

### e)
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        1979-03-26, 
        "female"
    );

### f)
    INSERT INTO actor (id, name, salary, birth_date, gender)
    VALUES(
        "005",
        "Mingau Cat",
        30000,
        "2019-03-20",
        "male"
    );
    INSERT INTO actor (id, name, salary, birth_date, gender)
    VALUES(
        "006",
        "Jade Dog",
        50000,
        "2018-08-10",
        "female"
    );


## 3
SELECT * FROM actor; <br>
SELECT id, salary from actor; <br>
SELECT id, name from actor WHERE gender = "male"; <br>

### a)
    SELECT * FROM actor;

### b)
    SELECT salary from actor WHERE name = "Tonny Ramos";

### c)
    SELECT id, name, salary, birth_date from actor WHERE gender = "invalid";
### Resposta: Não retornou nenhum ator.alter

### d)
    SELECT id, name, birth_date, gender from actor WHERE salary < 500000;

### e)
    SELECT id, nome from actor WHERE id = "002"
### Resposta: Nome de coluna desconhecido na lista de campos. O campo 'nome' não é definido assim na lista, é name.