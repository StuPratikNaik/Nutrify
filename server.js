const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static("public"));


// MongoDB Connection

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected");

})

.catch((error) => {

  console.log(error);

});


// User Schema

const userSchema =
new mongoose.Schema({

  email: String,

  password: String

});

const User =
mongoose.model("User", userSchema);


// Signup Route

app.post("/signup",
async (req, res) => {

  const { email, password } =
  req.body;

  const existingUser =
  await User.findOne({ email });

  if(existingUser){

    return res.json({

      success: false,

      message:
      "Account already exists"

    });

  }

  const hashedPassword =
  await bcrypt.hash(password, 10);

  const newUser =
  new User({

    email,

    password: hashedPassword

  });

  await newUser.save();

  res.json({

    success: true,

    message:
    "Signup successful"

  });

});


// Login Route

app.post("/login",
async (req, res) => {

  const { email, password } =
  req.body;

  const user =
  await User.findOne({ email });

  if(!user){

    return res.json({

      success: false,

      message:
      "User not found"

    });

  }

  const isMatch =
  await bcrypt.compare(
    password,
    user.password
  );

  if(!isMatch){

    return res.json({

      success: false,

      message:
      "Wrong password"

    });

  }

  res.json({

    success: true,

    message:
    "Login successful"

  });

});


// Server

app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  );

});