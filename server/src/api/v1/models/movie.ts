import mongoose from "mongoose";
import { schemaOptions } from "./modelOptions";

export const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    nameImage: {
      type: String,
    },
    year: {
      type: String,
    },
    country: {
      type: String,
    },
    description: {
      type: String,
    },
    actor: [
      {
        type: String,
      },
    ],
    type: [
      {
        type: String,
      },
    ],
    totalEp: {
      type: Number,
    },
    thumb: {
      type: String,
      require: true,
    },
    trailer: {
      type: String,
    },
    acceptable: {
      type: String,
      default: "all", //normal, vip, hbo, sport
    },
    tags: [
      {
        type: String,
      },
    ],
    episodes: [
      {
        id: {
          type: Number,
          required: true,
        },
        thumb: {
          type: String,
          require: true,
        },
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        time: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
  },
  schemaOptions
);

export default mongoose.model("Movie", movieSchema);
