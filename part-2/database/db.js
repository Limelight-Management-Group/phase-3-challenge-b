const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/phase_3_challenge_b';
const db = pgp(connectionString);

const query = {
	getAll(){
		return db.any('SELECT * FROM groceryItems')
	},
	createTransaction(transaction){
		console.log('this is the transaction', transaction)
		return db.any(`
			INSERT INTO groceryItems(name, price, section, name2, price2, section2, name3, price3, section3, date_of_purchase)
			VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
			`, [transaction.name, transaction.price, transaction.section, transaction.name2, transaction.price2, transaction.section2, transaction.name3, transaction.price3, transaction.section3, transaction.date_of_purchase])	
			.catch(console.log)
	},
	itemsInSection(section){
		console.log('this is the result of my section query', section)
		let result = db.any(`
			SELECT name, id
			FROM groceryItems
			where section =$1
			`, [section.section]);
		console.log(result)
		return result
	},
	cheapItems(transactions){
		db.any(`
			SELECT price, id
			FROM groceryItems
			WHERE price =< $1
			ORDER BY price DESC
			`, [transactions.price])
		.catch('error')
	},
	countItemsInSection(section){
		db.any(`
			SELECT name, COUNT(section)
			FROM groceryItems
			WHERE section = $1
			GROUP BY name
		`, [section.section])
		.catch('error')
	},
	mostRecentOrders(transactions){
		db.any(`
		SELECT date_of_purchase, id
		FROM groceryItems
		WHERE date_of_purchase >= $1
		ORDER BY date_of_purchase DESC
		`,[transactions.date_of_purchase]
		)
	},
	lastShopperName(shopper){
		db.one(`
		SELECT MAX(shopperName) as name
		FROM groceryItems
		`)
		.catch('error')
	},
	orderTotal(transactionId){
		console.log(transactionId)
		db.one(`
			SELECT *
			FROM groceryItems
			WHERE transactionID = $1
		`,[transactionId.transactionID])
		.catch('error')
	}
}
/*
real-shoppers = lists the names of all shoppers who have at least 1 order	
shopper-orders = lists the orders for a given shopper
product-list = lists all products which belong to the given section		
List all orders for a given shopper id, returns the order id, and the total cost of the order.




*/
module.exports = query;