import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('shou;d render individual expense itme',() => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})