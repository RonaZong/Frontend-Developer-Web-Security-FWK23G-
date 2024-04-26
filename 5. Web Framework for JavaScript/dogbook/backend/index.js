// Backend database
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const ejs = require("ejs");

// Schema for users and dogbooks
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const DogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: false },
  age: { type: Number, required: true },
  gender: { type: String, required: false },
  breed: { type: String, required: false },
  bio: { type: String, requireed: true },
  friends: { type: String, required: true },
  image: { type: String, required: true },
});

const User = mongoose.model("user", UserSchema);
const Dog = mongoose.model("dog", DogSchema);
User.createIndexes();
Dog.createIndexes();

// To conect with mongoDB database
mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "dogbook",
  })
  .then(() => {
    console.log("Connection Successfull!");
  })
  .catch((err) => {
    console.log(err);
  });


// For backend and express
const app = express();
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("App is Working");
});

app.get("/api/dog", async (req, res) => {
  const dogs = await Dog.find();
  res.json(dogs);
});

app.get("/dog", (req, res) => {
  res.render("dog");
});

app.post("/api/dog", async (req, res) => {
  console.log(req.body.name);
  const dog = new Dog({
    name: req.body.name,
    nickname: req.body.nickname,
    age: req.body.age,
    gender: req.body.gender,
    breed: req.body.breed,
    bio: req.body.bio,
  });

  dog.save((err) => {
    if (err) {
      throw err;
    } else {
      res.render("dog");
    }
  });
});

app.post("/register", async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already register");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

app.listen(PORT, () => console.log(`App listen at port ${PORT}`));
