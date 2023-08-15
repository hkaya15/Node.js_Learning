const express= require('express');

const router=express.Router();

router.use('/add',(req,res,next)=>{
    console.log('Logging');
    //res.send('<h1>Add</h1>')
    next() // continue to the next middleware
});

module.exports=router;