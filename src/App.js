import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="**" component={Home}></Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
