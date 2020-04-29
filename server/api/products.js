const router = require('express').Router()
const Product = require('../db/models/product')

const PER_PAGE = 8

// isAdmin gatekeeper
const isAdmin = (req, res, next) => {
  const currUser = req.user // this is the currently authenticated user
  if (currUser) {
    if (currUser.isAdmin) {
      next()
    } else {
      next(new Error('Not Authorized'))
    }
  } else {
    res.status(403)
    next(new Error('Not Authenticated'))
  }
}

router.get('/', async (req, res, next) => {
  try {
    const page = req.query.page || 1

    const findOptions = {
      limit: PER_PAGE,
      offset: (page - 1) * PER_PAGE
    }

    const products = await Product.findAll(findOptions)

    res.send(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.send(product)
  } catch (err) {
    next(err)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    // todo: validate data
    const product = await Product.create(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

module.exports = router
