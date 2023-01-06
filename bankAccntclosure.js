function createBankAccount(name){
    let balance = 0;

    function getCurrentBalance(){
        console.log ('Hi ' + name, 'your current balance is P' + balance);
    }

    function depositMoney(amount){
        balance += amount;
        console.log('Hi '+ name, 'you have deposited P' + amount);
    }

    function withdrawMoney(amount) {
        if (amount > balance ){
            console. log('Insufficient funds');
            return;
        }
        balance -= amount;
        console.log ('Hi '+ name, 'you have withdraw P'+amount);
 }
 return{
    getCurrentBalance,
    depositMoney,
    withdrawMoney,
 };
}
const account = createBankAccount ('Junnel')

account.getCurrentBalance();
account.withdrawMoney(100);
account.depositMoney(100);
account.getCurrentBalance();
account.withdrawMoney(59);
account.getCurrentBalance();
account.withdrawMoney(75);
account.getCurrentBalance();
account.depositMoney(100);
account.getCurrentBalance();



