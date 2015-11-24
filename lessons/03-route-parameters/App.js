import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

const Message = (props) => <div><h1>{props.params.message || 'Hello'}</h1><Links /></div>

const Links = () => {
  return (
    <ul>
      <li>
        <Link to="/">Hello</Link>
      </li>
      <li>
        <Link to="/Hi">Hi</Link>
      </li>
      <li>
        <Link to="/Yo">Yo</Link>
      </li>
    </ul>
  )
}

const App = () => {
  return (
    <Router>
      <Route path="/(:message)" component={Message} />
    </Router>
  );
}

export default App;

