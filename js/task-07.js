/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
let id = 0;

const getId = () => {
    return String(id += 1).padStart(6, '0');
}

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {

        return {
            id: getId(),
            amount,
            type,
        };
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {

        if(typeof amount !== 'number' || amount <= 0) {
            console.log(`Transaction cannot be created with this value "${amount}"!`);
            return;
        }
        this.balance += amount;
        const transactionDep = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transactionDep);
        console.log(`Added amount "${amount}"`);
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {

        if(typeof amount !== 'number' || amount <= 0) {
            console.log(`Transaction cannot be created with this amount "${amount}"!`);
            return;
        }

        if(amount > this.balance) {
            console.log(`Transaction cannot be created, cause this amount "${amount}" exceeds your balance`)
            return;
        }
        this.balance -= amount;
        const transactionWith = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transactionWith);
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {

        for(const transaction of this.transactions) {
            if(id !== transaction['id']) {
                continue;
            } 
            return transaction; 
        };
    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let sum = 0;

        for(const transaction of this.transactions) {
            if(type !== transaction['type']) {
                continue;
            } 
            sum += transaction.amount; 
        }
        return sum;
    },
  };

console.log(account.getBalance());
account.withdraw(100);
account.deposit(1500);
account.deposit('Wavdasda');
console.log(account.getBalance());
account.withdraw(100);
account.withdraw(200);
account.withdraw(400);
console.table(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.table(account.getTransactionDetails('000001'));
