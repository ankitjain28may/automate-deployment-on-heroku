const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send("Hello world, Looking to automate this stuff on heroku..!");
})

app.listen(port);
console.log("Server started at port " + port);
