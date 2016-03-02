import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Message = ( props ) => <div><h1>{props.params.message || 'Hello'}</h1><Links /></div>

const Links = () => {
  return (
    <nav>
      <Link to="/">Hello</Link>
      <Link to="/Hi">Hi</Link>
      <Link to="/Yo">Yo</Link>
    </nav>
  )
};

const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/(:message)" component={ Message }/>
    </Router>
  )
};

export default App;

