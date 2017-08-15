const expect = require( 'chai' ).expect
const query = require('../db.js')

describe( 'getRealShopper()', ()=> {
  it( 'List all the shoppers that have at least 1 order, and also display the number of orders for them', ()=> {
    return query.getRealShopper()
    .then( results => {
      console.log('these are the results shoppers', results)
      expect(results[4].fname).to.equal('John')
      expect(results[3].fname).to.equal('Jane')
      expect(results[1].number_of_orders).to.equal(5)
      // expect(results[0]["number_of_orders"]).to.equal(2)
    })
  })
})

describe('getShopperOrders()', ()=> {
  it( 'lists the orders for a given shopper id', ()=> {
    return query.getShopperOrders(1)
    .then( results => {
      console.log('these are the results orders', results)
      expect(results[0].total_cost).to.equal('5.76')
      expect(results[1].order_id).to.equal(1)
      // expect(results[1].number_of_orders).to.equal(5)
      // expect(results[0]["number_of_orders"]).to.equal(1)
    })
  })
})

describe('getProductList()()', ()=> {
  it( 'lists the names of all in a given section', ()=> {
    return query.getProductList('meat')
    .then( results => {
      console.log('these are the results products', results)
      expect(results[0].product_name).to.equal('Bacon')
      expect(results[1].product_name).to.equal('Fish')

      // expect(results[1].order_id).to.equal(1)
      // expect(results[1].number_of_orders).to.equal(5)
      // expect(results[0]["number_of_orders"]).to.equal(1)
    })
  })
})