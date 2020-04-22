const router = require('express').Router()
const Review = require('../db/models/review')
const User = require('../db/models/user')

// get all reviews
router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({include: [User]})
    res.send(reviews)
  } catch (err) {
    next(err)
  }
})

// get single review with matching id
router.get('/:id', async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id, {include: [User]})
    res.send(review)
  } catch (err) {
    next(err)
  }
})

module.exports = router
