
# MariaDB Documentation

**MariaDB** is an open-source relational database management system (RDBMS) that is a fork of MySQL. It was created by the original developers of MySQL to maintain an open-source version of the database with more features, performance improvements, and compatibility. MariaDB is highly compatible with MySQL, making it easy to switch between the two systems.

## Table of Contents
- [Installation](#installation)
- [Basic Commands](#basic-commands)
- [User Management](#user-management)
- [Database Management](#database-management)
- [Table Operations](#table-operations)
- [Querying Data](#querying-data)
- [Backup and Restore](#backup-and-restore)
- [Common Errors and Troubleshooting](#common-errors-and-troubleshooting)
- [Useful Resources](#useful-resources)

## Installation

### Linux
1. **Update Package Repository:**
   ```bash
   sudo apt **update**
   ```
2. **Install MariaDB:**
   ```bash
   sudo apt install mariadb-server
   ```
3. **Start and Enable MariaDB Service:**
   ```bash
   sudo systemctl start mariadb
   sudo systemctl enable mariadb
   ```

### Windows
1. **Download** the installer from the [MariaDB Downloads Page](https://mariadb.org/download/).
2. **Run the Installer** and follow the setup instructions.

### Verify Installation
To verify that MariaDB has been successfully installed, run:
```bash
mariadb --version
```

## Basic Commands

### Connecting to MariaDB
To connect to MariaDB using the command-line client:
```bash
mysql -u username -p
```
Replace `username` with your MariaDB username.

### Show Databases
List all databases on the server:
```sql
SHOW DATABASES;
```

### Create a New Database
Create a new database:
```sql
CREATE DATABASE database_name;
```

### Select a Database
To select and switch to a specific database:
```sql
USE database_name;
```

### Show Tables
Display all tables in the selected database:
```sql
SHOW TABLES;
```

### Exit MariaDB
To exit the MariaDB command-line client, use:
```sql
EXIT;
```

## User Management

### Create a New User
Create a new user with a specific username and password:
```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```
- Replace `username` with the desired username.
- Replace `host` with the hostname (use `%` for any host).
- Replace `password` with the desired password.

### Grant Privileges
Grant all privileges to a user on all databases:
```sql
GRANT ALL PRIVILEGES ON *.* TO 'username'@'host';
```

### Revoke Privileges
Revoke all privileges from a user:
```sql
REVOKE ALL PRIVILEGES ON *.* FROM 'username'@'host';
```

### Drop User
Delete a user from the database:
```sql
DROP USER 'username'@'host';
```

## Database Management

### Create a New Database
```sql
CREATE DATABASE database_name;
```

### Drop a Database
```sql
DROP DATABASE database_name;
```

### Show Tables in a Database
```sql
SHOW TABLES;
```

### Describe a Table Structure
To see the structure of a table:
```sql
DESCRIBE table_name;
```

## Table Operations

### Create a Table
```sql
CREATE TABLE table_name (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);
```

### Drop a Table
```sql
DROP TABLE table_name;
```

### Alter a Table
To add a column to an existing table:
```sql
ALTER TABLE table_name ADD COLUMN email VARCHAR(255);
```

To modify an existing column:
```sql
ALTER TABLE table_name MODIFY COLUMN age TINYINT;
```

### Insert Data into Table
```sql
INSERT INTO table_name (name, age) VALUES ('Alice', 25);
```

### Update Data
```sql
UPDATE table_name SET age = 26 WHERE name = 'Alice';
```

### Delete Data
```sql
DELETE FROM table_name WHERE name = 'Alice';
```

## Querying Data

### Select All Data from a Table
```sql
SELECT * FROM table_name;
```

### Select Specific Columns
```sql
SELECT name, age FROM table_name;
```

### Filter Data with WHERE
```sql
SELECT * FROM table_name WHERE age > 20;
```

### Sorting Data
```sql
SELECT * FROM table_name ORDER BY age DESC;
```

### Grouping Data
```sql
SELECT age, COUNT(*) FROM table_name GROUP BY age;
```

## Backup and Restore

### Backup a Database
To create a backup of a database using `mysqldump`:
```bash
mysqldump -u username -p database_name > backup.sql
```
- Replace `username` with your username.
- Replace `database_name` with the database to be backed up.

### Restore a Database
To restore a database from a backup file:
```bash
mysql -u username -p database_name < backup.sql
```
- Replace `username` and `database_name` accordingly.

## Common Errors and Troubleshooting

### ERROR 1045 (28000): Access denied for user
This error typically occurs due to incorrect login credentials. Verify the username and password used in the login command.

### ERROR 1064 (42000): Syntax error
This error is caused by incorrect SQL syntax. Review the query to ensure all keywords, table names, and column names are correct.

### ERROR 1146 (42S02): Table doesn't exist
This error occurs when the table specified in the query is not found. Check the database and table names for typos.

## Useful Resources

- [Official MariaDB Documentation](https://mariadb.com/kb/en/documentation/)
- [MariaDB GitHub Repository](https://github.com/MariaDB/server)
- [MariaDB Knowledge Base](https://mariadb.com/kb/en/)
- [MariaDB Forums](https://mariadb.com/forums/)

---

**Note**: Always backup your data before performing major changes to your database.
