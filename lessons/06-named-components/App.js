import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

const Links = () => {
  return (
    <ul>
      <li>
        <IndexLink to="/">Home</IndexLink>
      </li>
      <li>
        <Link to="/other">Other</Link>
      </li>
    </ul>
  )
}

const Home = (props) => {
  return <h1>HOME</h1>
}

const HomeBody = (props) => {
  return <p>This is the home body</p>
}

const Other = (props) => {
  return <h1>OTHER</h1>
}

const OtherBody = (props) => {
  return <p>This is the other body</p>
}

const Container = (props) => {
  return <div>{props.header}{props.body}<Links /></div>
}

const App = () => {
  return (
  <Router>
    <Route path="/" component={Container}>
      <IndexRoute components={{header: Home, body: HomeBody}} />
      <Route path="/other" components={{header: Other, body: OtherBody}} />
    </Route>
  </Router>
  );
}

export default App;

