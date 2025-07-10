import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Interests from './pages/Interests';
import Resume from './pages/Resume';
import Connect from './pages/Connect';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Interests />
        <Resume />
        <Connect />
      </main>
    </div>
  );
}

export default App;
