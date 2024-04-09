// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(express.json());
// app.use(cors());

// let message = "Hello World";

// app.get("/", (_, response) => {
//   response.json({ message });
// });

// app.post("/", (request, response) => {
//   message = request.body.message;
//   response.sendStatus(201);
// });

// app.listen(3000, () => {
//   console.log("started server");
// });

import express from "express";
import cors from "cors";
import Message from "./model.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (_, response) => {
  const { id, message } = await Message.findOne();
  response.json({ id, message });
});

app.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { message } = request.body;
  await Message.findByIdAndUpdate(id, { message });
  const updateMessage = await Message.findById(id);
  response.status(201).json(updateMessage);
});

const start = async () => {
  try {
    const dbUrl = "mongodb://localhost:27017/message";
    await mongoose.connect(dbUrl);
    app.listen(3000, () => {
      console.log("started server");
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();