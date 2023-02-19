import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "UserId",
        message: "Please enter your UserID"
    },
    {
        type: "number",
        name: "UserPin",
        message: "Please Enter Your UserPin"
    },
    {
        type: "list",
        name: "accountType",
        message: "Please select your desigred operation",
        choices: ["Current Account", "Saving Account"],
    },
    {
        type: "list",
        name: "paymentMethod",
        message: "Please select your payment method",
        choices: ["Fast Cash", "Withdraw Amount"],
    },
    {
        type: "list",
        name: "amount",
        message: "Please select Amount",
        choices: [500, 1000, 5000, 10000],
        when(answer) {
            return answer.paymentMethod === "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Please Enter your desigred Amount",
        when(answer) {
            return answer.paymentMethod === "Withdraw Amount";
        }
    },
]);
if (answer.UserId && answer.UserPin) {
    const accountbalance = Math.floor(Math.random() * 10000);
    console.log("Your Account balance is", accountbalance);
    const enteredAmount = answer.amount;
    if (accountbalance >= answer.amount) {
        const remainingBalance = accountbalance - enteredAmount;
        console.log("Your Transection was successful");
        console.log("Your remaining account balance is", remainingBalance);
    }
    else {
        console.log("Insufficient Balance");
    }
}
