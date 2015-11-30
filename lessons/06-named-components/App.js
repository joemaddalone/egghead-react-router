import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';

const Links = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/other">Other</Link>
    </nav>
  )
}
const Home      = ()      => <h1>HOME</h1>
const HomeBody  = ()      => <p>This is the home body</p>
const Other     = ()      => <h1>OTHER</h1>
const OtherBody = ()      => <p>This is the other body</p>
const Container = (props) => <div>{props.header}{props.body}<Links /></div>

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

