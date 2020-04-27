const router = require('express').Router()
const {User} = require('../db/models')

// isAdmin gatekeeper
const isAdmin = (req, res, next) => {
  const currUser = req.user // this is the currently authenticated user
  if (currUser) {
    // if the user is an admin, they should receive all user info
    if (currUser.isAdmin) {
      next()
    } else {
      next(new Error('Not Authorized'))
    }
  } else {
    // otherwise only send the id and email info
    res.status(403)
    next(new Error('Not Authenticated'))
  }
}

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll()
    return res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    return res.json(user)
  } catch (err) {
    next(err)
  }
})

module.exports = router
