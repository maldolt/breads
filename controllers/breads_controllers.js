const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads.js')

// INDEX
breads.get('/', (req, res) => {
  res.render('index',
    {
      breads: Bread,
      title: 'Index Page'
    }
  )
})

// SHOW
// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.render('error404')
  }
})


module.exports = breads
