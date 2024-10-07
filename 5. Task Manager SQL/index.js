const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const { checkDatabase, db } = require("./database");

const welcome_message = `
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
-------------------------------`;

async function main() {
	try {
		console.log("-------------------------------");
		await checkDatabase();
		console.log("-------------------------------");
	} 
	catch (err) {
		console.error(err);
	}
	finally{ 
		mainMenu();
	}
}

function getAllTasks() {
	return new Promise((resolve, reject) => {
		db.query("SELECT * FROM tasks", (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}

async function mainMenu() {
	console.log(welcome_message);

	rl.question("Your choice: ", (answer) => {
		handleUserChoice(answer);
	});
}

async function handleUserChoice(option) {
	switch (option) {
		case "1":
			await display_tasks();
			mainMenu();
			break;

		case "2":
			add_task();
			break;

		case "3":
			delete_task();
			break;

		case "4":
			task_done();
			break;

		case "5":
			task_pending();
			break;

		case "6":
			task_todo();
			break;

		case "7":
			await filter_task();
			break;

		case "8":
			process.exit(0);
			break;

		default:
			invalid_answer();
			mainMenu();
			break;
	}
}

async function display_tasks() {
	const tasks = await getAllTasks();

	let index = 1;
	console.log("-------------------------------");
	tasks.forEach((task) => {
		console.log(`${index}. Description: ${task.task}, Status: ${task.status}`);
		index++;
	});
}

async function add_task() {
	rl.question("Enter your task: ", async (answer) => {
		try {
			await new Promise((resolve, reject) => {
				db.query(`INSERT INTO tasks (task) VALUES (?)`, [answer], (err) => {
					if (err) {
						console.error("Error adding task:", err.message);
						reject(err);
					} else {
						console.log("Task added");
						resolve();
					}
				});
			});
		} catch (err) {
			console.error("Failed to add task:", err.message);
		} finally {
			mainMenu();
		}
	});
}

async function delete_task() {
	const tasks = await getAllTasks();
	await display_tasks();

	rl.question("Enter the number of the task to delete: ", async (answer) => {
		const taskIndex = parseInt(answer) - 1;
		if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
			console.log("Invalid index. Please select a valid index.");
			mainMenu();
			return;
		}
		const taskIdToDelete = tasks[taskIndex].id;

		try {
			await new Promise((resolve, reject) => {
				db.query("DELETE FROM tasks WHERE id = ?", [taskIdToDelete], (err, result) => {
					if (err) {
						console.error("Error deleting task:", err.message);
						reject(err);
					} else if (result.affectedRows === 0) {
						console.log("No task found with the given ID.");
						resolve();
					} else {
						console.log("Task deleted successfully.");
						resolve();
					}
				});
			});
		} catch (err) {
			console.error("Failed to delete task:", err.message);
		} finally {
			mainMenu();
		}
	});
}

async function task_done() {
	const tasks = await getAllTasks();
	await display_tasks();

	rl.question("Enter the number of the task to mark as done: ", async (answer) => {
		const taskIndex = parseInt(answer) - 1;
		if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
			console.log("Invalid index. Please select a valid index.");
			mainMenu();
			return;
		}
		const taskIdToMark = tasks[taskIndex].id;
		try {
			await new Promise((resolve, reject) => {
				db.query("UPDATE tasks SET status = ? WHERE id = ?", ["Done", taskIdToMark], (err, result) => {
					if (err) {
						console.error("Error marking task as done:", err.message);
						reject(err);
					} else if (result.affectedRows === 0) {
						console.log("No task found with the given ID.");
						resolve();
					} else {
						console.log("Task marked as done.");
						resolve();
					}
				});
			});
		} catch (err) {
			console.error("Failed to mark task as done:", err.message);
		} finally {
			mainMenu();
		}
	});
}

async function task_pending() {
	const tasks = await getAllTasks();
	await display_tasks();

	rl.question("Enter the number of the task to mark as pending : ", async (answer) => {
		const taskIndex = parseInt(answer) - 1;
		if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
			console.log("Invalid index. Please select a valid index.");
			mainMenu();
			return;
		}
		const taskIdToMark = tasks[taskIndex].id;
		try {
			await new Promise((resolve, reject) => {
				db.query("UPDATE tasks SET status = ? WHERE id = ?", ["Pending", taskIdToMark], (err, result) => {
					if (err) {
						console.error("Error marking task as Pending :", err.message);
						reject(err);
					} else if (result.affectedRows === 0) {
						console.log("No task found with the given Index.");
						resolve();
					} else {
						console.log("Task marked as Pending.");
						resolve();
					}
				});
			});
		} catch (err) {
			console.error("Failed to mark task as Pending:", err.message);
		} finally {
			mainMenu();
		}
	});
}

async function task_todo() {
	const tasks = await getAllTasks();
	await display_tasks();

	rl.question("Enter the number of the task to mark as To do: ", async (answer) => {
		const taskIndex = parseInt(answer) - 1;
		if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
			console.log("Invalid index. Please select a valid index.");
			mainMenu();
			return;
		}
		const taskIdToMark = tasks[taskIndex].id;
		try {
			await new Promise((resolve, reject) => {
				db.query("UPDATE tasks SET status = ? WHERE id = ?", ["To do", taskIdToMark], (err, result) => {
					if (err) {
						console.error("Error marking task as To do :", err.message);
						reject(err);
					} else if (result.affectedRows === 0) {
						console.log("No task found with the given Index.");
						resolve();
					} else {
						console.log("Task marked as To do.");
						resolve();
					}
				});
			});
		} catch (err) {
			console.error("Failed to mark task as To Do :", err.message);
		} finally {
			mainMenu();
		}
	});
}

async function filter_task() {
	try {
		const tasks = await new Promise((resolve, reject) => {
			db.query("SELECT * FROM tasks WHERE status = 0", (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});

		tasks.forEach((task) => {
			console.log(`Task ID: ${task.id}, Description: ${task.task}`);
		});
	} catch (err) {
		console.error("Error filtering tasks:", err.message);
	} finally {
		mainMenu();
	}
}

function invalid_answer() {
	console.log("Not a valid answer");
}

main();
