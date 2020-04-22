'use strict'

const db = require('../server/db')
const {
  User,
  Review,
  Cart,
  Product,
  Order,
  OrderList
} = require('../server/db/models')

const {
  users,
  reviews,
  carts,
  products,
  orderLists,
  orders
} = require('./dummy-data')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const seededUsers = await Promise.all(users.map(u => User.create(u)))
  const seededProducts = await Promise.all(products.map(p => Product.create(p)))
  const seededCarts = await Promise.all(carts.map(c => Cart.create(c)))
  const seededReviews = await Promise.all(reviews.map(r => Review.create(r)))
  const seededOrders = await Promise.all(orders.map(o => Order.create(o)))
  const seededOrderLists = await Promise.all(
    orderLists.map(o => OrderList.create(o))
  )

  console.log(`seeded ${seededUsers.length} users`)
  console.log(`seeded ${seededReviews.length} reviews`)
  console.log(`seeded ${seededCarts.length} carts`)
  console.log(`seeded ${seededProducts.length} products`)
  console.log(`seeded ${seededOrders.length} orders`)
  console.log(`seeded ${seededOrderLists.length} orderLists`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
