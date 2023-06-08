import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import CreateProfileForm from './components/CreateProfileForm';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <CreateProfileForm />
        <Hero />
        <Menu />
        </main>
    </div>
  );
};

export default App;