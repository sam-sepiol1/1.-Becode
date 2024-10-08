const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const { checkDatabase, db } = require("./database");
const colors = require('colors');

const welcome_message = `
Welcome to your task manager, Press:`.underline.bold.blue +
`

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
`;

const noTasks = `
-------------------------------
No tasks to display
-------------------------------
`;

async function main() {
	try {
		console.log("-------------------------------");
		await checkDatabase();
		console.log("-------------------------------");
	} catch (err) {
		console.error(err);
	} finally {
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
		answer = parseInt(answer);
		handleUserChoice(answer);
	});
}

async function handleUserChoice(option) {
	switch (option) {
		case 1:
			clearConsole()
			await display_tasks();
			mainMenu();
			break;
			
			case 2:
			clearConsole()
			add_task();
			break;
			
			case 3:
			clearConsole()
			delete_task();
			break;
			
			case 4:
			clearConsole()
			task_done();
			break;
			
			case 5:
			clearConsole()
			task_pending();
			break;
			
			case 6:
			clearConsole()
			task_todo();
			break;
			
			case 7:
			clearConsole()
			await filter_task();
			break;
			
			case 8:
			clearConsole()
			search();
			break;
			
			case 9:
			clearConsole()
			groupBy();
			break;
			
			case 10:
			clearConsole()
			exit();
			break;

		default:
			invalid_answer();
			mainMenu();
			break;
	}
}

async function display_tasks() {
	clearConsole();
	const tasks = await getAllTasks();

	if (tasks.length === 0) {
		return console.log(noTasks);
	}

	let index = 1;
	tasks.forEach((task) => {
		console.log("-------------------------------");
		console.log(`${index}. ${task.task} | Status: ${task.status}|`);
		index++;
	});
	console.log("-------------------------------");
}

