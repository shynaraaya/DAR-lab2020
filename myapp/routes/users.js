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
  axios.post(`https://jsonplaceholder.typicode.com/users`, {
    name: "Shynara",
    username: "shynaraaya",
    email: "aya@gmail.com",
    address: {
      street: "Abay",
      suite: "1",
      city: "Almaty",
      zipcode: "929983874",
      geo: {
        lat: "37.3159",
        lng: "81.1496"
      }
  },
    phone: "777898",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
}).then(function(response) {
  console.log(response.data)
}).catch(function(error) {
  res.json('ERROR!!!')
})
});


module.exports = router;
