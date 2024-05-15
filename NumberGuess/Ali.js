#! /usr/bin/env node
import inquirer from "inquirer";
let count = 0;
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = generateRandomNumber(1, 30); //range set 
console.log("Guess The  Number  Between 1 and 30  !!!");
console.log("\n");
while (true) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "Value",
            message: "Enter your Number -->>",
        },
    ]);
    const guess = Number(answer.Value); //Value converted to number 
    count++;
    if (randomNumber === guess) {
        console.log(`Congratulations !! You have guessed the number in ${count} attempt`);
        console.log("\n");
        break; //Output
    }
    else {
        console.log("You have guessed Wrong Try Again!!");
        console.log("\n");
    }
}
