#! /usr/bin/env node 
import inquirer from "inquirer";
async function main() {
    const S = await inquirer.prompt([{
            type: "input",
            name: "Val1",
            message: "Enter the source amount"
        }]);
    const I = await inquirer.prompt([{
            type: "input",
            name: "Val4",
            message: "Enter the Initial currency"
        }]);
    const T = await inquirer.prompt([{
            type: "input",
            name: "Val2",
            message: "Enter the Target currency"
        }]);
    const E = await inquirer.prompt([{
            type: "input",
            name: "Val2",
            message: "Enter the Exchange Rate to convert from source currency to target currency"
        }]);
    console.log("\n");
    console.log("INITIAL AMOUNT " + S.Val1);
    const initialCurrency = I.Val4;
    console.log(`The amount is in : ${initialCurrency}`);
    const targetCurrency = T.Val2;
    console.log(`The amount is converted in : ${targetCurrency}`);
    console.log("CONVETRTED AMOUNT:" + S.Val1 * E.Val2);
}
main();
