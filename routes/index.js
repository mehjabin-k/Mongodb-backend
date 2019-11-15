var express = require('express');
var router = express.Router();
var assert=require('assert');
var mongo=require('mongodb');
var MongoClient=require("mongodb").MongoClient;
var db;
var url="mongodb://localhost:27017/db";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});
router.get('/get-data',function(req,res,next) {

  var resultArray = [];

  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    var cursor = db.collection('myCollection').find();
    cursor.forEach(function (doc, err) {
          assert.equal(Null, err);
          resultArray.push(doc);
        },

        function () {
          db.close();
          res.render('index',{items:resultArray});
        });
  });
});

router.post('/insert',function(req,res,next)
  {

    var items= {
      Name :req.body.Name;
      Image :req.body.Image;
      summary :req.body.Summary;
  };

MongoClient.connect(url,function(err,db){
  assert.equal(null,err);
  db.collection('myCollection'),insertOne(items,function(err,result){
    assert.equal(null,err);
    console.log('inserted item');
    db.close();
  });
});
    req.redirect('/');
  });

mongo.connect(url,function(err,db) {
  assert.equle(null,err);

  db.collection('myCollection').insertOne(item,function(err, result){
    assert.equle(null,error);

    console.log("item inserted");

    db.close();
    res.render('index',items:{resultArray});
  });

});

module.exports = router;
