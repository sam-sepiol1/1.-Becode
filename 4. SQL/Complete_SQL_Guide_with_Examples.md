
# Comprehensive SQL Guide with Query Examples

## What is SQL?

SQL (Structured Query Language) is a powerful programming language used for querying, manipulating, and managing data in relational database systems. It provides a systematic way to create, retrieve, update, and delete data in databases.

### Key Concepts in SQL:

1. **Database**: A collection of organized data stored in tables.
2. **Table**: A structured set of data, organized in rows and columns.
3. **Row**: A single record in a table, also known as a tuple.
4. **Column**: A field in the table that contains the same type of data for all rows.
5. **Primary Key**: A unique identifier for each row in a table.
6. **Foreign Key**: A field that links one table to another.

## SQL Query Types

### 1. Data Definition Language (DDL)
Used to define the structure of the database, including tables, columns, and constraints.

- **CREATE**: Creates new database objects (e.g., tables, views).
- **ALTER**: Modifies existing database objects.
- **DROP**: Deletes database objects.

**Example: Creating a Table**
```sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);
```

### 2. Data Manipulation Language (DML)
Used to retrieve, insert, update, and delete data within the database.

- **SELECT**: Retrieves data from one or more tables.
- **INSERT**: Adds new records to a table.
- **UPDATE**: Modifies existing records in a table.
- **DELETE**: Removes records from a table.

**Example: Inserting a Record**
```sql
INSERT INTO employees (id, first_name, last_name, department, salary)
VALUES (1, 'John', 'Doe', 'HR', 50000.00);
```

### 3. Data Control Language (DCL)
Used to control access to the data in the database.

- **GRANT**: Provides user access privileges.
- **REVOKE**: Removes user access privileges.

**Example: Granting Privileges**
```sql
GRANT SELECT, INSERT ON employees TO user_name;
```

### 4. Transaction Control Language (TCL)
Used to manage transactions within the database.

- **COMMIT**: Saves the changes made in the current transaction.
- **ROLLBACK**: Undoes changes made in the current transaction.
- **SAVEPOINT**: Creates a point within a transaction to which you can later roll back.

**Example: Using Transactions**
```sql
BEGIN;
UPDATE employees SET salary = salary + 1000 WHERE department = 'Sales';
COMMIT;
```

## SQL Queries with Detailed Examples

### 1. Retrieving Data with SELECT
```sql
SELECT first_name, last_name
FROM employees
WHERE department = 'Sales';
```
This query retrieves the first and last names of employees who work in the `Sales` department.

### 2. Filtering Results with WHERE
```sql
SELECT * FROM employees
WHERE salary > 40000;
```
This query retrieves all employees with a salary greater than 40,000.

### 3. Using Aggregate Functions
```sql
SELECT department, COUNT(*) AS num_employees, AVG(salary) AS average_salary
FROM employees
GROUP BY department;
```
This query counts the number of employees and calculates the average salary per department.

### 4. Using JOINS to Combine Tables
```sql
SELECT employees.first_name, employees.last_name, departments.department_name
FROM employees
JOIN departments ON employees.department_id = departments.id;
```
This query combines data from `employees` and `departments` tables to show the department of each employee.

### 5. Subqueries
```sql
SELECT first_name, last_name
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```
This query retrieves the names of employees whose salary is above the average salary.

### 6. Using `CASE` for Conditional Logic
```sql
SELECT first_name, last_name,
CASE
    WHEN salary > 60000 THEN 'High'
    WHEN salary BETWEEN 40000 AND 60000 THEN 'Medium'
    ELSE 'Low'
END AS salary_level
FROM employees;
```
This query categorizes employees' salaries into `High`, `Medium`, or `Low` levels.

### 7. Updating Records
```sql
UPDATE employees
SET salary = salary + 5000
WHERE department = 'IT';
```
This query increases the salary of all employees in the `IT` department by 5,000.

### 8. Deleting Records
```sql
DELETE FROM employees
WHERE department = 'HR';
```
This query deletes all employees from the `HR` department.

### 9. Using Wildcards with LIKE
```sql
SELECT first_name, last_name
FROM employees
WHERE first_name LIKE 'J%';
```
This query retrieves all employees whose first names start with 'J'.

### 10. Ordering Results
```sql
SELECT first_name, last_name, salary
FROM employees
ORDER BY salary DESC;
```
This query retrieves employee names and salaries, sorted by salary in descending order.

## Best Practices for Writing SQL Queries

1. Use comments to explain complex queries:
   ```sql
   -- This query retrieves the top 5 highest-paid employees.
   SELECT first_name, last_name, salary
   FROM employees
   ORDER BY salary DESC
   LIMIT 5;
   ```
2. Use meaningful table and column names to make your queries self-explanatory.
3. Use `JOIN` clauses instead of subqueries when possible to improve performance.
4. Always test queries on a small set of data before running them on the entire database.

## Conclusion

SQL is an essential skill for database management and data analysis. This guide covers fundamental queries and operations to help you get started and master the basics of SQL. With practice, you can write efficient and complex queries to extract meaningful insights from your data.
