import mongoose, { mongo, Mongoose } from "mongoose";
import { schemaOptions } from "./modelOptions";

const commentSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
