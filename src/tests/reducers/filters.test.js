import filterReducers from '../../reducers/filters';
import moment from 'moment';

test('setup default filter values',() => {
    const state = filterReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('set sortBy to amount',() => {
    const state = filterReducers(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('set sortBy to date',() => {
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action = {type:'SORT_BY_DATE'};
    const state = filterReducers(currentState,action);
    expect(state.sortBy).toBe('date');
});

test('setup text value', () => {
    const state = filterReducers(undefined,{type:'SET_TEXT_FILTER',text:'123abc'});
    expect(state.text).toBe('123abc');
});

test('setup startDate value',() =>{
    const state = filterReducers(undefined,{type:'SET_START_DATE',startDate:moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test('setup endDate value',() =>{
    const state = filterReducers(undefined,{type:'SET_END_DATE',endDate:moment(0)});
    expect(state.endDate).toEqual(moment(0));
});