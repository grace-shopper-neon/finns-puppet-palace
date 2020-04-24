const router = require('express').Router()
const OrderList = require('../db/models/orderList')
const Product = require('../db/models/product')

router.get('/:cartId', async (req, res, next) => {
  try {
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
