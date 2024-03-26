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
app.post("/delete-from-classes", (req, res) => {
    database.all("delete from class1")
    database.all("delete from class2")
    database.all("delete from class3")
})

app.post("/submit-classes", (req, res) => {
    //database.all("delete from class1")
    //database.all("delete from class2")
    //database.all("delete from class3")
    if(req.body.class1 === "1"){
        
        database.all("insert into class1 (member, paid) values ($member, $paid)",
        {
            $member: req.body.member,
            $paid : 0
        }, (error) => {
            if(error) {
                res.status(500);
            }
            else {
            }
        })
    }
    if(req.body.class2 === "1"){
        console.log("hello")
        database.all("insert into class2 (member, paid) values ($member, $paid)",
        {
            $member: req.body.member,
            $paid : 0
        }, (error) => {
            if(error) {
                res.status(500);
            }
            else {
            }
        })
    }
    if(req.body.class3 === "1"){  
        database.all("insert into class3 (member, paid) values ($member, $paid)",
        {
            $member: req.body.member,
            $paid : 0
        }, (error) => {
            if(error) {
                res.status(500);
            }
            else {
            }
        })
    }
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
    database.all("select * from members where email = $email",
    {
        $email: req.body.email
    }, (error, row) => {
        if(row.length !== 0 && row[0].password === req.body.password) {
            res.status(200).json({row: row});
        }
        else {
            res.sendStatus(500);
        }
    })
})

app.post("/members/:num", (req, res) => {
    if(req.params.num === "1") {
        database.all("select * from class1 where member = $email",
        {
            $email: req.body.email
        }, (error, row) => {
            if(row.length !== 0) {
                res.status(200).json({row: row});
            }
            else {
                res.status(200).json({row: []});
            }
        })
    }
    else if(req.params.num === "2") {
        database.all("select * from class2 where member = $email",
        {
            $email: req.body.email
        }, (error, row) => {
            if(row.length !== 0) {
                res.status(200).json({row: row});
            }
            else {
                res.status(200).json({row: []});
            }
        })
    }
    else if(req.params.num === "3") {
        database.all("select * from class3 where member = $email",
        {
            $email: req.body.email
        }, (error, row) => {
            if(row.length !== 0) {
                res.status(200).json({row: row});
            }
            else {
                res.status(200).json({row: []});
            }
        })
    }
    else {
        res.sendStatus(500);
    }
})

app.get("/class/:num", (req, res) => {
    if(req.params.num === "1") {
        database.all("select * from members",
        (error, row) => {
            if(error) {
                res.sendStatus(500);
            }
            else {
                res.status(200).json({row: row});
            }
        })
    }
    else if(req.params.num === "2") {
        database.all("select * from members",
        (error, row) => {
            if(error) {
                res.sendStatus(500);
            }
            else {
                res.status(200).json({row: row});
            }
        })
    }
    else if(req.params.num === "3") {
        database.all("select * from members",
        (error, row) => {
            if(error) {
                res.sendStatus(500);
            }
            else {
                res.status(200).json({row: row});
            }
        })
    }
    else {
        res.sendStatus(500);
    }
})
