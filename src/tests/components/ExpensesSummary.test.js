import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';


test('should render expenses summary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={30000} />);
    expect(wrapper).toMatchSnapshot();
});