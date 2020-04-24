const router = require('express').Router()
const {User} = require('../db/models')
//const passport = require('passport')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const {user} = req // this is the currently authenticated user
    if (user) {
      // if the user is an admin, they should receive all user info
      if (user.isAdmin) {
        const users = await User.findAll()
        return res.json(users)
      }
    }
    // otherwise only send the id and email info
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
