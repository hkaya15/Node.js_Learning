const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('home',{title:'HomePage', path:'/'});
});

module.exports=router;