import React from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  // Simple hash routing (since you use #/ in URLs)
  const hash = window.location.hash;

  if (hash === '#/admin') {
    return <Admin />;
  }

  // Default: show Home
  return <Home />;
}

export default App;
