class Account {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }
}


const myAccount = new Account(100); 
console.log(`Initial balance: $${myAccount.getBalance()}`);

myAccount.deposit(50);
myAccount.withdraw(20);
myAccount.withdraw(200);
console.log(`Final balance: $${myAccount.getBalance()}`);