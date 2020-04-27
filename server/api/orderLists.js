const router = require('express').Router()
const OrderList = require('../db/models/orderList')
const Product = require('../db/models/product')

router.get('/:cartId', async (req, res, next) => {
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
      where: {cartId: req.params.cartId},
      include: Product
    })
    res.send(orderLists)
  } catch (err) {
    next(err)
  }
})

module.exports = router
