const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/grocery_store';
const db = pgp(connectionString);

const query = {
	getAll(){
		return db.any('SELECT * FROM grocery_items')
	},
	createTransaction(transaction){
		console.log('this is the transaction', transaction)
		return db.any(`
			INSERT INTO grocery_items(name, price, section)
			VALUES($1, $2, $3)
			`, [transaction.name, transaction.price, transaction.section])	
			.catch(console.log)
	}, 	
	itemsInSection(section){
		console.log('this is the result of my section query', section)
		let result = db.any(`
			SELECT name, id
			FROM grocery_items
			where section =$1
			`, [section.section]);
		console.log(result)
		return result
	},
	// List all the shoppers that have at least 1 order, and also display the number of orders for them
	getShopperOrders(shopperId){
		// console.log('this is the shopperId', shopperId)
		  return db.any(`
	SELECT orders.id AS order_id, SUM(grocery_items.price) AS total_cost FROM orders
    JOIN cart
    ON orders.id = cart.id
    JOIN grocery_items
    ON cart.item_id = grocery_items.id
    JOIN shoppers
    ON shoppers.id = orders.shopper_id
    WHERE shoppers.id = $1
    GROUP BY orders.id
  	`,[shopperId]);
},
// lists the names of all shoppers who have at least 1 order
	getRealShopper(){
	   		  return db.many(`
			    SELECT DISTINCT(shoppers.fname), shoppers.number_of_orders 
			    FROM shoppers JOIN orders ON shoppers.id = orders.shopper_id;
			  ` );

	},
  getProductList(productSection){
    // --lists all products which belong to the given section
    return db.any(`
SELECT section, name as product_name
FROM grocery_items
WHERE section = $1
    `,[productSection]);

  }
}

/*
real-shoppers = lists the names of all shoppers who have at least 1 order	
shopper-orders = lists the orders for a given shopper
product-list = lists all products which belong to the given section		
List all orders for a given shopper id, returns the order id, and the total cost of the order.




*/
module.exports = query;