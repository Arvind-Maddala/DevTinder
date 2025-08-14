const express = require("express");
const app = express();

const {adminAuth, userAuth} = require("./middleware/auth");

//creating an middle for all the routes
app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res, next) => {
  res.send("All data is here");
});

// adding userAUth as middleware 

app.get("/user/getUser", userAuth, (req,res)=> {
    res.send('hello User')
});

app.get("/login", (req, res) => {
  res.send("Welcome to login page");
});
app.listen(3000);
