import moment from 'moment';

//Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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
};

export default filtersReducer;