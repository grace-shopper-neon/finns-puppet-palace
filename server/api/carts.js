const router = require('express').Router()
const Cart = require('../db/models/cart')

router.post('/', async (req, res, next) => {
  try {
    const newCart = await Cart.create()
    req.session.cartId = newCart.id
    req.cart = newCart

    res.send(newCart)
  } catch (err) {
    next(err)
  }
})

module.exports = router
