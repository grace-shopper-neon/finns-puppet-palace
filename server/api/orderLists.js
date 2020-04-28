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
    console.log('id in API Route', req.body.productId)

    // let orderList = await OrderList.findAll({where: {cartId: req.cart.id, productId: req.body.productId}, include: Product})[0]

    // if (orderList) {
    //   let orderList = await OrderList.update({where: {cartId: req.cart.id, productId: req.body.productId}, include: Product})
    // } else (!orderList) {
    //   let orderList = await OrderList.create()
    // }

    // let [orderList, created] = await OrderList.findOrCreate({
    //   where: {cartId: req.cart.id, productId: req.body.productId},
    //   include: Product,
    //   defaults: {quantity: 1}
    // })
    // console.log('New OrderList', orderList)

    // if (!created) {
    //   const quantity = orderList.quantity++
    //   orderList = await OrderList.update({quantity: quantity})
    // }

    const orderList = {id: 100, quantity: 1, cartId: 20, productId: 1}

    res.send(orderList)
  } catch (err) {
    next(err)
  }
})

module.exports = router
