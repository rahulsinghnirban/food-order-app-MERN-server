const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const cors = require('cors');


mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://rahulsinghnirban007:neymar07@cluster0.sp7oz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' )
.then(()=>{
    console.log('DB Connected')
})
.catch((err)=>{
    console.log(err);
});


// seedDB();
app.use(express.json());

app.use(cors(
    {
        origin: ['http://localhost:3000' ,'https://hungry-jones-2e3e89.netlify.app'],
        credentials: true
    },
));


app.get('/hello', (req, res) =>{
    
    res.status(200).json({msg:'Hello from the server'});
    
})


const foodRoutes = require('./api/foodRoutes');

app.use(foodRoutes);













const port = process.env.PORT || 8000;


app.listen(port, ()=>{
    console.log(`Listening at ${port}`)
})
