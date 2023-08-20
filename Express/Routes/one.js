const express= require('express');
const logController= require('../Controllers/one')

const router=express.Router();

router.use('/add', logController.getAddLog);

module.exports=router;