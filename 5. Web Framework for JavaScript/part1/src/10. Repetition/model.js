import mongoose from "mongoose";

mongoose.set("toJSON", {
  virtuals: true,
  transform: (_, converted) => {
    delete converted._id;
    delete converted.__v;
  },
});

const schema = new mongoose.Schema({
  message: String,
});

export default mongoose.model("Message", schema);