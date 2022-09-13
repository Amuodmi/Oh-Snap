import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  //This is JSX code:
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;