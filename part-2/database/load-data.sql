DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

DROP TABLE IF EXISTS groceryitems;
CREATE TABLE groceryItems(
id SERIAL PRIMARY KEY,
name VARCHAR(30) NOT NULL UNIQUE,
price NUMERIC(3,2), 
section TEXT,
name2 VARCHAR(30) NOT NULL UNIQUE,
price2 NUMERIC(3,2), 
section2 TEXT,
name3 VARCHAR(30) NOT NULL UNIQUE,
price3 NUMERIC(3,2), 
section3 TEXT,
date_of_purchase DATE 
);


DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers(
id SERIAL PRIMARY KEY,
shopperName VARCHAR(30) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
id SERIAL PRIMARY KEY,
shopperId INTEGER,
ItemId INTEGER,
FOREIGN KEY (shopperId) REFERENCES shoppers(id),
FOREIGN KEY (ItemId) REFERENCES groceryitems(id),
date_of_purchase DATE 
);
-- DROP TABLE IF EXISTS shoppersOrders;
-- CREATE TABLE shoppersOrders(
-- id SERIAL PRIMARY KEY,
-- ItemId INTEGER,
-- ShopperId INTEGER,
-- FOREIGN KEY (ItemId) REFERENCES oders(id),
-- FOREIGN KEY (ShopperId) REFERENCES shoppers(id)
-- )