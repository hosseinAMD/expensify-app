import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render add form',() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render edit form',() => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid submission',() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit' , {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should change description value', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'new description';
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should change note value', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'new note';
    wrapper.find('textarea').simulate('change',{
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should change amount to valid value', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '25000';
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not change amount to invalid value', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '250.5';
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).not.toBe(value);
});

test('should call on submit prop for valid input', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit' , {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change',() => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('#date').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focuse change',() => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('#date').prop('onFocusChange')({focused: true});
    expect(wrapper.state('calenderFocused')).toEqual(true);
});