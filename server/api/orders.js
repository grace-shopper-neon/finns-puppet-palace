const router = require('express').Router()
const OrderList = require('../db/models/orderList')
const Product = require('../db/models/product')
const Order = require('../db/models/order')

router.post('/', async (req, res, next) => {
  try {
    let order
    if (req.user) {
      order = await Order.create({userId: req.user.id})
    } else {
      order = await Order.create({userId: null})
    }
    res.send(order)
  } catch (err) {
    next(err)
  }
})

module.exports = router
