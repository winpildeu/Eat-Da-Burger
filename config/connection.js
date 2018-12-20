// import the mysql module
const mysql = require('mysql');

// setup the connection settings
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'burgers'
});

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