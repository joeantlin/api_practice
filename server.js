const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
require('./routes')(app)

app.listen(8000, () => {
    console.log("listening on port 8000");
});