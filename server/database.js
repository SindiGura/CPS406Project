const sqlite3 = require("./node_modules/sqlite3");
const database = new sqlite3.Database("./database.sqlite");

function createMembersTable() {
    database.serialize(() => {
        database.run("drop table if exists members");
        database.run("create table members (email TEXT, password TEXT, name TEXT, address TEXT, phone TEXT)");
    });
}

function createCoachesTable(){
    database.serialize(() => {
        database.run("drop table if exists coaches");
        database.run("create table coaches (email TEXT, password TEXT, name TEXT, address TEXT, phone TEXT, classes TEXT)");
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

function createRevenueTable() {
    database.serialize(() => {
        database.run("drop table if exists revenue")
        database.run("create table revenue (name TEXT, amount INTEGER)")
    });
}

function createDebtTable() {
    database.serialize(() => {
        database.run("drop table if exists debt")
        database.run("create table debt (name TEXT, amount INTEGER)")
    });
}
