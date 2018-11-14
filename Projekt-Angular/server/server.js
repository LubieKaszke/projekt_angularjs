var express = require('express');
var app = express();
var fs = require("fs");
var cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/list', function (req, res) {
   fs.readFile( __dirname + "/" + "lists.json", 'utf8', function (err, data) {
      res.send( JSON.parse( data ) );
   });
})

app.post('/addList', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "lists.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data.push({"owner":req.body.owner, "name":req.body.listName, "isVisible":true, "products":[]});
      fs.writeFile( __dirname + "/" + "lists.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(data);
   });
})

app.post('/addListProduct', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "lists.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data[req.body.index].products.push({"product": req.body.product, "done": false});
      fs.writeFile( __dirname + "/" + "lists.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(data);
   });
})

app.post('/editListProduct', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "lists.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data[req.body.listIndex].products[req.body.prodIndex].desc = req.body.value;
      fs.writeFile( __dirname + "/" + "lists.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(data);
   });
})

app.delete('/deleteListProduct', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "lists.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data[req.query.listIndex].products.splice(req.query.productIndex,1);
      fs.writeFile( __dirname + "/" + "lists.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
   });
})

app.delete('/deleteList/:idx', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "lists.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      console.log(data[0]);
      data.splice(req.params.idx,1);
      console.log(data);
      fs.writeFile( __dirname + "/" + "lists.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
        
      });
   });
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})