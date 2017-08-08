const express = require('express')
let app = express();
const ejs = require('ejs')
const bodyParser = require('body-parser')

// direct requests to the public directory
app.use( express.static( __dirname + '/public' ) );
// set up template
app.set( 'view engine', 'ejs' );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );


let daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}
// const days = req.params.daysOfWeek


// app.get('/', (req, res) =>{
// 	res.render('index')
// for(day in daysOfWeek){
// 	console.log(day)
// }
// })
let daysArr = []
app.get('/api/days/:day', (req, res)=>{
	for(day in daysOfWeek){
		// console.log('these are the params', day)
		 	console.log(day)
		 	const regie = /\:/g
		 let regieDay = req.params.day.replace(regie, ' ')
		 	console.log(regieDay)
		 if(regieDay === day){
		 	daysArr.push(day)
		 	// res.statusCode = 200
			console.log('this is the day', daysArr)
			res.send('2')
		}
		else if(req.day !== day.tuesday){
			res.render('index')
		}
		
		
	}
})



let port = process.env.PORT || 3005
app.listen(port, ()=>{
	console.log('the party is popping on port: ', port)
})