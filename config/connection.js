// import the mysql module
const mysql = require('mysql');

// setup the connection settings
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
}

// make the connection and log where it connects
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export the connection to be used by the ORM
module.exports = connection;