import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';

import appState from './stores/AppState.js';
import { routes } from './routes';

const initialState = new appState(window.__INITIAL_STATE__);

render (
  <Provider appState={initialState}>
    <Router children={routes} history={browserHistory} />
  </Provider>
);
