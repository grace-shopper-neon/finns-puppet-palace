const router = require('express').Router()
const OrderList = require('../db/models/orderList')
const Product = require('../db/models/product')
const Order = require('../db/models/order')

router.post('/', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.create({
        userId: req.user.id,
        fullName: req.user.fullName
      })
      res.send(order)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