async function add_task() {
	const currentDateTime = new Date().toISOString().slice(0, 19).replace("T", " ");
	rl.question("Enter your task: ", async (answer) => {
		try {
			await new Promise((resolve, reject) => {
				db.query(`INSERT INTO tasks (task, created_on) VALUES (?, ?)`, [answer, currentDateTime], (err) => {
					if (err) {
						reject(new Error(`Error adding task: ${err.message}`));
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

	rl.question("Enter the number of the task to delete: ", (answer) => {
		const taskIndex = parseInt(answer) - 1;

		if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
			console.error("Invalid index. Please select a valid index.");
			return mainMenu();
		}
		const taskIdToDelete = tasks[taskIndex].id;

		db.query("DELETE FROM tasks WHERE id = ?", [taskIdToDelete], (err, result) => {
			if (err) {
				console.error("Error deleting task:", err.message);
				return mainMenu();
			}
			if (result.affectedRows === 0) {
				console.error("No task found with the given ID.");
				return mainMenu();
			}

			clearConsole();
			console.log("Task deleted successfully.");
			return mainMenu();
		});
	});
}

async function task_done() {
	const tasks = await getAllTasks();
	await display_tasks();
	const currentDateTime = new Date().toISOString().slice(0, 19).replace("T", " ");

	rl.question("Enter the number of the task to mark as done: ", (answer) => {
		const taskIndex = parseInt(answer) - 1;
		if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
			console.error("Invalid index. Please select a valid index.");
			return task_done();
		}
		const taskIdToMark = tasks[taskIndex].id;
		db.query("UPDATE tasks SET status = ?, updated = ? WHERE id = ?", ["Done", currentDateTime, taskIdToMark], (err, result) => {
			if (err) {
				console.error("Error marking task as done:", err.message);
			}
			if (result.affectedRows === 0) {
				console.error("No task found with the given ID.");
				return task_done();
			}
			clearConsole();
			console.log("Task marked as done.");
			return mainMenu();
		});
	});
}

async function task_pending() {
	const tasks = await getAllTasks();
	await display_tasks();
	const currentDateTime = new Date().toISOString().slice(0, 19).replace("T", " ");

	rl.question("Enter the number of the task to mark as pending: ", (answer) => {
		const taskIndex = parseInt(answer) - 1;
		if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
			console.error("Invalid index. Please select a valid index.");
			return task_pending();
		}
		const taskIdToMark = tasks[taskIndex].id;
		db.query("UPDATE tasks SET status = ?, updated = ? WHERE id = ?", ["Pending", currentDateTime, taskIdToMark], (err, result) => {
			if (err) {
				console.error("Error marking task as Pending:", err.message);
			}
			if (result.affectedRows === 0) {
				console.error("No task found with the given Index.");
				return task_pending();
			}

			clearConsole();
			console.log("Task marked as Pending.");
			return mainMenu();
		});
	});
}

async function task_todo() {
	const tasks = await getAllTasks();
	await display_tasks();
	const currentDateTime = new Date().toISOString().slice(0, 19).replace("T", " ");

	rl.question("Enter the number of the task to mark as To do: ", async (answer) => {
		const taskIndex = parseInt(answer) - 1;
		if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
			console.error("Invalid index. Please select a valid index.");
			return task_todo();
		}
		const taskIdToMark = tasks[taskIndex].id;
		db.query("UPDATE tasks SET status = ?, updated = ? WHERE id = ?", ["To do", currentDateTime, taskIdToMark], (err, result) => {
			if (err) {
				console.error("Error marking task as To do:", err.message);
				return mainMenu();
			}
			if (result.affectedRows === 0) {
				console.error("No task found with the given Index.");
				return mainMenu();
			}

			clearConsole();
			console.log("Task marked as To do.");
			return mainMenu();
		});
	});
}

async function filter_task() {
	let message = `
-------------------------------
Select your filter.
1. To do
2. Pending
3. Done
-------------------------------
Your choice : `;

	try {
		let filteredTasks = await getAllTasks();
		if (filteredTasks === 0) {
			clearConsole();
			return console.log(noTasks);
		}
		const filter = await new Promise((resolve) => {
			rl.question(message, (answer) => {
				answer = parseInt(answer);
				switch (answer) {
					case 1:
						resolve("To do");
						break;
					case 2:
						resolve("Pending");
					case 3:
						resolve("Done");
					default:
						break;
				}
			});
		});

		filteredTasks = filteredTasks.filter((task) => task.status === filter);
		if (filteredTasks.length === 0) {
			clearConsole();
			return console.error('No task with that status');
		}
		
		
		let index = 1;
		console.log("-------------------------------");
		filteredTasks.forEach((task) => {
			console.log(`${index}. ${task.task}`);
			index++;
		});
	} catch (err) {
		console.error("Error filtering tasks:", err.message);
		return mainMenu();
	} finally {
		mainMenu();
	}
}

async function search() {
	rl.question("Enter a keyword to search for: ", (keyword) => {
		const searchQuery = `%${keyword}%`;

		db.query("SELECT * FROM tasks WHERE task LIKE ?", [searchQuery], (err, result) => {
			if (err) {
				clearConsole();
				console.error("Error searching tasks:", err.message);
				return mainMenu();
			}
			if (result.length === 0) {
				clearConsole();
				console.error("No tasks found with the given keyword.");
				return mainMenu();
			}

			let index = 1;
			console.log("-------------------------------");

			result.forEach((task) => {
				console.log(`${index}. ${task.task} | Status: ${task.status}`);
				index++;
			});
			clearConsole();
			return mainMenu();
		});
	});
}

async function groupBy() {
	clearConsole();
	db.query("SELECT * FROM tasks ORDER BY status;", (err, result) => {
		if (err) {
			clearConsole();
			console.error("Error grouping tasks:", err.message);
			return mainMenu();
		}

		let currentStatus = "";

		result.forEach((task) => {
			if (task.status !== currentStatus) {
				currentStatus = task.status;
				console.log(`\nStatus: ${currentStatus}`);
				console.log("-------------------------------");
			}
			console.log(`- ${task.task}`);
		});
		mainMenu();
	});
}

function clearConsole() {
	process.stdout.write('\x1Bc')
}
function exit() {
	rl.close();
	db.end();
}

function invalid_answer() {
	return console.error("Not a valid answer");
}

main();