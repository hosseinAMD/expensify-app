import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expense-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        <h3>{`Viewing ${props.expensesCount} expenses totalling ${numeral(props.expensesTotal).format('0,0')} Rials`}</h3>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);