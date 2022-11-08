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
      default: "user", //user: normal user - using in client. admin: admin user - full access. mod: can't access usermanager and package manager
    },
    package: [
      {
        type: {
          type: String,
          default: "normal",
        }, // vip, hbo, sport, all
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
      },
    ],
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
