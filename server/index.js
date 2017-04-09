const express = require('express');
const path = require('path');
const app = express();

app.use('/lib', express.static(path.join(__dirname, '../lib')));
app.use('/examples', express.static(path.join(__dirname, '../examples')));

app.listen(3000);
