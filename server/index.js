const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: 'dist' });
});

// Start the server
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});
