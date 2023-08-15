const express=require('express');
const path=require('path');
const oneMid= require('./Routes/one')
const rootDir = require('../Express/Util/path')
const app = express();



app.use(express.static(path.join(__dirname,'public'))); // External CSS Import

app.use('/admin',oneMid);

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','home.html')); // If your file is on another place like dirname siblings etc. you have to add after "__dirname", "../" sign.
    // path.join detects operating system and concatenate paths. Linux => / , Windows \ 
});

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found </h1>')
});
app.listen(3000);