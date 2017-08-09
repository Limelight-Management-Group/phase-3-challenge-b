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
	const regie = /\:/g
	let regieDay = req.params.day.replace(regie, '')
	for(day in daysOfWeek){
		// console.log('these are the params', day)
		 	console.log('day',day)
		 	console.log('regieday', regieDay)
		 if(regieDay == day){
		 	daysArr.push(day)
		 	console.log('this is the day i am looking at', day)
		 	if(day == 'monday'){
		 		res.statusCode = 200
				console.log('this is the day', daysArr)
				res.send('1') 		
		 	}else if(day === 'tuesday'){
				res.statusCode = 200
				console.log('this is the day', daysArr)
				res.send('2')
			}else if(day === 'wednesday'){
				res.statusCode = 200
				console.log('this is the day', daysArr)
				res.send('3')
			}else if(day == 'thursday'){
				res.statusCode = 200
				console.log('this is the day', daysArr)
				res.send('4')
			}else if(day == 'friday'){
				res.statusCode = 200
				console.log('this is the day', daysArr)
				res.send('5')
			}else if(day == 'saturday'){
				res.statusCode = 200
				console.log('this is the day', daysArr)
				res.send('6')
			}else if(day == 'sunday'){
				res.statusCode = 200
				console.log('this is the day', daysArr)
				res.send('7')
			} else if (regieday !== 'holiday'){
				console.log(regieday, 'compared to holiday')
				res.statusCode = 400
				res.send(`'holiday' is not a valid day!`)
				// res.redirect('404')
			}
		}
		}
		console.log(daysArr)

	// 	else if(req.day !== day.tuesday){
	// 		res.render('index')
		
		
	// }
})



let port = process.env.PORT || 3005
app.listen(port, ()=>{
	console.log('the party is popping on port: ', port)
})