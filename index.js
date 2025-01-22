const express = require("express");

const app = express();
const PORT = 8080;
let counter = 0;
app.use(express.json());

app.get("/visit", (req, res) => {
    const id = req.query.id;
    if(id) {
        console.log("[visited] ", id);
        res.status(200).json({"status": "read", "_id": id});
    } else {
        res.status(400).json({"status": "invalid_id tried to read"});
    }
});

app.listen(PORT, () => {
    console.log("Running on port ", PORT);
});