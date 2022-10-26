import mongoose, { mongo, Mongoose } from "mongoose";
import { schemaOptions } from "./modelOptions";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      default: "active",
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    role: {
      type: String,
      require: true,
      default: "user",
    },
    package: {
      type: String,
      default: "normal", //normal, vip, hbo, sport, all
    },
    packageStart: {
      type: Date,
    },
    packageEnd: {
      type: Date,
    },
    watching: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
        },
        episode: {
          type: Number,
        },
        time: Date,
      },
    ],
  },
  schemaOptions
);

export default mongoose.model("User", userSchema);
