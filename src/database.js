const mysql = require('mysql');
const{ database } = require ('./keys');
const {promisify} = require ('util');


 const poll= mysql.createPool(database);

 poll.getConnection((err,connection)=>{

  if (err) {
     if (err.code === 'PROTOCOL CONNECTION LOST') {
        console.error('DATABASE CONNECTION WAS CLOSED')
     }

     if(err.code === 'ER_CON_COUNT_ERROR') {
      console.error('DATABASE HAS TOMANY CONNECTIONS')
     }

     if(error.code === 'ECONNREFUSED') {
        console.error('DATABASE CONNECTION WAS REFUSED')
     }
  }
 
  if(connection) connection.release();
   console.log('DATABASE IS CONNECTED');  
   
   return;
});

poll.query= promisify(poll.query);

module.exports = poll;


 