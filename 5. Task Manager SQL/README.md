# Task Manager CLI Application

This is a command-line interface (CLI) application for managing tasks, built with Node.js. The application allows users to view, add, delete, and update tasks in a MySQL database. It provides various options to handle tasks with different statuses like "Done", "Pending", and "To do".

## Features

1. **View All Tasks:** Displays a list of all tasks with their status.
2. **Add a New Task:** Allows users to add a new task to the database.
3. **Delete a Task:** Enables users to remove a task based on its index.
4. **Mark a Task as Done:** Marks a selected task as "Done".
5. **Mark a Task as Pending:** Marks a selected task as "Pending".
6. **Mark a Task as To Do:** Marks a selected task as "To do".
7. **Show Tasks Left to Do:** Displays a filtered list of tasks that are not yet completed.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    cd task-manager-cli
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Modify the database configuration (`host`, `user`, `password`) as needed in the `database.js` file. The programm will create a database called 'task_manager' by itself when you run it.

## Usage

**1. Start the application**

```bash
node index.js
```

**2. Follow the prompts displayed in the terminal to manage your tasks:**

```
-------------------------------
Welcome to your task manager, Press:
1. to see all your tasks,
2. to add a task,
3. to delete a task,
4. to mark a task as done,
5. to mark a task as pending,
6. to mark a task as to do,
7. to show tasks left to do,
8. to Exit the task manager
-------------------------------
```

1. Enter the corresponding number for the action you want to perform.

