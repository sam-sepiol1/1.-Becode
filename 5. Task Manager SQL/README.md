# Task Manager CLI Application

This is a command-line interface application for managing tasks, built with Node.js. The application allows users to view, add, delete, and update tasks in a MySQL database. It provides various options to handle tasks with different statuses like "Done", "Pending", and "To do".

## Features

1. **View All Tasks:** Displays a list of all tasks with their status.
2. **Add a New Task:** Allows users to add a new task to the database.
3. **Delete a Task:** Enables users to remove a task based on its index.
4. **Mark a Task as Done:** Marks a selected task as "Done".
5. **Mark a Task as Pending:** Marks a selected task as "Pending".
6. **Mark a Task as To Do:** Marks a selected task as "To do".
7. **Filter Tasks:** Filter tasks in function of status.
8. **Search Tasks :** Search tasks that contains a keyword.
9. **Display Tasks by Status :** Display each tasks sorted by status.
10. **Exit :** Exit the app.

## Installation

**1. Clone the repository to your local machine:**

```bash
git clone <repository-url>
cd into the folder
```

**2. Install the dependencies:**

```bash
npm i
```

1. Modify the database configuration (`host`, `user`, `password`) as needed in the `database.js` file. The programm will create a database called 'task_manager' by itself when you run it.
Be aware that you need a running local server in order to node to create the database. I personnaly use Docker and Stackbricks. 

## Usage

**1. Start the application**

```bash
node index.js
```

**2. Follow the prompts displayed in the terminal to manage your tasks:**

```
-------------------------------
Welcome to your task manager, Press:
1. to see all your tasks.
2. to add a task.
3. to delete a task.
4. to mark a task as done.
5. to mark a task as pending.
6. to mark a task as to do.
7. to filter tasks.
8. to search a task with a keyword.
9. to display tasks by status.
10. to exit the task manager.
-------------------------------
```

Enter the corresponding number for the action you want to perform.

