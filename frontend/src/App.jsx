import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Causes from './components/Causes';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar /> 
      
      <main>
        <Hero />
        <div className="max-w-6xl mx-auto px-4">
           <Causes />
        </div>
        <Stats />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
