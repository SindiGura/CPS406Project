const express = require("express");
const cors = require("cors")
const sqlite3 = require("./node_modules/sqlite3");
const database = new sqlite3.Database("./database.sqlite");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
    database.all("select * from members",
    (error, row) => {
        error ? console.log(error) : console.log(row);
    })
})

app.post("/create-account", (req, res) => {
    database.all("select email from members where email = $email",
    {
        $email: req.body.email
    }, (error, row) => {
        if(row.length !== 0) {
            res.sendStatus(500);
        }
        else {
            database.all("insert into members (email, password, name, address, phone) values ($email, $password, $name, $address, $phone)",
            {
                $email: req.body.email,
                $password: req.body.password,
                $name: req.body.name,
                $address: req.body.address,
                $phone: req.body.phone
            }, (error) => {
                if(error) {
                    res.sendStatus(500);
                }
                else {
                    res.sendStatus(200);
                }
            })
        }
    })
})

app.post("/login", (req, res) => {
    database.all("select password from members where email = $email",
    {
        $email: req.body.email
    }, (error, row) => {
        if(row.length !== 0 && row[0].password === req.body.password) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(500);
        }
    })
})