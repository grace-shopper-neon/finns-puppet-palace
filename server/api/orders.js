const router = require('express').Router()
const OrderList = require('../db/models/orderList')
const Product = require('../db/models/product')
const Order = require('../db/models/order')

router.post('/', async (req, res, next) => {
  try {
    if (req.user) {
      await Order.bulkCreate(req.body.orderLists)
      await Order.update({userId: req.user.id}, {where: {cartId: req.cart.id}})
    }

    const orders = await Order.findAll({
      where: {cartId: req.cart.id, userId: req.user.id},
      include: [OrderList, Product]
    })

    res.send(orders)
  } catch (err) {
    next(err)
  }
})

module.exports = router
