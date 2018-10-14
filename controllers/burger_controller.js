const express = require('express');
const orm = require('../config/orm');

const router = express.Router();

router.get('/', (req, res) => {//get all burgers
  orm.selectAll()
    .then((result) => {
      const burgers = {burgers: [...result]};
      res.render('index', burgers);
    })
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {//add burger
  const newBurger = req.body;
  orm.insertOne(newBurger)
    .then(() => res.render('index'))
    .catch((err) => console.log(err));
});

router.patch('/', (req, res) => {//modify burger data
  const id = req.body.id;
  orm.updateOne(id)
    .then(() => res.render('index'))
    .catch((err) => console.log(err))
});

module.exports = router;