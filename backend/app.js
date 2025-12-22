const express= require("express");

const app = express ();

const userRouter = require("./routes/user");

app.use( "/home", userRouter); // use the middleware                // /home/user

// userRouter handles routes starting with '/'
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}   );
