const router = require('express').Router()
const Review = require('../db/models/review')

router.get('/:id', async (req, res, next) => {
  try {
    // REVIEW: findByPk can return null, should send 404
    const review = await Review.findByPk(req.params.id)
    res.send(review)
  } catch (err) {
    next(err)
  }
})
