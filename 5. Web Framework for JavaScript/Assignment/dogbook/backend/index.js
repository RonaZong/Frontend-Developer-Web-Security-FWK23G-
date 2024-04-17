// Backend database
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", {
  dbName: "dogbook",
});

const db = mongoose.connection;
db.on("error", (err) =>
  err ? console.log(err) : console.log("Connected to dogbook database.")
);

// Schema for users and dogbooks of app
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

const DogbookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: false },
  age: { type: Number, required: true },
  gender: { type: String, required: false },
  breed: { type: String, required: false },
  bio: { type: String, requireed: true },
  friends: { type: String, required: true },
  image: { type: String, required: true },
});

const User = mongoose.model("users", UserSchema);
const Dogbook = mongoose.model("dogbooks", DogbookSchema);
User.createIndexes();
Dogbook.createIndexes();

const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const PORT = 5000
console.log(`App listen at port ${PORT}`);

app.get("/", (req, res) => {
  res.send("App is Working");
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



app.listen(PORT);
