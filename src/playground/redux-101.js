import {createStore} from 'redux';

const incrementCount = ({incremenetBy = 1} = {}) => ({
    type: 'INCREMENT',
    incremenetBy: incremenetBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state = {count:0}, action) => {
    if(action.type === 'INCREMENT'){
        return {count: state.count + action.incremenetBy}
    } else if(action.type === 'DECREMENT') {
        return {count: state.count - action.decrementBy}
    } else if(action.type === 'SET'){
        return {count: action.count}
    } else if(action.type === 'RESET') {
        return {count:0}
    } else {
        return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incremenetBy:5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:100}));