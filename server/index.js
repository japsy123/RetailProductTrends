const productData = require("./data");
const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(cors());

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

app.get("/product", (req, res) => {
  res.json(productData);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
