const express = require('express');
const parser = require('body-parser');
const home = require('./routes/home');
const users = require('./routes/users');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'))
app.use(parser.urlencoded({extended:false}))

app.use(home);
app.use(users);

app.listen(3000);
