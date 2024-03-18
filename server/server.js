const express = require("express");
const cors = require("cors")
const database = require("./database.js")
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
    database.selectAllMembers();
})

app.post("/create-account", (req, res) => {
    if(!database.insertMember(req.body.email, req.body.password, req.body.name, req.body.address, req.body.phone)) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(500);
    }
})

app.post("/login", (req, res) => {
    console.log(req.body.password);
    console.log(database.checkPassword(req.body.email));
    if(true) {
        res.sendStatus(500);
    }
    else {
        res.sendStatus(500);
    }
})