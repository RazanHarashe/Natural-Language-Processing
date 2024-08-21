const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

app.post('/api', (req, res) => {
    const url = req.body.url;

    // Fake API response
    const fakeApiResponse = {
        polarity: 'positive',
        subjectivity: 'subjective',
        text: 'This is a sample response from the API.',
    };

    res.send(fakeApiResponse);
});

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});
