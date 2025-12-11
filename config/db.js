const mysql = require("mysql2/promise");
require('dotenv').config();


class Database {
  connectDb() {
    try {
      const db = mysql.createPool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "root",
        database: process.env.DB_NAME || "restaurants",
        port: process.env.DB_PORT || 3306,
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
