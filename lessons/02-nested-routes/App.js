import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

const Home = (props) => <div><h1>Home</h1><Links />{props.children}</div>
const About = (props) => <div><h1>About</h1>{props.children}</div>
const Contact = () => <div><h1>Contact</h1></div>
const Links = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        {/* <Link to="/contact">Contact</Link> */}
        <Link to="/about/contact">Contact</Link>
      </li>
    </ul>
  )
}

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home}>
        <Route path="about" component={About}>
          {/* <Route path="/contact" component={Contact}></Route> */}
          <Route path="contact" component={Contact}></Route>
        </Route>
      </Route>
    </Router>
  );
}

export default App;

