const productData = require("./data");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());


    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get("/product", (req, res) => {
      res.json(productData);
    });
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
