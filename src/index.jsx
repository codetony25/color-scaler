import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './routes.jsx';

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);

console.log('module.hot', module.hot);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoot = require('./routes').default;

    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
