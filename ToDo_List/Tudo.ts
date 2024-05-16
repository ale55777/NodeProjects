#! /usr/bin/env node  

import  inquirer from 'inquirer';

const MAX_SIZE: number = 1000;
console.log("To-Do List");

class ToDoList {
    private tasks: string[];
    private top: number;

    constructor() {
        this.tasks = [];
        this.top = -1;
    }

    addTask(task: string): void {
        if (this.top === MAX_SIZE - 1) {
            console.log("ToDo List is full. Cannot add more tasks.");
            return;
        }
        this.tasks.push(task);
        this.top++;
        console.log(`Task "${task}" added to the ToDo List.`);
    }

    completeTask(): void {
        if (this.top === -1) {
            console.log("ToDo List is empty. No task to complete.");
            return;
        }
        const task = this.tasks.pop();
        this.top--;
        console.log(`Task "${task}" completed and removed from the ToDo List.`);
    }

    displayTasks(): void {
        if (this.top === -1) {
            console.log("ToDo List is empty.");
            return;
        }
        console.log("Tasks in the ToDo List:");
        for (let i = this.top; i >= 0; i--) {
            console.log(`- ${this.tasks[i]}`);
        }



    }

    async printMenu(): Promise<number> {
        const menu = `
+---------------------------+
|         Menu:             |
+---------------------------+
| 1. Add Task               |
| 2. Complete Task          |
| 3. Display Tasks          |
| 4. Exit                   |
+---------------------------+
`;
        console.log(menu);

        const answer = await inquirer.prompt([
            {
                type: "input",
                name: "choice",
                message: "Enter your choice: ",
                validate: (input: string) => {
                    const choice = parseInt(input);
                    return choice >= 1 && choice <= 6 ? true : "Please enter a number between 1 and 6.";
                }
            }
        ]);
        return parseInt(answer.choice);
    }
}

async function  main() {
    const myList = new ToDoList();
    let choice: number;
    let task: string;

    do {
        choice = await myList.printMenu();

        switch (choice) {
            case 1:
                task = (await inquirer.prompt([{ type: "input", name: "task", message: "Enter task: " }])).task;
                myList.addTask(task);
                break;
            case 2:
                myList.completeTask();
                break;
            case 3:
                myList.displayTasks();
                break;
           
            case 4:
                console.log("====== Exiting program ======");
                break;
            default:
                console.log("Invalid choice. Please enter a number between 1 and 4.");
        }
    } while (choice !== 4);
}

main();
