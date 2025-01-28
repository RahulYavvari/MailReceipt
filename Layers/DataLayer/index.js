import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { db } from "./firebase.js";

import healthRoute from "./routes/healthRoute.js";
import senderRoute from "./routes/senderRoute.js";
import receiverRoute from "./routes/receiverRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/", healthRoute);
app.use("/sender/", senderRoute);
app.use("/receiver/", receiverRoute);
app.use("/user/", userRoute);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ohh you are lost, read the API documentation to find your way back home :)'
    })
});

app.listen(PORT, () => {
    console.log("[LOG] Data Layer Started on port", PORT);
});