import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/layouts/Navbar';
import { Landing } from './components/layouts/Landing';
import Login from './components/auth/Login'
import Register from './components/auth/Register';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <div className="container">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  </Provider>

);


export default App;
 