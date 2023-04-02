const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'practice_sid70'
});

conn.connect((err)=>{
    if ( err ) throw err;
    console.log('database connected!')
});

module.exports = conn;