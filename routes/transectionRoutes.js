const express= require('express');
const { addTransection, getAllTransection ,editTransection ,deleteTransection} = require('../controllers/transectionCtrl');

const router =express.Router();

//routes
//add transaction POST method 
router.post('/add-transection',addTransection)
//add transaction POST method 
router.post('/edit-transection',editTransection)
//delete transaction POST method 
router.post('/delete-transection',deleteTransection)

//get transection
router.post('/get-transection',getAllTransection)
module.exports= router;