import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';

const ExpenseDashboardPage = () => ( 
    <div>
      This is from my dashboard component
    </div>
);


const routes = (// telling react that whenever we match this page ('/'), we should render this component
    <BrowserRouter>
        <div>
        <Route path="/" component={ExpenseDashboardPage}/>
        </div>
    </BrowserRouter>
);




ReactDOM.render( routes,  document.getElementById('app'));
    
 