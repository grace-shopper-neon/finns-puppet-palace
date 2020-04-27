const router = require('express').Router()
const {User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const currUser = req.user // this is the currently authenticated user
    if (currUser) {
      // if the user is an admin, they should receive all user info
      if (currUser.isAdmin) {
        const users = await User.findAll()
        return res.json(users)
      }
    }
    // otherwise only send the id and email info
    res.status(403).send()
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const currUser = req.user
    if (currUser) {
      if (currUser.isAdmin) {
        const user = await User.findByPk(req.params.id)
        return res.json(user)
      }
    }
    res.status(403).send()
  } catch (err) {
    next(err)
  }
})

module.exports = router
