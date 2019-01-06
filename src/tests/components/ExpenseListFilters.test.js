import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altfilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(() => {
    setTextFilter= jest.fn();
    sortByDate= jest.fn();
    sortByAmount= jest.fn();
    setStartDate= jest.fn();
    setEndDate= jest.fn();
    wrapper = shallow(<ExpenseListFilters 
                        setTextFilter={setTextFilter}
                        sortByDate={sortByDate}
                        sortByAmount={sortByAmount}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        filters={filters}
                        />);
});

test('should render ExpenseListFilters correctly with default value',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly with new value',()=>{
    wrapper.setProps({
        filters:altfilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',() => {
    const value = 'new text';
    wrapper.find('input').simulate('change',{
        target:{value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date',() => {
    const value = 'date';
    wrapper.setProps({
        filters:altfilters
    });
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount',() => {
    const value = 'amount';
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes',() => {
    const dates = {
        startDate:moment(0),
        endDate:moment(0).add(2,'months')
    };
    wrapper.find('#date').prop('onDatesChange')(dates);
    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test('should set calender focuse change',() => {
    wrapper.find('#date').prop('onFocusChange')({focused: true});
    expect(wrapper.state('calenderFocused')).toEqual({focused:true});
});