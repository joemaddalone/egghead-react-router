import React from 'react';
import { Lifecycle, Router, Route, Link, hashHistory } from 'react-router';


/**
 * 1.0.x
 */
// const Home = React.createClass({
//   mixins: [ Lifecycle ],
//   routerWillLeave( nextLocation ) {
//       let next = JSON.stringify( nextLocation )
//       return `Are you sure you want to go to ${next}?`
//   },
//   render() {
//     return <div><h1>Home</h1><Links /></div>
//   }
// })

/**
 * 2.0.x
 */
class Home extends React.Component {

   componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    )
  }

  routerWillLeave( nextLocation ) {
    return `Are you sure you want to go to ${nextLocation.pathname}?`
  }

  render() {
    return <div><h1>Home</h1><Links /></div>;
  }
};

Home.contextTypes = { router: React.PropTypes.object.isRequired };

const Contact = () => <div><h1>Contact</h1><Links /></div>
const Links = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
};

const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={ Home }/>
      <Route path="contact" component={ Contact }/>
    </Router>
  )
};

export default App;
