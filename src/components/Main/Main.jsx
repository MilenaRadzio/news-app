import './Main.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Cats from './Cats';
import HelpPage from './HelpPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route exact path="/Cats">
        <Cats/>
      </Route>
      <Route exact path="/help">
       <HelpPage />
      </Route>
    </Switch>
  </main>
);


export default Main;
