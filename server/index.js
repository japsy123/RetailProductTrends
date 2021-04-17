const productData = require('./data')
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/product", (req, res) => {
    res.json(productData);
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});