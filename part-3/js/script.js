let modal = document.querySelector('.modal-content')
let modalOverlay = document.querySelector('.modal-overlay')
let modalOpen = document.getElementById('cart-button')
let modalClose = document.querySelector('.modal-close')
let addToCart = document.querySelectorAll('.item-button')
let prices = document.querySelectorAll('.item-price')
let names = document.querySelectorAll('.item-name')
let clearButton = document.querySelector('.modal-clear')
let shopCart = []
let shopCartName = document.querySelector('#name')
let shopCartPrice = document.querySelector('#price')
let total = document.querySelector('.modal-section-amount')
let priceArr = [] 
let count = document.querySelector('#cart-item-count')
let subtotal = []

addToCart.forEach((elements, index) =>
  elements.addEventListener('click', cartAdd(index))
)
modalOpen.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)
// addToCart.addEventListener('click', cartAdd)
clearButton.addEventListener('click', clearModal)
  
  function clearModal(){
  	shopCart = []
  	shopCartSize = 0;
  	console.log('this is on, boss',
  	updateCount())
  	updateTotal()
  	console.log('this is the shopCart: ', shopCart)
  	//now show most recent cart totals!
  }

function cartAdd(index) {
  return function (){
	shopCart.push({
	  name: names[index].textContent,
	  price: prices[index].textContent,
	})
	console.log('shopCart', shopCart)
	updateTotal()
	updateCount()
	// alert('this just pushed, dawg!')
  }
}
function updateCount(){
	count.innerHTML = shopCart.length;
	console.log(shopCart.length, 'item(s) here') 
}
function updateTotal(){
	let newTotal = total.innerHTML = subtotal
	console.log('this is working, dawg!!')
}
function openModal(){
	console.log(shopCart)
	if(shopCart.length === 0){
		console.log('empty')
		let price = shopCartPrice.innerHTML = 0.00
		let name = shopCartName.innerHTML = 'n/a'
		console.log('this is the name', name, price)
	}
	else{
		if(price){
			console.log('there are this many items in the cart: ', shopCart.length)
					let price = shopCart.forEach((itemprice) =>{
						console.log('this is the length', shopCart.length)
						for(var price in itemprice){
							 // return itemprice.price
						}
							price = shopCartPrice.innerHTML = itemprice.price
							console.log('this is the price', price)
							priceArr.push(price)
							console.log('pushed', price)
							console.log('this is price arr', priceArr)

							priceArr.map((listItemPrice) =>{
								var newLi = document.createElement("li");
								newLi.innerHTML = listItemPrice 
								console.log('this is the list Item Price --->',listItemPrice)
								var currentDiv = document.querySelector("#price"); 
  								currentDiv.append(newLi);
							})

							let RegArr = priceArr.toString()
							const regie = /\$/g


							let outcome = RegArr.replace(regie, ' ').split(',').map((price)=>{
							  let number = parseFloat(price, 10)
							  console.log('this is number', number)
							  return number
							})
							// let total = parseFloat(outcome)
							console.log('this is outcome',outcome)
							let subtotalval = outcome.reduce((a,b) =>{
								// console.log(a +b )
							  return (a+b)
							})
							console.log(subtotalval)
							let setval = total.innerHTML = '$' + Number((subtotalval).toFixed(4))
							console.log(setval)
							subtotal.push(setval)

					})
					let namesArr = []
					let name = shopCartName.innerHTML = shopCart.forEach((shopCartName) =>{
						console.log('this is the name-->', shopCartName.name)
						namesArr.push(shopCartName.name)
						namesArr.forEach((name) =>{
							var currentDiv = document.querySelector("#price"); 
  								currentDiv.append(name);
						})
					})
		}
	}
	
	// }
	modal.classList.add('modal-open')
	
	// div.classList.remove('foo')
	modalOverlay.classList.add('hide-overlay')
}

function closeModal(){
	modal.classList.remove('modal-open')
	// div.classList.remove('foo')
	modal.classList.remove('hide-overlay')
}	

