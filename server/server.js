const express = require("express");
const cors = require("cors")
const database = require("./database.js")
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

app.post("/create-account", (req, res) => {
    /*if(!database.insertMember(req.body.email, req.body.password, req.body.name, req.body.address, req.body,phone)) {
        res.status(200);
    }
    else {
        res.status(500);
    }*/
    console.log("hi")
    res.status(500);
})