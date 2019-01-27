const express = require('express')
const router = express.Router()
const { List, Item, User } = require('./models')

// parse application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: false }))
// parse application/json
router.use(express.json())

// example router.use((req, res, next) => { console.log('LISTS router'); next() })

router.route('/')
  .get(async (req, res, next) => {
    try {
      const lists = await List.findAll()
      console.log(`LISTS GET  ${lists}`)
      res.send('all lists')
    } catch(err) {
      next(err)
    }
  })
  .post(async (req, res, next) => {
    console.log(`LISTS POST `, req.body)
    try {
      const list = await List.create({
        title: req.body.title
      })
      console.log(`/ POST ${req.body} ${list}`)
      res.status(201).send('created')
    } catch (err) {
      console.log('/ POST ERROR: ', err)
      next(err)
    }
  })
  .put(async (req, res) => {
    //await (()=>{console.log(`/ PUT ${req.body}`)})()
    res.status(204).send('updated')
  })
  .delete(async (req, res) => {
    //await (()=>{console.log(`/ DELETE ${req.body}`)})()
    res.status(204).send('deleted')
  })

module.exports = router