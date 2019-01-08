import selectExpensesTotal from '../../selectors/expense-total';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('total expenses for 0',() => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('total expenses for single expense',() => {
    const filters = {
        text: 'k',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const visibleExpenses = getVisibleExpenses(expenses,filters);
    const result = selectExpensesTotal(visibleExpenses);
    expect(result).toBe(expenses[0].amount);
});

test('total expenses for multiple expense',() => {
    const result = selectExpensesTotal(expenses);
    const expectedResult = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    expect(result).toBe(expectedResult);
});