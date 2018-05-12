// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


// settings

app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/config/routes.js')(app)

app.use(bodyParser.json());
require('./server/config/mongoose');
require('./server/config/routes');

app.listen('8000', (req, res)=>{
    console.log('running on port 8000')
})