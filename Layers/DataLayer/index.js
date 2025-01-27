import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { db } from "./firebase.js";

import healthRoute from "./routes/health.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/", healthRoute);

app.listen(PORT, () => {
    console.log("[LOG] Data Layer Started on port", PORT);
});