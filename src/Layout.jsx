import React from 'react';
import propTypes from 'prop-types';

const Layout = ({ children }) => (
  <html lang="fr">
    <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106568648-1" />
      <script src="/analytics.js" />
      <title>Urgence Vétérinaire Toulouse</title>
      <link rel="stylesheet" href="/style.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="mount">
        {children}
      </div>
      <script src="/bundle.js" />
    </body>
  </html>
);

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
