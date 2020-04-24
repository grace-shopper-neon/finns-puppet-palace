const Faker = require('faker')

// * order here matters - e.g. we don't know how to randomize user ids for reviews if users don't exist yet
/* DUMMY DATA TO EXPORT ------------------------------ */
const products = generateProducts(20)
const randomProductId = createRandomizerFrom(products, 1)

const carts = generateCarts(10)
const randomCartId = createRandomizerFrom(carts, 1)

const users = generateUsers(10)
const randomUserId = createRandomizerFrom(users, 1)

const reviews = generateReviews(50)

const orders = generateOrders(50)
const randomOrderId = createRandomizerFrom(orders, 1)

const orderLists = generateOrderLists(50)

/* RANDOMIZING DATA ------------------------------ */
// returns a fn that returns either a random index or value from an input array
function createRandomizerFrom(arr, offset = 0) {
  return (getValue = null) => {
    // an arg 'value' returns a value instead of index
    const i = Math.floor(Math.random() * arr.length) + offset
    return getValue === 'value' ? arr[i] : i
  }
}

/* GENERATING DATA  ------------------------------ */
function generateUsers(num) {
  const usersData = []
  for (let i = 0; i < num; i++) {
    usersData.push({
      fullName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
      email: Faker.internet.email(),
      isAdmin: false,
      googleId: null
    })
  }
  return usersData
}

function generateProducts(num) {
  const productsData = []
  const colors = ['red', 'blue', 'green', 'orange', 'yellow']
  const randomColor = createRandomizerFrom(colors)
  const animals = ['pig', 'dog', 'cat', 'penguin', 'alligator']
  const randomAnimals = createRandomizerFrom(animals)
  const randomPrice = () => Math.floor(Math.random() * 100000) // no more than $1,000

  for (let i = 0; i < num; i++) {
    productsData.push({
      name: `${Faker.name.prefix()} ${Faker.name.lastName()}`,
      description: Faker.lorem.sentences(),
      imageUrl: Faker.image.animals(),
      color: randomColor('value'),
      animal: randomAnimals('value'),
      price: randomPrice()
    })
  }
  return productsData
}

function generateCarts(num) {
  const cartsData = []
  const status = ['inProgress', 'complete']
  const randomStatus = createRandomizerFrom(status)
  for (let i = 0; i < num; i++) {
    cartsData.push({
      status: randomStatus('value')
    })
  }
  return cartsData
}

function generateReviews(num) {
  const reviewsData = []
  const randomRating = () => Math.floor(Math.random() * 5) + 1

  for (let i = 0; i < num; i++) {
    reviewsData.push({
      userId: randomUserId(),
      productId: randomProductId(),
      rating: randomRating(),
      description: Faker.lorem.sentences()
    })
  }
  return reviewsData
}

function generateOrders(num) {
  const ordersData = []
  for (let i = 0; i < num; i++) {
    ordersData.push({
      userId: randomUserId(),
      fullName: `${Faker.name.firstName()} ${Faker.name.lastName()}`
    })
  }
  return ordersData
}

function generateOrderLists(num) {
  const orderListsData = []
  const randomQuantity = () => Math.floor(Math.random() * 100)

  for (let i = 0; i < num; i++) {
    orderListsData.push({
      orderId: randomOrderId(),
      productId: randomProductId(),
      cartId: randomCartId(),
      quantity: randomQuantity()
    })
  }
  return orderListsData
}

module.exports = {
  users,
  reviews,
  carts,
  products,
  orderLists,
  orders
}
