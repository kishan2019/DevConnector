const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('helllo');
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`))