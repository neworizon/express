var mysql = require('mysql');
var express = require('express')
var app = express();

const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

// Connection Test

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// Create Database

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });



// Create Table

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


// delete( Drop) Table

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "DROP Table customer";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table Deleted");
//     });
//   });

// Create Table with Primary Key

// con.connect(function(err) {
//     tableName='customer';
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = `CREATE TABLE ${tableName} (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))`;
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(`${tableName} table is created!`);
//     });
//   });

// Insert into table

// con.connect((err)=> {
//     if(err) throw err;
//     var sql = "Insert into customers (name,address) values ('kushal','zaheerabad')"
//     con.query(sql ,(err, result)=>{
//         if(err) throw err;
//         console.log('inserted successfully', sql)
//         // res ='select * from customers'
//         // console.log(con.query(res));
//     })
// })


// Read from Table

// con.connect((err) => {
//     if (err) throw err;
//     console.log('Connected');
//     var sql = "Select * from customers";
//     con.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result)
//     })
// })


// Delete by id

// con.connect((err) => {
//         if (err) throw err;
//         console.log('Connected');
//         var sql = "DELETE FROM `customers` WHERE `customers`.`id` = 5";
//         con.query(sql, (err, result) => {
//             if (err) throw err;
//             console.log(result)
//         })
//         var sql = "Select * from customers";
//         con.query(sql, (err, result) => {
//             if (err) throw err;
//             console.log(result)
//         })
//     })

// Update address


// con.connect((err) => {
//     if (err) throw err;
//     console.log('connected');
//     var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'zaheerabad'"
//     // var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//     con.query(sql, (err, result) => {
//         if (err) throw err;
//         console(result.affectedRows + 'records are updated.')
//     })
// })


// Update by id

// con.connect(function(err) {
//     if (err) throw err;
//     //Update the address field:
//     var sql = "UPDATE customers SET address = 'Palo Alto ,NY' WHERE id ='2'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });


// app.get('/get', (req,res)=>{
//     con.query(sql, (err, result) => {
//                 if (err) throw err;
//                 console.log(result)
//             });
//     res.send(result)
// }).listen(3000)


  
app.get('/getusers',(req,res)=>{
    // res.send('hello')
    sql= "select * from customers"
    con.query(sql, (err, result) => {
                        if (err) throw err;
                        console.log(result)
                        res.send(result)
                    });
            
})

app.get('/getusers/:id',(req,res)=>{
    // res.send('hello')
    sql= `select * from customers where id=?`
    con.query(sql,[req.params.id],(err, result) => {
                        // if (!err) 
                        console.log(result.length == 0)
                        if(result.length == 0)
                        res.send(`User with id :${[req.params.id]} is not found`)
                        else
                        res.send(result)
                    });
})

app.listen(3000)

// test