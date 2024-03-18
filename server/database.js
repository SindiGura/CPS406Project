const sqlite3 = require("./node_modules/sqlite3");
const database = new sqlite3.Database("./database.sqlite");

function createMembersTable() {
    database.serialize(() => {
        database.run("drop table if exists members");
        database.run("create table members (email TEXT, password TEXT, name TEXT, address TEXT, phone TEXT)");
    });
}

function createClassTables() {
    database.serialize(() => {
        database.run("drop table if exists class1")
        database.run("create table class1 (member TEXT, paid INTEGER)")
        database.run("drop table if exists class2")
        database.run("create table class2 (member TEXT, paid INTEGER)")
        database.run("drop table if exists class3")
        database.run("create table class3 (member TEXT, paid INTEGER)")
    });
}

function selectAllMembers() {
    database.all("select * from members",
    (error, row) => {
        error ? console.log(error) : console.log(row);
    })
}

function insertMember(email, password, name, address, phone) {
    database.all("insert into members (email, password, name, address, phone) values ($email, $password, $name, $address, $phone)",
    {
        $email: email,
        $password: password,
        $name: name,
        $address: address,
        $phone: phone
    }, (error) => {
        return error ? true : false
    })
}

function checkPassword(email) {
    database.all("select password from members where email = $email",
    {
        $email: email
    }, (error, row) => {
        return error ? error : row
    })
}

module.exports = {
    createMembersTable,
    createClassTables,
    selectAllMembers,
    insertMember,
    checkPassword
}