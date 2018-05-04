const express = require('express');

const app = express();

const fs = require('fs');

const bodyParser = require('body-parser');

app.get('./', function (req, res) {

    bodyParser =  JSON.parse('./videos.json');
    return res.send(bodyParser)
})


app.listen(3000, function() {
    console.log(' O servidor está online. ');
});