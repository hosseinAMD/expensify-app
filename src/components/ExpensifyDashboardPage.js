import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpensifyDashboardPage = () => (
    <div>
        <p>Dashboard Page</p>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpensifyDashboardPage;