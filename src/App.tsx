import React, { useState } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import './App.css';

// Import our components
import Introduction from './components/Introduction';
import ComplexNumbers from './components/ComplexNumbers';
import ZetaFunction from './components/ZetaFunction';
import TheoremStatement from './components/TheoremStatement';
import Visualizations from './components/Visualizations';
import Implications from './components/Implications';
import Glossary from './components/Glossary';

// Main navigation components
const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('introduction');

  const renderPage = () => {
    switch (activePage) {
      case 'introduction':
        return <Introduction />;
      case 'complex-numbers':
        return <ComplexNumbers />;
      case 'zeta-function':
        return <ZetaFunction />;
      case 'theorem-statement':
        return <TheoremStatement />;
      case 'visualizations':
        return <Visualizations />;
      case 'implications':
        return <Implications />;
      case 'glossary':
        return <Glossary />;
      default:
        return <Introduction />;
    }
  };

  return (
    <MathJaxContext>
      <div className="App">
        <header className="App-header">
          <h1>Hipoteza Riemanna</h1>
          <nav>
            <button onClick={() => setActivePage('introduction')} className={activePage === 'introduction' ? 'active' : ''}>
              Wprowadzenie
            </button>
            <button onClick={() => setActivePage('complex-numbers')} className={activePage === 'complex-numbers' ? 'active' : ''}>
              Liczby Zespolone
            </button>
            <button onClick={() => setActivePage('zeta-function')} className={activePage === 'zeta-function' ? 'active' : ''}>
              Funkcja Dzeta
            </button>
            <button onClick={() => setActivePage('theorem-statement')} className={activePage === 'theorem-statement' ? 'active' : ''}>
              Treść Hipotezy
            </button>
            <button onClick={() => setActivePage('visualizations')} className={activePage === 'visualizations' ? 'active' : ''}>
              Wizualizacje
            </button>
            <button onClick={() => setActivePage('implications')} className={activePage === 'implications' ? 'active' : ''}>
              Znaczenie i Zastosowania
            </button>
            <button onClick={() => setActivePage('glossary')} className={activePage === 'glossary' ? 'active' : ''}>
              Słownik Pojęć
            </button>
          </nav>
        </header>
        <main>
          {renderPage()}
        </main>
        <footer>
          <p>Aplikacja Edukacyjna o Hipotezie Riemanna © 2025</p>
        </footer>
      </div>
    </MathJaxContext>
  );
};

export default App;
