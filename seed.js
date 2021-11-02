const mongoose = require('mongoose');
const Food = require('./models/food'); 

const Dummy_foods = [
    {
        name: 'Burger',
        price: 10,
        desc: 'Extra cheese and spicy.'
    },
    {
        name: 'Paneer Tikka',
        price: 22.25,
        desc: 'Yummy and juicy Paneer Tikka.'
    },
    {
        name: 'Pizza',
        price: 19.25,
        desc: 'Tasty and cheesy Pizza.'
    },
    {
        name: 'Pasta',
        price: 15.99,
        desc: 'Delicious italian Pasta.'
    },
    {
        name: 'Noodles',
        price: 9.99,
        desc: 'Long and tasty Noodles.'
    },
];


const seedDB = async()=>{

    await Food.deleteMany({});

    await Food.insertMany(Dummy_foods);

    console.log('DB Seeded')
}

module.exports = seedDB;