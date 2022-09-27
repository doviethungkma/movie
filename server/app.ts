import express from "express";
import logger from "morgan";
import cors from "cors";
import path from "path";
import router from "./src/api/v1/routes/index";

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", router);

export default app;
