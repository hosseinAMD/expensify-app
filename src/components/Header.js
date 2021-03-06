import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
    <div>
        <h3>Expensify</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense </NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense </NavLink>
    </div>
);

export default Header;