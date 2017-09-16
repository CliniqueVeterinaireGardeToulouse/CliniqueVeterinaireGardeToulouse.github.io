import React from 'react';

const Home = () => (
  <div>
    <header>
      <img alt="" src="/logo.png" />
      <a href="tel:0561112131"><strong>05 61 11 21 31</strong></a>
    </header>
    <main>
      <p>
        Nous prenons en charge vos{' '}
        <strong>urgences vétérinaires</strong>{' '}
        lorsque votre vétérinaire habituel n{'\''}est pas disponible.
      </p>
      <p className="call-us">
        <a href="tel:0561112131">Appelez vite !</a>
      </p>
    </main>
  </div>
);

export default Home;
