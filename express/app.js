// 6.  Express.js

// npm init to initialize the package.json 
// npm init -y for automatically create package.json with default values


// dev Dependencies - for developpement purpose 
// dependencies - for production purpose


// like nodemon to restart server automatically only required in dev dependencies so 
// npm install nodemon --save-dev


// Create server 

const express= require('express');


const app = express ();


// api in express 
//get , post , put , delete, patch 

app.get("/home", (req,res)=>{

    res.send("<h1>this is Home Page of my website </h1>");

})

app.get("/api/user", (req,res)=>{
    res.status(200).json({
        success:true,
        user1:{
            name:"user123",
            age:22,
            email:"mail@gmail.com"

        }
      
    });
});


// get product by id 

app.get("/api/product/:productId", (req,res)=>{
   



    const Id = req.params.productId;

    // const {Id} = req.params;     // object destructuring

    const product = {
        id:1,
        name:"product 1",
    };
    res.status(200).json({
        success:true,
        product,        
    });


});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');  
    console.log("http://localhost:3000");
    
})