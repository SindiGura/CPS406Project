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
    database.all("select * from class1",
    (error, row) => {
        error ? console.log(error) : console.log(row);
    })
    database.all("select * from class2",
    (error, row) => {
        error ? console.log(error) : console.log(row);
    })
    database.all("select * from class3",
    (error, row) => {
        error ? console.log(error) : console.log(row);
    })
    database.all("select * from coaches",
    (error,row)=>{
        error ? console.log(error) : console.log(row);
    })
})


app.post("/submit-classes", (req, res) => {
    if(req.body.class1 === "1" || req.body.class1pay === "1"){
        database.all("delete from class1 where member = $email",
        {
            $email: req.body.member
        }, (error) => {
            if(error) {
                res.sendStatus(500);
            }
            else {
                database.all("insert into class1 (member, paid) values ($member, $paid)",
                {
                    $member: req.body.member,
                    $paid: parseInt(req.body.class1pay)
                }, (error) => {
                    if(error) {
                        res.status(500);
                    }
                    else {
                    }
                })
            }
        })
    }
    if(req.body.class2 === "1" || req.body.class2pay === "1"){
        database.all("delete from class2 where member = $email",
        {
            $email: req.body.member
        }, (error) => {
            if(error) {
                res.sendStatus(500);
            }
            else {
                database.all("insert into class2 (member, paid) values ($member, $paid)",
                {
                    $member: req.body.member,
                    $paid: parseInt(req.body.class2pay)
                }, (error) => {
                    if(error) {
                        res.status(500);
                    }
                    else {
                    }
                })
            }
        })
        
    }
    if(req.body.class3 === "1" || req.body.class3pay === "1"){
        database.all("delete from class3 where member = $email",
        {
            $email: req.body.member
        }, (error) => {
            if(error) {
                res.sendStatus(500);
            }
            else {
                database.all("insert into class3 (member, paid) values ($member, $paid)",
                {
                    $member: req.body.member,
                    $paid: parseInt(req.body.class3pay)
                }, (error) => {
                    if(error) {
                        res.status(500);
                    }
                    else {
                    }
                })
            }
        })
    }
})

app.post("/create-account", (req, res) => {
    if(req.body.isCoach === "false") {
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
    }
    else {
        database.all("select email from coaches where email = $email",
        {
            $email: req.body.email
        }, (error, row) => {
            if(row.length !== 0) {
                res.sendStatus(500);
            }
            else {
                database.all("insert into coaches (email, password, name, address, phone) values ($email, $password, $name, $address, $phone)",
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
    }
})

app.post("/login", (req, res) => {
    if(!req.body.isCoach){
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
    }
    else{
        database.all("select * from coaches where email = $email",
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
    }
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

app.post("/deleteClass/:num",(req,res)=>{
    if(req.params.num === "1"){
        database.all("DELETE FROM class1 WHERE member = (SELECT email FROM members WHERE name = $name)",{
            $name: req.body.name
        },(error)=>{
            if(error){
                res.sendStatus(500);
            }
        })
    }
    else if(req.params.num === "2"){
        database.all("DELETE FROM class2 WHERE member = (SELECT email FROM members WHERE name = $name)",{
            $name: req.body.name
        },(error)=>{
            if(error){
                res.sendStatus(500);
            }
        })
    }
    else if(req.params.num === "3"){
        database.all("DELETE FROM class3 WHERE member = (SELECT email FROM members WHERE name = $name)",{
            $name: req.body.name
        },(error)=>{
            if(error){
                res.sendStatus(500);
            }
        })
    }
})

app.get("/class/:num", (req, res) => {
    if(req.params.num === "1") {
        database.all("select name, phone, address, paid from class1 inner join members on members.email = class1.member",
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
        database.all("select name, phone, address, paid from class2 inner join members on members.email = class2.member",
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
        database.all("select name, phone, address, paid from class3 inner join members on members.email = class3.member",
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

app.get("/class/order/:num", (req, res) => {
    if(req.params.num === "1") {
        database.all("select name, phone, address, paid from class1 inner join members on members.email = class1.member order by paid",
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
        database.all("select name, phone, address, paid from class2 inner join members on members.email = class2.member order by paid",
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
        database.all("select name, phone, address, paid from class3 inner join members on members.email = class3.member order by paid",
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

app.get("/debt", (req, res) => {
    database.all("select * from debt",
    (error, row) => {
        if(error) {
            res.sendStatus(500);
        }
        else {
            res.status(200).json({row: row});
        }
    })
})

app.get("/get-coaches", (req, res) => {
    database.all("select * from coaches",
    (error, row) => {
        if(error) {
            res.sendStatus(500);
        }
        else {
            res.status(200).json({row: row});
        }
    })
})


app.get("/revenue", (req, res) => {
    database.all("select * from revenue",
    (error, row) => {
        if(error) {
            res.sendStatus(500);
        }
        else {
            res.status(200).json({row: row});
        }
    })
})

app.post("/revenue", (req, res) => {
    database.all("insert into revenue (name, amount) values ($name, $amount)",
    {
        $name: req.body.name,
        $amount: parseInt(req.body.amount)
    }, (error) => {
        if(error) {
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    })
})
