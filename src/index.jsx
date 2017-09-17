/* eslint-env browser */

import React from 'react';
import { render as RenderIntoDOM } from 'react-dom';

const render = () => {
  // eslint-disable-next-line global-require
  const App = require('./App').default;
  RenderIntoDOM(<App />, document.getElementById('mount'));
};

const whenDocumentIsReady = (fn) => {
  document.addEventListener('DOMContentLoaded', fn);
};

whenDocumentIsReady(() => {
  render();
  if (process.env.NODE_ENV !== 'production') {
    Array.from(document.getElementsByTagName('style')).forEach(
      styleNode => styleNode.parentNode.removeChild(styleNode)
    );
    require('./style/index.scss');
  }
});

if (module.hot) {
  module.hot.accept('./App', () => render());
}
