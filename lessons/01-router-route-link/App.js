import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>
const About = () => <div><h1>About</h1><Links /></div>
const Contact = () => <div><h1>Contact</h1><Links /></div>
const Links = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  )
}

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Router>
  );
}

export default App;
