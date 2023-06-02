// App.js

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Menu />
      </main>
    </div>
  );
};

export default App;
