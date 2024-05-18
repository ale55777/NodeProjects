#!/usr/bin/env node 
import inquirer from 'inquirer';
import { countWords } from './wordcounter.js';
async function main() {
    const userInput = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter Your Text:',
    });
    const wordCount = countWords(userInput.text, /\W+/);
    console.log(`Total Word count: ${wordCount}`);
}
main();
