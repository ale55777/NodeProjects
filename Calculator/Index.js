#! /usr/bin/env node 
import inquirer from "inquirer";
async function main() {
    const answer = await inquirer.prompt([{
            type: "input",
            name: "Val1",
            message: "First Value"
        }]);
    const answer2 = await inquirer.prompt([{
            type: "input",
            name: "Val2",
            message: "Second Value"
        }]);
    console.log("Select");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    const answer3 = await inquirer.prompt([{
            type: "input",
            name: "choice",
            message: "Enter Choice:"
        }]);
    const choice = parseInt(answer3.choice);
    // console.log(choice);
    switch (choice) {
        case 1:
            console.log(add(+answer.Val1, +answer2.Val2));
            break;
        case 2:
            console.log(sub(+answer.Val1, +answer2.Val2));
            break;
        case 3:
            console.log(mul(+answer.Val1, +answer2.Val2));
            break;
        case 4:
            console.log(div(+answer.Val1, +answer2.Val2));
            break;
        default:
            console.log("Invalid Choice");
            break;
    }
}
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
main();
