import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


//ADD_EXPENSE

const addExpense = ({description='',note='',amount=0,createdAt=0} = {}) => ({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description: description,
        note:note,
        amount:amount,
        createdAt:createdAt
    }
});

//REMOVE_EXPENSE

const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id:id
});

//EDIT_EXPENSE

const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    if(action.type === 'ADD_EXPENSE'){
        return [...state,action.expense];
    } else if(action.type === 'REMOVE_EXPENSE'){
        return state.filter(({id}) => id !== action.id);
    } else if(action.type === 'EDIT_EXPENSE'){
        return state.map((expense) => {
            if(expense.id === action.id){
                return {
                    ...expense,
                    ...action.updates
                };
            } else {
                return expense;
            }
        });
    }
     else {
        return state;
    }
};

//SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
});

//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});

//SORT_BY_DATE

const sortByDate = () => ({
    type:'SORT_BY_DATE'
});

//SET_START_DATE

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

//Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState,action) => {
    if(action.type === 'SET_TEXT_FILTER'){
        return {
            ...state,
            text:action.text
        };
    } else if(action.type === 'SORT_BY_AMOUNT'){
        return {
            ...state,
            sortBy: 'amount'
        };
    } else if(action.type === 'SORT_BY_DATE'){
        return {
            ...state,
            sortBy: 'date'
        };
    } else if(action.type === 'SET_START_DATE'){
        return {
            ...state,
            startDate: action.startDate
        };
    } else if(action.type === 'SET_END_DATE'){
        return {
            ...state,
            endDate: action.endDate
        };
    }
    else {
        return state;
    }
}



const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));


const demoState = {
    expenses: [{
        id: '503',
        description: 'January rent',
        note: 'The first payment of car',
        amount: 350000,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};


const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Car rent',amount:250, createdAt:-1000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:15000, createdAt:-1500}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:17000}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));