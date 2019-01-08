
const selectExpensesTotal = (expenses) => {
    let total = 0;
    if(expenses.length > 0){
        expenses.map((expense) => {
            total += expense.amount;
        });
        return total;
    } else {
        return total;
    }
}

export default selectExpensesTotal;