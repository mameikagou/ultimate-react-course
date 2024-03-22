




let mysql = require('mysql');
// import mysql from 'mysql';

let connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'mysql'
})

connection.connect((error,results)=>{
  if(error) throw error;
  console.log(results);

  connection.query('SHOW TABLES;', function(error, results, fields){
    if(error) throw error;
    console.log(results);
  })
  
});





