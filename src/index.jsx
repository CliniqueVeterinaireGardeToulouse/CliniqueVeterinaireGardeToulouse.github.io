/* eslint-env browser */

import React from 'react';
import { render as RenderIntoDOM } from 'react-dom';

import './style/index.scss';

const render = () => {
  // eslint-disable-next-line global-require
  const App = require('./App').default;
  RenderIntoDOM(<App />, document.getElementById('mount'));
};

const whenDocumentIsReady = (fn) => {
  document.addEventListener('DOMContentLoaded', fn);
};

whenDocumentIsReady(render);

if (module.hot) {
  module.hot.accept('./App', () => render());
}
