import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => ( // passing in activeClassName as a prop to target 'is-active' in base.scss
    <header>
      <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/edit/:id" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;