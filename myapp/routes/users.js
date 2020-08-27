var express = require('express');
var axios = require('axios');

var router = express.Router();



router.get('/', (req, res, next) => {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(function(response) {
      res.json(response.data)
    }).catch(function(error) {
      res.json('ERROR!!!')
    })
});

router.get('/:id', (req, res, next) => {
  const userId = req.params.id;
  if (!userId) {
    res.json("ID is not found!")
  } else {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(function(response) {
        res.json(response.data)
      }).catch(function(error) {
        res.json("ERROR!!!")
      })
  }
});


router.post('/add', (req, res, next) => {
  if(!req.body) 
    return res.sendStatus(400);
  console.log(req.body);
  res.send(`${req.body}`);
});


module.exports = router;
