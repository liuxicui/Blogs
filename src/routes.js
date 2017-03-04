import React from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';

import App from './App';
import Home from './components/Home';
import Blog from './components/Blog';
import Search from './components/Search';
import About from './components/About';

export default function(){
  return(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='blog' component={Blog} />
        <Route path='search' component={Search} />
        <Route path='about' component={About} />
      </Route>
    </Router>
  )
}
