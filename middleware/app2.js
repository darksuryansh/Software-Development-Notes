const express = require ('express');

const app = express ();

const dotenv = require ('dotenv');
dotenv.config();


app.use(function(req, res, next) {// if next is not called the request will be stuck here

    console.log("middleware is called");
    next(); // to pass the request to the next middleware or route handler           // (previous function , next function )
    
});

app.get("/", (req,res)=>{
    res.send("home page ")
});




app.listen (process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`); // $ is used for template literals
    
});
