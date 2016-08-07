import React from 'react';
import DevTools from 'mobx-react-devtools';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-tunnel';
import { Router, browserHistory, RouterContext, match } from 'react-router';

import route from './routes.jsx'

import fetchData from './fetch-data';
import ProvideInsertCss from './provide-insert-css';
import { rehydrate, dehydrate } from './hydrate';

const { NODE_ENV, BROWSER } = process.env;

export default async ({ store, location, assets } = {}) => {
  const css = [];
  const insertCss = BROWSER ?
    (styles) => styles._insertCss() :
    (styles) => css.push(styles._getCss());

  if (BROWSER) {
    rehydrate(store);

    // track potentially unnecessary re-renders
    // if we find `debugRender` in the query string
    if (NODE_ENV === 'development' &&
      window.location.search.includes('debugRender')) {
      const { whyDidYouUpdate } = require('why-did-you-update');
      whyDidYouUpdate(React)
    }

    const App = (
      <Provider provide={ { store } }>
        { () =>
          <ProvideInsertCss insertCss={ insertCss }>
            <Router history={ browserHistory }>
              { route }
            </Router>
          </ProvideInsertCss> }
      </Provider>
    );

    const container = document.getElementById('app--container');

    if (NODE_ENV !== 'development') return render(App, container);

    // special render in development:
    // * enable react-hot-loader
    // * enable mobx-react-devtools
    const { AppContainer } = require('react-hot-loader');
    const Dev = (
      <div>
        <AppContainer key={0}>
          { App }
        </AppContainer>
        <DevTools key={1} position={{ bottom: 0, right: 20 }} />
      </div>
    );

    render(Dev, container);
  } else {
    // server side rendering
    const Html = require('./html.js');

    // promisify `match` from `react-router`
    const asyncMatch = () => new Promise((resolve) => {
        match({ route, location }, (...args) => resolve(args));
      }
    );

    const [
      routerError,
      redirect,
      renderProps
    ] = await asyncMatch(location, route);

    console.log('renderProps', renderProps, routerError, redirect);
    if (routerError || redirect) throw ({ error: routerError, redirect });

    await fetchData(store, renderProps);
    const appState = dehydrate(store);

    console.log('appState', appState);
    const body = renderToString(
      <Provider provide={{ store, insertCss }}>
        {
          () =>
          <ProvideInsertCss insertCss={ insertCss }>
            <RouterContext { ...renderProps } />
          </ProvideInsertCss>
        }
      </Provider>
    );

    // const body = renderToString(
    //   <div>
    //     <h1>Hello! Am I working?</h1>
    //     <h3>Coool.</h3>
    //   </div>
    // );

    return renderToString(
      <Html
        assets={ assets }
        locale='fr_FR'
        body={ body }
        appState={ appState }
        css={ css.join('') }
      />
    )
  }
}
