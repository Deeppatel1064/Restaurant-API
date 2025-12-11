const mysql = require("mysql2/promise");

class Database {
  connectDb() {
    try {
      const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "root",
        database: "restaurants",
        port: 3306,
        waitForConnections: true,
        connectionLimit: 10,
      });

      console.log("Database connected");
      return db;
    } catch (error) {
      console.log("Database connection error:", error);
      throw error;
    }
  }
}

module.exports = new Database();
