require('dotenv').config();


const mysql = require('mysql');
const initialConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

function checkDatabase() {
    return new Promise((resolve, reject) => {
        initialConnection.connect((err) => {
            if (err) {
                console.error("Error connecting to MySQL server:", err.message);
                return reject(err);
            }
            console.log("Connected to MySQL server.");

            const dbName = 'task_manager';
            initialConnection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (err) => {
                if (err) {
                    console.error("Error creating database:", err.message);
                    initialConnection.end();
                    return reject(err);
                }
                console.log(`Database "${dbName}" checked or created successfully.`);

                initialConnection.query(`USE ${dbName}`, (err) => {
                    if (err) {
                        console.error("Error selecting database:", err.message);
                        initialConnection.end();
                        return reject(err);
                    }
                    console.log(`Database "${dbName}" selected.`);

                    const createTableQuery = `
                        CREATE TABLE IF NOT EXISTS tasks (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            task VARCHAR(255) NOT NULL,
                            status VARCHAR(10) DEFAULT 'To do'
                        )`;
                    initialConnection.query(createTableQuery, (err) => {
                        if (err) {
                            console.error("Error creating table:", err.message);
                            initialConnection.end();
                            return reject(err);
                        }
                        console.log("Table 'tasks' checked or created successfully.");
                        initialConnection.end();
                        resolve();
                    });
                });
            });
        });
    });
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "task_manager",
  connectionLimit: 10,
});

module.exports = { db: pool, checkDatabase };