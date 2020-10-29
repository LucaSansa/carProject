'use strict';

var express = require('express');
var router = express.Router();
var data = [];

router.get('/', function(req, res) {
  console.log('[GET] /car:', data)
  res.json(data);
  console.log(res.json);// lucas
});

router.delete('/', function(req, res){
  var id = req.body.plate;
  var response = data.filter(function(item){
    return item.plate !== id;
  });
  data = response;
  return res.json(response);  
})

router.post('/', function(req, res) {
  data.push({
    image: req.body.image,
    brandModel: req.body.brandModel,
    year: req.body.year,
    plate: req.body.plate,
    color: req.body.color
  });
  
  console.log('[POST] /car:', JSON.stringify({
    body: req.body,
    data
  }, null, 2))
  res.json({ message: 'success' });
});

module.exports = router;
