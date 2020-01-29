const express = require('express');
const app = express();


// *******************************************************************************
// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');

// db.serialize(function () {

//     db.run('CREATE TABLE lorem (info TEXT)');
//     var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

//     for (var i = 0; i < 10; i++) {
//         stmt.run('Ipsum ' + i);
//     }

//     stmt.finalize();

//     db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
//         console.log(row.id + ': ' + row.info);
//     });
// });

// db.close();
// *******************************************************************************
const sqlite3 = require('sqlite3')

const insertData = () => {
    console.log("Insert data")
    db.run('INSERT INTO contacts (name) VALUES (?)', ["contact 001"]);
}

const createTable = () => {
    console.log("create database table contacts");
    db.run("CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)", insertData);
}

let db = new sqlite3.Database("./mydb.sqlite3", (err) => {
    if (err) {
        console.log('Error when creating the database', err)
    } else {
        console.log('Database created!')
        /* Put code to create table(s) here */
        createTable()
    }
})

const read = () => {
    console.log("Read data from contacts");
    db.all("SELECT rowid AS id, name FROM contacts", function (err, rows) {
        rows.forEach(function (row) {
            console.log(row.id + ": " + row.name);
        });
    });
}

read();

db.close();
// *******************************************************************************


//middlewares
// app.use(cors());
app.use(express.json());


//routes
app.get('/users', (req, res) => res.send('USERS USERS'));
app.get('/routes', (req, res) => res.send('USERS ROUTES'));

module.exports = app;