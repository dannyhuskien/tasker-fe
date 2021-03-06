/* eslint-disable import/imports-first */
/* global document */

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Task from './components/Task';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="faq" component={Faq} />
      <Route path="task" component={Task} />
    </Route>
  </Router>
  , document.getElementById('root'));
