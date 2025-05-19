import React, { useState } from 'react';
import { MathJax } from 'better-react-mathjax';
import './Glossary.css';

interface Term {
  id: string;
  name: string;
  definition: string;
  formula?: string;
  category: 'podstawy' | 'zaawansowane' | 'analiza' | 'teoria liczb';
}

const terms: Term[] = [
  {
    id: 'zeta',
    name: 'Funkcja Zeta Riemanna',
    definition: 'Funkcja zdefiniowana dla liczb zespolonych s z częścią rzeczywistą większą niż 1 jako suma szeregu:',
    formula: '\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}',
    category: 'podstawy'
  },
  {
    id: 'zeros',
    name: 'Zera funkcji Zeta',
    definition: 'Punkty, w których funkcja Zeta przyjmuje wartość zero. Hipoteza Riemanna dotyczy tzw. nietrywialnych zer.',
    category: 'podstawy'
  },
  {
    id: 'critical-line',
    name: 'Linia krytyczna',
    definition: 'Linia w płaszczyźnie zespolonej, gdzie część rzeczywista wynosi 1/2. Hipoteza Riemanna stwierdza, że wszystkie nietrywialne zera funkcji Zeta leżą na tej linii.',
    formula: '\\Re(s) = \\frac{1}{2}',
    category: 'podstawy'
  },
  {
    id: 'analytic-continuation',
    name: 'Przedłużenie analityczne',
    definition: 'Metoda rozszerzenia dziedziny funkcji analitycznej poza jej początkowy obszar zbieżności.',
    category: 'zaawansowane'
  },
  {
    id: 'prime-counting',
    name: 'Funkcja zliczająca liczby pierwsze',
    definition: 'Funkcja π(x) określająca liczbę liczb pierwszych nie większych niż x. Jest ściśle powiązana z funkcją Zeta.',
    formula: '\\pi(x) = \\sum_{p \\leq x} 1',
    category: 'teoria liczb'
  },
  {
    id: 'complex-plane',
    name: 'Płaszczyzna zespolona',
    definition: 'Dwuwymiarowa reprezentacja liczb zespolonych, gdzie oś pozioma reprezentuje część rzeczywistą, a pionowa część urojoną.',
    formula: 'z = a + bi, \\quad a,b \\in \\mathbb{R}',
    category: 'podstawy'
  },
  {
    id: 'functional-equation',
    name: 'Równanie funkcyjne dla funkcji Zeta',
    definition: 'Fundamentalne równanie wiążące wartości funkcji Zeta w różnych punktach płaszczyzny zespolonej.',
    formula: '\\zeta(s) = 2^s \\pi^{s-1} \\sin\\left(\\frac{\\pi s}{2}\\right) \\Gamma(1-s) \\zeta(1-s)',
    category: 'zaawansowane'
  },
  {
    id: 'riemann-hypothesis',
    name: 'Hipoteza Riemanna',
    definition: 'Jedna z najważniejszych nierozwiązanych hipotez matematycznych, mówiąca że wszystkie nietrywialne zera funkcji dzeta Riemanna mają część rzeczywistą równą 1/2.',
    category: 'podstawy'
  },
  {
    id: 'prime-number-theorem',
    name: 'Twierdzenie o liczbach pierwszych',
    definition: 'Twierdzenie opisujące asymptotyczną dystrybucję liczb pierwszych. Mówi, że liczba liczb pierwszych mniejszych lub równych n jest asymptotycznie równa n/ln(n).',
    formula: '\\pi(x) \\sim \\frac{x}{\\ln(x)}',
    category: 'teoria liczb'
  },
  {
    id: 'mobius-function',
    name: 'Funkcja Möbiusa',
    definition: 'Ważna funkcja arytmetyczna w teorii liczb. Dla liczby naturalnej n funkcja μ(n) przyjmuje wartość 1 jeśli n jest bezkwadratowa z parzystą liczbą czynników pierwszych, -1 jeśli bezkwadratowa z nieparzystą liczbą czynników, i 0 w przeciwnym przypadku.',
    formula: '\\mu(n) = \\begin{cases} 1 & \\text{jeśli } n=1 \\\\ 0 & \\text{jeśli } n \\text{ ma czynnik kwadratowy} \\\\ (-1)^k & \\text{jeśli } n \\text{ jest iloczynem } k \\text{ różnych liczb pierwszych} \\end{cases}',
    category: 'teoria liczb'
  },
  {
    id: 'euler-product',
    name: 'Iloczyn Eulera',
    definition: 'Reprezentacja funkcji Zeta jako nieskończonego iloczynu, który podkreśla związek z liczbami pierwszymi.',
    formula: '\\zeta(s) = \\prod_{p \\text{ prime}} \\frac{1}{1-p^{-s}}',
    category: 'podstawy'
  },
  {
    id: 'li-function',
    name: 'Funkcja logarytmu całkowego',
    definition: 'Funkcja używana do przybliżania liczby liczb pierwszych mniejszych lub równych danej wartości.',
    formula: '\\text{Li}(x) = \\int_{2}^{x} \\frac{dt}{\\ln t}',
    category: 'teoria liczb'
  },
  {
    id: 'gamma-function',
    name: 'Funkcja Gamma',
    definition: 'Rozszerzenie funkcji silni na dziedzinę liczb zespolonych. Odgrywa kluczową rolę w równaniu funkcyjnym dla funkcji Zeta.',
    formula: '\\Gamma(z) = \\int_{0}^{\\infty} t^{z-1}e^{-t}dt',
    category: 'analiza'
  },
  {
    id: 'meromorphic-function',
    name: 'Funkcja meromorficzna',
    definition: 'Funkcja analityczna na całej dziedzinie z wyjątkiem pewnych punktów osobliwych, zwanych biegunami.',
    category: 'analiza'
  },
  {
    id: 'generalized-rh',
    name: 'Uogólniona hipoteza Riemanna',
    definition: 'Rozszerzenie hipotezy Riemanna na szerszą klasę funkcji L-Dirichleta. Stwierdza, że wszystkie nietrywialne zera tych funkcji leżą na linii krytycznej.',
    category: 'zaawansowane'
  }
];

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('wszystkie');

  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'wszystkie' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="glossary-container">
      <h2>Słownik Pojęć</h2>
      
      <div className="glossary-controls">
        <input
          type="text"
          placeholder="Szukaj pojęcia..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glossary-search"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="glossary-category-select"
        >
          <option value="wszystkie">Wszystkie kategorie</option>
          <option value="podstawy">Podstawy</option>
          <option value="zaawansowane">Zaawansowane</option>
          <option value="analiza">Analiza</option>
          <option value="teoria liczb">Teoria liczb</option>
        </select>
      </div>

      <div className="terms-list">
        {filteredTerms.map(term => (
          <div key={term.id} className="term-card">
            <h3>{term.name}</h3>
            <p>{term.definition}</p>
            {term.formula && (
              <div className="formula">
                <MathJax>{term.formula}</MathJax>
              </div>
            )}
            <span className="term-category">{term.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glossary; 