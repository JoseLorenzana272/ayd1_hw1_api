const express = require('express');
const app = express();
const port = 3000;

app. use(express.json());

//First changes - for release 1.0
app.get('/', (req, res) => {
    res.json({
        name: 'José Daniel Lorenzana Medina',
        favorite_song: 'Shoulders - for KING & COUNTRY',
        version: '1.0'
    });
});

app.get('/info', (req, res) => {
    res.json({
        message: "API REST - Homework Git",
        version: "1.0",
        author: "José Daniel Lorenzana Medina"
    });
});

app.listen(port, () => {
    console.log(`API listening in http://localhost:${port}`);
});

module.exports = app;