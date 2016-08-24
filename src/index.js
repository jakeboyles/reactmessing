import React from 'react';
import Weather from './Weather';
import Maps from './Map';
import Main from './Main';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    	<Route path="/map" component={Maps}/>
    	<Route path="/weather" component={Weather}/>
    </Route>
  </Router>
), document.getElementById('root'));
