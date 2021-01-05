const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const User = require('../models/User')

const Story = require('../models/Story')

//@desc    Login/Landing page
//@route   GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})

//@desc    get user list
//@route   GET /
router.get('/userlist', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    let user = await User.find({})
    res.json(user)
  } catch (error) {
    res.status(500)
    res.send('Error!!!')
  }
})

//@desc    find users
//@route   POST /finduser
router.get('/finduser', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    let user = await User.find({ firstName: req.query.findUser })
    res.json(user)
  } catch (error) {
    res.status(500)
    res.send('Error!!!')
  }
})

//@desc    Dashboard
//@route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  // console.log(res.user)
  try {
    const stories = await Story.find({ user: req.user.id }).lean()
    res.render('dashboard', {
      name: req.user.firstName,
      stories,
    })
  } catch (error) {
    console.error(error)
    res.render('error/500')
  }
})

module.exports = router
