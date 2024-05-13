#! /usr/bin/env node  
import inquirer from 'inquirer';
let balance = 10000;
const correctPIN = '1234';
async function startATM() {
    console.log("PIN : 1234");
    console.log("BALANCE  : " + balance);
    const pinAnswer = await inquirer.prompt({
        type: 'password',
        name: 'pin',
        message: 'Please enter your PIN:',
        mask: '*'
    });
    console.log;
    if (pinAnswer.pin === correctPIN) {
        console.log("PIN correct. Access granted.");
        showMenu();
    }
    else {
        console.log("Incorrect PIN. Access denied.");
    }
}
async function showMenu() {
    const action = await inquirer.prompt({
        type: 'list',
        name: 'op',
        message: 'Select an option:',
        choices: [
            'Fast Cash',
            'Check Balance',
            'Deposit Money',
            'Withdraw Money',
            'Exit'
        ]
    });
    switch (action.op) {
        case 'Check Balance':
            await checkBalance();
            break;
        case 'Deposit Money':
            await Deposit();
            break;
        case 'Withdraw Money':
            await Withdraw();
            break;
        case 'Exit':
            console.log("Thank you for using the ATM.");
            process.exit();
    }
    if (action.action !== 'Exit')
        showMenu();
}
function checkBalance() {
    console.log("Ammount in Your Account is " + balance);
}
async function Deposit() {
    const amount = await inquirer.prompt({
        type: 'input',
        name: 'amount',
        message: 'Enter amount to deposit:',
        filter: (input) => parseFloat(input),
        validate: (input) => isNaN(parseFloat(input)) ? "Please enter a valid number." : true
    });
    deposit(amount.amount);
}
function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log("\n Rs " + amount + " has been deposited successfully");
        console.log("Available balanace " + balance);
    }
    else {
        console.log("Please enter a positive amount to deposit.");
    }
}
async function Withdraw() {
    const amount = await inquirer.prompt({
        type: 'input',
        name: 'amount',
        message: 'Enter amount to withdraw:',
        filter: (input) => parseFloat(input),
        validate: (input) => isNaN(parseFloat(input)) ? "Please enter a valid number." : true
    });
    withdraw(amount.amount);
}
function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log("\n Rs " + amount + "has been Withdrawn successfully");
        console.log("Available balanace : " + balance);
    }
    else if (amount > balance) {
        console.log("Insufficient funds.");
    }
    else {
        console.log("Please enter a positive amount to withdraw.");
    }
}
async function Fastcash(balance) {
    console.log("-------Fastcash--------");
    console.log("\n Please Select one option ");
    console.log("1.1000");
    console.log("2.3000");
    console.log("3.5000");
    console.log("1.10000");
    const a = await inquirer.prompt({
        type: 'input',
        name: 'am',
        message: 'Select Option ',
        filter: (input) => parseInt(input),
    });
}
startATM();
