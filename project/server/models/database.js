// database.js
const mysql = require('mysql');

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      //password: 'your_password',
      database: 'food'
    });
  }

  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
      console.log('Connected to database');
    });
  }

  query(sql, params, callback) {
    this.connection.query(sql, params, callback);
  }
}

module.exports = Database;
