const router = require('express').Router()
const OrderList = require('../db/models/orderList')
const Product = require('../db/models/product')

router.get('/', async (req, res, next) => {
  try {
    const orderLists = await OrderList.findAll({
      where: {cartId: req.cart.id},
      include: Product
    })
    res.send(orderLists)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let [orderList, created] = await OrderList.findOrCreate({
      where: {cartId: req.cart.id, productId: req.body.productId}
    })

    if (!created) {
      const quantity = orderList.quantity + 1
      orderList = await OrderList.update(
        {quantity: quantity},
        {where: {cartId: req.cart.id, productId: req.body.productId}}
      )
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

module.exports = router
