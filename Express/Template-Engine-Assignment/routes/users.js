const express = require('express');
const router = express.Router();

const users=[];
router.get('/users',(req,res,next)=>{
    res.render('users',{title:'Users',users,path:'/users'});
});

router.post('/users',(req,res,next)=>{
    users.push(req.body.name);
    res.redirect('/users');
});

module.exports=router;