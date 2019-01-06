import {setEndDate,setStartDate,setTextFilter,sortByAmount,sortByDate} from '../../actions/filters'
import moment from 'moment';

test('setStartDate action',() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('setEndDate action',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('setTextFilter action with provided data',() => {
    const action = setTextFilter('123abc');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '123abc'
    });
});

test('setTextFilter action without provided data',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('sortByDate action',() => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('sortByAmount action',() =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});