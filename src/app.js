const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./model/user");

// middlerware to get the data from the req
app.use(express.json());

app.post("/signup", async(req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added to the DB");
  } catch (err) {
        console.error(err);

    res.status(400).send("Error saving the user");
  }
});
connectDB()
  .then(() => {
    app.listen(3000);
    console.log("connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database");
  });
