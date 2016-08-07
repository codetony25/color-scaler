import React from 'react';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';

export default (
  <Route path="/">
    <Route component={ require('./layout.jsx') }>
      <IndexRoute component={ require('./views/Home/index.js') } />
    </Route>
  </Route>
);

// export default [
//   {
//     path: '/',
//     component: require('./layout.jsx'),
//     indexRoute: { component: require('./views/Home/index.js') }
//   }
// ];

// const routes = (
//   <Route path="/">
//     <Route component={Layout}>
//       <IndexRoute component={Home} />
//     </Route>
//   </Route>
// );
//
// class Root extends React.Component {
//   static displayName = 'Root';
//
//   constructor (props) {
//     super(props);
//   }
//
//   onRouteUpdateScrollTop = () => window.scrollTo(0, 0);
//
//   render () {
//     return (
//       <Router
//         onUpdate={this.onRouteUpdateScrollTop()}
//         history={browserHistory}
//       >
//         {routes}
//       </Router>
//     );
//   }
// }
//
// export default Root;
