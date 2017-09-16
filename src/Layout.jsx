import React from 'react';
import propTypes from 'prop-types';

const Layout = ({ children }) => (
  <html lang="fr">
    <head>
      <title>Urgence Vétérinaire Toulouse</title>
      <link rel="stylesheet" href="/style.css" />
      <script src="/bundle.js" async defer />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div id="mount">
        {children}
      </div>
    </body>
  </html>
);

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
