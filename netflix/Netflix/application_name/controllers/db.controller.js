const mongoose=require('mongoose');
const dbURI=require('../config/db.config').DB_URI;
const dbConnection = mongoose.createConnection(dbURI,

    {
    useNewUrlParser: true,
    useUnifiedTopology : true
  } );
module.exports=dbConnection;
 dbConnection.on('connected',()=>{
   console.log(`dbConnection: connected to ${dbURI}`)
 })
 dbConnection.on('error',
 err => console.log(`db.controller.js : connection error ${err} `)
);
const shutdown = (msg, callback) => {
  dbConnection.close(
    () => {
      console.log(` Mongoose shutdown : ${msg}`);
      callback();
    }
  );
}

// code pour gérer proprement le Ctrl+C sous windows et la réception de 'SIGINT'
// nécessite d'installer  le module readline :
//                           'npm install readline --save'
const readline = require('readline');
if (process.platform === 'win32') {
    readline
      .createInterface({
        input: process.stdin,
        output: process.stdout
      })
      .on('SIGINT', function() {
        process.emit('SIGINT');
      }) 
  };

// application killed (ctrl+c)
process.on('SIGINT', () => shutdown('application ends', () => process.exit(0)) );
// process killed (POSIX)
process.on('SIGTERM', () =>  shutdown('SIGTERM received', () => process.exit(0)) );
