var express = require('express');
var axios = require('axios');
var fetch = require('node-fetch');

var router = express.Router();

let body = {
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
}


router.get('/', (req, res, next) => {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(function(response) {
      res.json(response.data)
    }).catch(function(error) {
      res.json('ERROR!!!')
    })
});

router.get('/:id', (req, res, next) => {
  let userId = req.params.id;
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

router.post('/post', (req, res, next) => {
  if(!req.body)
    return res.sendStatus(400);
  //this case without ready data
  //axios.post(`https://jsonplaceholder.typicode.com/users`, req.body).
  //I used my own example to check how it works through postman
  axios.post(`https://jsonplaceholder.typicode.com/users`, body).
  then(function(response) {
  res.json(response.data)
}).catch(function(error) {
  res.json('ERROR!!!')
})
});

router.put('/:id', (req, res, next) => {
  let userId = req.params.id;
  if(!req.body)
    return res.sendStatus(400);
  axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, body)
  .then(function(response) {
  res.json(response.data)
}).catch(function(error) {
  res.json('ERROR!!!')
})
});



module.exports = router;
