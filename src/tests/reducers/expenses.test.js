import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

test('should set default state',() => {
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense for valid id',() => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[0].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1],expenses[2]]);
});


test('should not remove expense for invalid id',() => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should edit expense for valid id',() => {
    const id = expenses[0].id
    const action = {
        type:'EDIT_EXPENSE',
        id,
        updates:{
            description:'new desc',
            note:'new note',
            amount:1000,
            createdAt: moment(0)
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([{
        id,
        description:'new desc',
        note:'new note',
        amount:1000,
        createdAt: moment(0)
    },expenses[1],expenses[2]])
});

test('should not edit expense for invalid id',() => {
    const id = '-1'
    const action = {
        type:'EDIT_EXPENSE',
        id,
        updates:{
            description:'new desc',
            note:'new note',
            amount:1000,
            createdAt: moment(0)
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense',() => {
    const newExpense = {
        id:'4',
        description:'new desc',
        note:'new note',
        amount:1000,
        createdAt: 20000
    };
    const action = {
        type:'ADD_EXPENSE',
        expense:newExpense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,newExpense]);
});