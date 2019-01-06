import React from 'react';
import {shallow} from 'enzyme';
import ExpensifyDashboardPage from '../../components/ExpensifyDashboardPage';

test('should render dashboard page',() => {
    const wrapper = shallow(<ExpensifyDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});