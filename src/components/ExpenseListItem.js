import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`}><h3>{props.expense.description}</h3></Link>
        <p>{`${props.expense.amount} Rials`}
        --
        {moment(props.expense.createdAt).format('MMMM Do, YYYY')}</p>
    </div>
);

export default ExpenseListItem;