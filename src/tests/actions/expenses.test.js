import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('removeExpense action',() => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('editExpense action',() => {
    const action = editExpense('123abc',{note:'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note'
        }
    });
});

test('addExpense with provided data', () => {
    const expenseData = {
        description: 'car',
        amount: 25000,
        createdAt: 1000,
        note: 'new note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('addExpense without provided data',() => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note:''
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});