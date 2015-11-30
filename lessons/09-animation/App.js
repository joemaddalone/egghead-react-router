import React from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Router, Route, Link, IndexRoute } from 'react-router'

const Page1 = () => {
  return (
      <div className="page page1">
        <Link to="/page2">Go to Page 2</Link>
      </div>
    )
}

const Page2 = () => {
  return (
      <div className="page page2">
        <Link to="/page1">Go to Page 1</Link>
      </div>
    )
}

class Container extends React.Component {
  render() {
    var child = React.cloneElement(React.Children.only(this.props.children), {
          key: Math.random()
        })
    return (
        <ReactCSSTransitionGroup
          transitionEnterTimeout={500} transitionLeaveTimeout={500}
          transitionName="animation" component="div" className="holder">
          {child}
        </ReactCSSTransitionGroup>
    )
  }
}

const App =() => {
  return (
    <Router>
      <Route path="/" component={Container}>
        <IndexRoute component={Page1} />
        <Route path="page1" component={Page1} />
        <Route path="page2" component={Page2} />
      </Route>
    </Router>
  );
}

export default App
