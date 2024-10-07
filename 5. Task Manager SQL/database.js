const { 
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "BigFudge",
    password: "DatabaseManager2024",
    database: "task_manager",
    connectionLimit: 10
})

module.exports = pool;