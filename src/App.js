import React from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store from './store.js';
import './App.css';
import SearchPage from './components/page-search/component';
import LoginPage from './components/page-login/component';
import ProductDetailsPage from './components/page-product-details/component';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/search"><SearchPage /></Route>
        <Route path="/product/:id?" component={ProductDetailsPage} />
      </Router>
    </Provider>
  );
}

export default App;
