import React from 'react';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  Redirect,
  hashHistory
} from 'react-router';

const Home = () => <h1>Home</h1>
const NewPage = (props) =>  <div><h1>New Page {props.params.id}</h1></div>
const Container = (props) => <div><Links />{props.children}</div>

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old/oldId">Old</Link>
    <Link to="/new/newId">New</Link>
  </nav>

class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Container}>
          <IndexRoute component={ Home }></IndexRoute>
          <Route path="/new/:id" component={NewPage}></Route>
          <Redirect from='/old/:id' to='/new/:id'></Redirect>
        </Route>
      </Router>
    )
  }
}

export default App;
