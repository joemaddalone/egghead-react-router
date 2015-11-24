import React from 'react';
import ReactDOM from 'react-dom';
import { Lifecycle, Router, Route, IndexRoute, Link, IndexLink } from 'react-router';

const Home = React.createClass({
  mixins: [ Lifecycle ],
  routerWillLeave(nextLocation) {
      let next = JSON.stringify(nextLocation)
      return `Are you sure you want to go to ${next}?`
  },
  render() {
    return <div><h1>Home</h1><Links /></div>
  }
})

const Contact = () => <div><h1>Contact</h1><Links /></div>
const Links = () => {
  return (
    <ul>
      <li>
        <IndexLink to="/">Home</IndexLink>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="contact" component={Contact} />
    </Router>
  );
}

export default App;

