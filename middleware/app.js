// 7. Middleware in Express.js


const express = require ('express'); // common js module system


// if want to do by es6 module 
// set type = module in package.json


// import express from 'express';  // es6 module system





// app.listen (3000, ()=>{
//     console.log("http://localhost:3000");
    
// });




// start code by using custome command like npm run dev 
//change in package.json
// "scripts": {
//     "dev": "nodemon app.js (put whatever file name you have)"
//   }







// for secret key use npm package 'dotenv'
// npm i dotenv
// secure the sensitive data like api key , db password etc and ports 

// import dotenv from 'dotenv';
const dotenv = require ('dotenv');
dotenv.config(); // get the data from .env file for below line to work (for above does not work )


const app = express ();

// POST API EXAMPLE


// middleware work between the client and server 
// when data is sent from client to server data come in chunks or buffers not readable data so use body parser (middle ware ), inbuild with express

app.use(express.json()); // to parse json data 
app.use(express.urlencoded({ extended: true })); // to parse url encoded data (use to use the middlware )

app.post("/user/login", (req,res)=>{

    const obj =req.body;
    console.log(obj

    );
    



    res.status(200).json({
        success:true,
        message: "User logged in successfully"
    })


});

  

app.listen (process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`); // $ is used for template literals
    
});




