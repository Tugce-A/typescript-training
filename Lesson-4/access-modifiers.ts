// BankAccount class with encapsulation principles
class BankAccount {
    protected accountNumber: number;
    private balance: number;
    public owner: string;
  
    constructor(accountNumber: number, initialBalance: number, owner: string) {
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
      this.owner = owner;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposit: ${amount} - New Balance: ${this.balance}`);
    }
  
    public getBalance(): number {
      return this.balance;
    }
  }
  
  // SavingsAccount class extending BankAccount
  class SavingsAccount extends BankAccount {
      constructor(initialBalance: number, accountNumber: number, owner: string) {
          super(accountNumber, initialBalance, owner);
      }
  
      public getAccountInfo(): void {
          console.log(`Account Number: ${this.accountNumber} - Owner: ${this.owner}`);
      }
  }
  
  // Creating an instance of SavingsAccount
  const myAccount = new SavingsAccount(1000, 123456789, 'Alice');
  myAccount.deposit(500);
  console.log(myAccount.getBalance());
  console.log(myAccount.owner);
  myAccount.getAccountInfo();
  
  /* Attempting to access protected and private properties will result in errors
  console.log(myAccount.accountNumber)
  console.log(myAccount.balance)  */
  