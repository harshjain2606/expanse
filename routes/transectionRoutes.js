const express= require('express');
const { addTransection, getAllTransection } = require('../controllers/transectionCtrl');

const router =express.Router();

//routes
//add transaction POST method 
router.post('/add-transection',addTransection)

//get transection
router.post('/get-transection',getAllTransection)
module.exports= router;