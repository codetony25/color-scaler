// import React from 'react';
// import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import Root from './routes';
//
// render(
//   <AppContainer>
//     <Root />
//   </AppContainer>,
//   document.getElementById('root')
// );
//
// if (module.hot) {
//   module.hot.accept('./routes', () => {
//     const NextRoot = require('./routes').default;
//
//     render(
//       <AppContainer>
//         <NextRoot />
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }

import { after } from 'lodash';
import { browserHistory, match } from 'react-router';

import route from './routes';

import createStore from './stores/index.js';

import renderApp from './renderer.js';
import fetchData from './fetch-data.js';

const store = createStore();
renderApp({ store });

// we have to define the `browserHistory` listener here since we need to
// dispose the listener on hot module reload
const unlisten = browserHistory.listen(after(2, ({ pathname }) =>
  match({ route, location: pathname }, (error, redirect, props) => {
      console.log('PROPS', props);
      return props ? fetchData(store, props) : undefined
    }
  )
));

if (module.hot) {
  console.log("MODULE IS HOT!", renderApp);
  module.hot.dispose(unlisten);
  module.hot.accept(renderApp)
}
