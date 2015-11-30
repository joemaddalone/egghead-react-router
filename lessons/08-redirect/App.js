import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'

const Links = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/old/oldId">Old</Link>
      <Link to="/new/newId">New</Link>
    </nav>
  )
}

const Home = () => <h1>Home</h1>
const NewPage = (props) => <h1>New Page: {props.params.id}</h1>
const Container = (props) => <div><Links />{props.children}</div>

class App extends React.Component {
  render(){
  return (
    <Router>
      <Route path="/" component={Container}>
        <IndexRoute component={Home} />
        <Route path="/new/:id" component={NewPage} />
        <Redirect from="/old/:id" to="/new/:id" />
      </Route>
    </Router>
   )
  }
}

export default App

