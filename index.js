import dotenv from "dotenv";
import express from "express";

import UniqueTranferIdentityGenerator from "./classes/helpers/UniqueTransferIdentityGenerator.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

let counter = 0;
app.use(express.json());



app.get("/visit", (req, res) => {
    const id = req.query.id;
    var options = {
        root: __dirname,
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }

    if(id) {
        console.log("[visited] ", id);
        res.sendFile('test_image.png', options);
    } else {
        res.sendFile('test_image.png', options);
    }
});

app.listen(PORT,async () => {
    console.log(await UniqueTranferIdentityGenerator("sample@email.com", new Date()));
    console.log("Running on port ", PORT);
});