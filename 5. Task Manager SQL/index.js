const readline = require("readline");
const fs = require("fs");
const { log } = require("console");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const db = require('./database');


const welcome_message = `
-------------------------------
Welcome to your task manager, Press:
1. to see all your tasks,
2. to add a task,
3. to delete a task,
4. to mark a task as done,
5. to show tasks left to do,
6. to Exit the task manager
-------------------------------`;

const data = require("./data.json") || [];

function mainMenu() {
	console.log(welcome_message);

	rl.question("Your choice: ", (answer) => {
    handleUserChoice(answer)
	});
}

function handleUserChoice(option) {
  switch (option) {
    case "1":
      display_tasks();
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
      filter_task();
      mainMenu();
      break;

    case "6":
      rl.close();
      break;

    default:
      invalid_answer();
      break;
  }
}

function display_tasks() {
	db.query('select*from tasks', (err, result) => { 
		if (err) throw err;
		console.log(result);
	})
}

function add_task() {
	rl.question("Enter your task: ", (answer) => {
		db.query(`INSERT INTO tasks ${answer}`, (err) => { })






		// const new_task = {
		// 	id: data.length + 1,
		// 	task: answer,
		// 	status: false,
		// };
		// data.push(new_task);

		// console.log("Task added successfully!");
		// save_data();
		// mainMenu();
	});
}

function task_done() {
	if (Object.keys(data).length != 0) {
		rl.question("Enter the number of the task : ", (answer) => {
			data[answer - 1].status = !data[answer - 1].status;

			rl.question("Do you want to delete the task(y/n)", (decision) => {
				if (decision === "y") {
					data.splice(answer - 1, 1);

					save_data();
					mainMenu();
				} else {
					save_data();
					mainMenu();
				}
			});
		});
	} else {
		console.log("No task here");
		mainMenu();
	}
}

function delete_task() {
	if (Object.keys(data).length != 0) {
		display_tasks();

		rl.question(`Enter the number of the task to delete : `, (answer) => {
			if (parseInt(answer) > Object.keys(data).length) {
				invalid_answer();
				mainMenu();
			}
			if (data.length === 0) {
				log("Nothing to delete");
				mainMenu();
			}


			data.splice(answer - 1, 1);
			save_data();
			mainMenu();
		});
	}
}

function filter_task() {
	data.forEach((task) => {
		if (task.status === false) {
			console.log(`${task.id} : ${task.task}`);
		}
	});
	mainMenu();
}

function save_data() {
	fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
}

function invalid_answer() {
	console.log("Not a valid answer");
}

mainMenu();
