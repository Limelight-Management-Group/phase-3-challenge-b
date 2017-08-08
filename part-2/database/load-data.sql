DROP DATABASE IF EXISTS phase_3_challenge_b;
CREATE DATABASE phase_3_challenge_b;

\c phase_3_challenge_b
DROP TABLE IF EXISTS oders;
CREATE TABLE oders(
id SERIAL PRIMARY KEY,
name VARCHAR(30) NOT NULL UNIQUE,
price NUMERIC(3,2), 
section TEXT,
date_of_purchase DATE 
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers(
id SERIAL PRIMARY KEY,
shopperName VARCHAR(30) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS shoppersOrders;
CREATE TABLE shoppersOrders(
id SERIAL PRIMARY KEY,
ItemId INTEGER,
ShopperId INTEGER,
FOREIGN KEY (ItemId) REFERENCES oders(id),
FOREIGN KEY (ShopperId) REFERENCES shoppers(id)
)