const express = require("express");

const app = express();
const PORT = 8080;
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

app.listen(PORT, () => {
    console.log("Running on port ", PORT);
});