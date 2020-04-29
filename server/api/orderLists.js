const router = require('express').Router()
const OrderList = require('../db/models/orderList')
const Product = require('../db/models/product')
const Cart = require('../db/models/cart')
router.get('/', async (req, res, next) => {
  try {
    console.log('req.user', req.user)
    console.log('req.session', req.session)

    if (!req.user) {
      console.log('user is not logged in')

      // Strategy One: Add a cart id to the session. Edit the
      // cart table when they add to or remove from the cart
      // if (!req.session.cartId) {
      //   const cart = await Cart.create();
      //   req.session.cartId = cart.id;
      // }

      // Strategy Two: For guests, store the entire cart on the session.
      // (It would be an array or something like that instead of a number.)
      if (!req.session.cart) {
        req.session.cart = 1
      } else {
        req.session.cart++
      }
    }

    const orderLists = await OrderList.findAll({
      where: {cartId: req.cart.id},
      include: Product
    })
    res.send(orderLists)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    console.log('req.params', req.params.id)
    const orderList = await OrderList.findByPk(req.params.id, {
      include: Product
    })
    res.send(orderList)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // created indicates whether or not this is a new orderList or a pre-existing one
    // if the order doesn't exist create it
    let [orderList, created] = await OrderList.findOrCreate({
      where: {cartId: req.cart.id, productId: req.body.productId}
    })

    // otherwise the order already existed - update it
    if (!created) {
      const quantity = orderList.quantity + 1
      await orderList.update({quantity})
    }

    // eager load the product
    const orderListWithProduct = await orderList.reload({include: Product})

    res.send(orderListWithProduct)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    if (req.user) {
      await OrderList.update(
        {orderId: req.body.orderId},
        {where: {cartId: req.cart.id}}
      )
    }

    const newCart = await Cart.create()
    req.session.cartId = newCart.id
    req.cart = newCart

    res.sendStatus('200')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    await OrderList.update(
      {quantity: req.body.quantity - 1},
      {where: {id: req.params.id}}
    )

    if (req.body.quantity === 1) {
      console.log('inside')
      await OrderList.destroy({where: {id: req.params.id}})
      res.sendStatus('200')
    } else {
      res.sendStatus('200')
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
