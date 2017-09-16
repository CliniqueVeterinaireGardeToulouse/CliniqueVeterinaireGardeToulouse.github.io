import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const resolve = (...args) => path.resolve(
  __dirname, '..', '..', '..', 'src', ...args
);

const requireDefault = absPath =>
  // eslint-disable-next-line global-require, import/no-dynamic-require
  require(absPath).default;

const listPagePaths = () => fs.readdirSync(resolve('pages')).map(
  page => resolve('pages', page)
);

class StaticSiteGeneratorWebpackPlugin {
  constructor() {
    this.pagesPath = listPagePaths;
  }

  apply(compiler) {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const LayoutPath = resolve('Layout.jsx');
    const Layout = requireDefault(LayoutPath);
    const src = ReactDOMServer.renderToStaticMarkup(
      React.createElement(
        Layout,
        {},
        React.createElement(requireDefault(resolve('pages', 'Home.jsx')))
      )
    );
    return compiler.plugin('emit', (compilation, done) => {
      // eslint-disable-next-line no-param-reassign
      compilation.assets['index.html'] = ({
        source: () => src,
        size: () => src.length,
      });
      done();
    });
  }
}

module.exports = StaticSiteGeneratorWebpackPlugin;
