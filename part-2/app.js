const express = require('express')
let app = express()
let ejs = require('ejs')
let bodyParser = require('body-parser')
const query = require('./database/db')


// direct requests to the public directory
app.use( express.static( __dirname + '/public' ) );
// set up template
app.set( 'view engine', 'ejs' );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );


app.get('/', (req, res) =>{
	query.
	res.render('index')
})

app.post('/cart', (req, res) =>{
	query.createTransaction(req.body)
	.then(transaction => {
		console.log('this is the transaction', transaction)
		res.render('index')
	}).catch('error')
})


let port = process.env.PORT || 3004
app.listen(port, ()=>{
	console.log('this is happending on port:', port )
})