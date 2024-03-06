const sqlite3 = require("./node_modules/sqlite3");
const db = new sqlite3.Database("./database.sqlite");

function create() {
    db.serialize(() => {
        db.run("drop table if exists data");
        db.run("create table data ()");
    });
}

module.exports = {
    create
}