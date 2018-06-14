import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (// creating our stateless functional components 
    <div>
      This is from my dashboard component
    </div>
);

const AddExpensePage = () => ( 
    <div>
      This is from my add expense component
    </div>
);

const EditExpensePage = () => ( 
    <div>
      This is from my edit expense component
    </div>
);

const HelpPage = () => ( 
    <div>
      This is from my help page component
    </div>
);

const NotFoundPage = () => (// our error page; we use link which enables us to click without a full page refresh 
    <div>
      404! - <Link to="/">Go home</Link> 
    </div>
);

const Header = () => ( // we want to render header on each page
    <header>
      <h1>Expensify</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Add Expense</Link>
        <Link to="/edit">Edit Expense</Link>
        <Link to="/help">Help</Link>
    </header>
);

const routes = (// adding the Header component on each page
    <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        
    </BrowserRouter>
);



// telling react to render our routes, which we have set above
ReactDOM.render( routes,  document.getElementById('app'));
    
 