const express=require('express');
const path = require('path');
const home=require('../Assignment/routes/home');
const users=require('../Assignment/routes/user');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    console.log("we are in the first middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("we are in the second middleware");
    next();
})

app.use(users);

app.use(home);



app.listen(3000);