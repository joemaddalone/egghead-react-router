import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';

const Home = ( props ) => <div><h1>Home</h1><Links />{ props.children }</div>
const About = ( props ) => <div><h1>About</h1></div>
const Contact = () => <div><h1>Contact</h1></div>
const Links = () => {
  return (
    <nav>
      <IndexLink to="/">Home</IndexLink>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={ Home }>
        <IndexRoute component={ About }></IndexRoute>
        <Route path="contact" component={ Contact }></Route>
      </Route>
    </Router>
  );
}

export default App;

