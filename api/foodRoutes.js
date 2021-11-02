const express = require('express');
const router = express.Router();
const Food = require('../models/food');
const Order = require('../models/orders');


router.get('/allfoods', async (req, res)=>{

    try{
        
        const allfoods = await Food.find({});
        res.status(200).json(allfoods);

    }
    catch(e){
        res.status(404).json({msg:'Something went wrong, Data could not be fetched.'})
    }

})


router.post('/placeorder', async (req, res)=>{

    try{
        const {cart: orderedItems} = req.body;
        const newOrder = new Order({orderedItems});
        
        await newOrder.save();

        res.status(200).json({msg: 'Order placed successfully'})

    }
    catch(e){
        res.status(400).json({msg: "Order cannot be placed right now"});
    }

})


module.exports = router;