import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';

import Layout from './layout.jsx';
import Home from './views/Home';

export const routes = (
  <Route path="/">
    <Route component={Layout}>
      <IndexRoute component={Home} />
    </Route>
  </Route>
);

class Root extends React.Component {
  static displayName = 'Root';

  constructor (props) {
    super(props);
  }

  onRouteUpdateScrollTop = () => window.scrollTo(0, 0);

  render () {
    return (
      <Router
        onUpdate={this.onRouteUpdateScrollTop()}
        history={browserHistory}
      >
        {routes}
      </Router>
    );
  }
}

export default Root;
