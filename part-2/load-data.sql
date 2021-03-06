-- DROP DATABASE IF EXISTS grocery_store;
-- CREATE DATABASE grocery_store;

-- \c grocery_store

-- DROP TABLE IF EXISTS groceryitems;
-- CREATE TABLE groceryitems(
-- id SERIAL PRIMARY KEY UNIQUE,
-- name VARCHAR(30),
-- price NUMERIC(3,2), 
-- section TEXT
-- );


-- DROP TABLE IF EXISTS shoppers;
-- CREATE TABLE shoppers(
-- id SERIAL PRIMARY KEY,
-- shopperName VARCHAR(30)
-- );

-- DROP TABLE IF EXISTS orders;
-- CREATE TABLE orders(
-- id SERIAL PRIMARY KEY,
-- date_of_purchase DATE,
-- groceryId INTEGER, 
-- FOREIGN KEY (groceryId) REFERENCES groceryitems(id),
-- shopperId INTEGER,
-- FOREIGN KEY (shopperId) REFERENCES shoppers(id)
-- );

-- DROP TABLE IF EXISTS groceryOrders;
-- CREATE TABLE groceryOrders(
-- id SERIAL PRIMARY KEY,
-- orderId INTEGER,
-- FOREIGN KEY (orderId) REFERENCES orders(id)
-- );







\copy grocery_items(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER;
INSERT INTO shoppers (fname, lname, email, number_of_orders)
    VALUES ('John', 'Doe', 'John@doe.com', 5);
INSERT INTO shoppers (fname, lname, email, number_of_orders)
    VALUES ('Jon', 'Dough', 'john@dough.com', 5);
INSERT INTO shoppers (fname, lname, email, number_of_orders)
    VALUES ('Jane', 'Doe', 'jane@jane.com', 5);
INSERT INTO shoppers (fname, lname, email, number_of_orders)
    VALUES ('Jain', 'Dough', 'Jain@dough.com', 1);
INSERT INTO shoppers (fname, lname, email, number_of_orders)
    VALUES ('person', 'family', 'random@email.com', 5);

INSERT INTO orders (shopper_id)
    VALUES (1);
INSERT INTO orders (shopper_id)
    VALUES (2);
INSERT INTO orders (shopper_id)
    VALUES (3);
INSERT INTO orders (shopper_id)
    VALUES (4);
INSERT INTO orders (shopper_id)
    VALUES (5);
INSERT INTO orders (shopper_id)
    VALUES (1);
INSERT INTO orders (shopper_id)
    VALUES (2);
INSERT INTO orders (shopper_id)
    VALUES (3);
INSERT INTO orders (shopper_id)
    VALUES (4);
INSERT INTO orders (shopper_id)
    VALUES (5);

INSERT INTO cart (id, item_id)
    VALUES (1, 1);
INSERT INTO cart (id, item_id)
    VALUES (1, 13);
INSERT INTO cart (id, item_id)
    VALUES (2, 9);
INSERT INTO cart (id, item_id)
    VALUES (2, 17);
INSERT INTO cart (id, item_id)
    VALUES (3, 7);
INSERT INTO cart (id, item_id)
    VALUES (3, 3);
INSERT INTO cart (id, item_id)
    VALUES (4, 12);
INSERT INTO cart (id, item_id)
    VALUES (4, 8);
INSERT INTO cart (id, item_id)
    VALUES (5, 16);
INSERT INTO cart (id, item_id)
    VALUES (5, 19);
INSERT INTO cart (id, item_id)
    VALUES (6, 11);
INSERT INTO cart (id, item_id)
    VALUES (6, 7);
INSERT INTO cart (id, item_id)
    VALUES (7, 5);
INSERT INTO cart (id, item_id)
    VALUES (7, 8);
INSERT INTO cart (id, item_id)
    VALUES (8, 3);
INSERT INTO cart (id, item_id)
    VALUES (8, 2);
INSERT INTO cart (id, item_id)
    VALUES (9, 6);
INSERT INTO cart (id, item_id)
    VALUES (9, 4);
INSERT INTO cart (id, item_id)
    VALUES (10, 18);
INSERT INTO cart (id, item_id)
    VALUES (10, 20);


