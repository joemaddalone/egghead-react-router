import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;
const Links = () => {
  return (
    <nav>
      <Link to="/10-hash-vs-browserHistory">Home</Link>
      <Link to="/10-hash-vs-browserHistory/about">About</Link>
      <Link to="/10-hash-vs-browserHistory/contact">Contact</Link>
    </nav>
  )
};

const App = () => {
  return (
    <Router history={ browserHistory }>
      <Route path="10-hash-vs-browserHistory" component={Home}></Route>
      <Route path="10-hash-vs-browserHistory/about" component={About}></Route>
      <Route path="10-hash-vs-browserHistory/contact" component={Contact}></Route>
    </Router>
  )
};

export default App;
