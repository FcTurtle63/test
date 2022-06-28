const express  = require('express');
const bodyparser = require('body-parser');

const app = express();

var counterResponse = 0;

app.use(bodyparser.urlencoded({extended: true}));


// here we manage the client request (get)
app.get("/", function (req,res) {
//  console.log(req);

// server response
// res.send("Calculator running....")

// response wuth an entire html page (the index)
 res.sendFile(__dirname + "/index.html");
})

// manage the post request from Client
app.post("/", function (req,res) {
var num1 =  Number(req.body.num1);
var num2 =  Number(req.body.num2);

  var result = num1+num2;
   res.send("the result of calculation is .." + result);
})



// run server - listen
app.listen(process.env.PORT || 3000, function () {
console.log("http server Calculator run on port 3000" + "or on port " + process.env.PORT);
});
