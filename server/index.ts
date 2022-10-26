import app from "./app";
import express from "express";
import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const port = process.env.PORT || 8001;
const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL as string).then(() => {
  console.log(`Connected to MongoDB: ${process.env.MONGODB_URL}`);
  server.listen(port, () => {
    console.log("Server is listening on port ", port);
  });
});
