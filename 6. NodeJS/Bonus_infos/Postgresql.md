# Using PostgreSQL

PostgreSQL (often abbreviated psql) is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

## How does it work

Unlike SQLite, PostgreSQL does not allow you to store your databases in a chosen file. Instead, when you install postgres it automatically creates a new user named postgres on your computer. This is the only user that can access the system.

## Setup postgres

The easiest way to setup `postgres` on Ubuntu (or WSL) is to run :

```
sudo apt install postgresql
```

For other system you can refer to the [official documentation](https://www.postgresql.org/download/)

## Creating a database

The first step is to log in as the `postgres` user on your machine, and lauch the interactive psql terminal:

```
sudo -u postgres psql
```

Once you are logged into postgres, you'll have to create a new database for your project, and create a postgres admin to access it. This is done using the following SQL query:

```sql
CREATE DATABASE my_new_project;
CREATE USER my_new_project_admin WITH ENCRYPTED PASSWORD '69CiY#dLzc6RUyGewc';
GRANT ALL PRIVILEGES ON DATABASE my_new_project TO my_new_project_admin;
```

- We just created a database called `my_new_project`
- We created a user named `my_new_project_admin` which has all the rights on that DB (create, delete and edit tables and all its data)
- We gave the password `69CiY#dLzc6RUyGewc` to `my_new_project_admin`

Once your database is created exit the `psql` command line tool (`ctrl + d` or type `\q`).

### Good practices

- Create a new db for each project
- Create a new postgres admin for each new db
- Name the admin according to the project. Ex: If you create a db called `twitter`, name its admin `twitter_admin`
- Always use a strong randomly generated password
