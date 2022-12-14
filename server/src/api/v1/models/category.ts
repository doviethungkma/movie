import mongoose, { mongo, Mongoose } from "mongoose";
import { schemaOptions } from "./modelOptions";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
  },
  schemaOptions
);

export default mongoose.model("Category", categorySchema);
