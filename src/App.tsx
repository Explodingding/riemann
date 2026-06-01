import React from 'react';
import './App.css';

import SustainableResources from './components/SustainableResources';

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <SustainableResources />
      </main>
      <footer>
        <p>Lommel and Uganda Sustainable Resource Research Hub - 2026</p>
      </footer>
    </div>
  );
};

export default App;
