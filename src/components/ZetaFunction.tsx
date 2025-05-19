import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const ZetaFunction: React.FC = () => {
  return (
    <div className="page">
      <h2>Funkcja Dzeta Riemanna</h2>
      
      <section>
        <h3>Definicja</h3>
        <p>
          Funkcja dzeta Riemanna, oznaczana symbolem <InlineMath>\zeta(s)</InlineMath>, została wprowadzona przez 
          niemieckiego matematyka Bernharda Riemanna w 1859 roku. Dla liczb zespolonych <InlineMath>s</InlineMath> o 
          części rzeczywistej większej od 1, funkcję dzeta definiuje się jako sumę szeregu:
        </p>
        <BlockMath>
          {`\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s} = \\frac{1}{1^s} + \\frac{1}{2^s} + \\frac{1}{3^s} + \\frac{1}{4^s} + \\cdots`}
        </BlockMath>
      </section>

      <section>
        <h3>Przedłużenie analityczne</h3>
        <p>
          Powyższa definicja jest zbieżna tylko dla <InlineMath>{`\\text{Re}(s) > 1`}</InlineMath>. Jednak funkcja dzeta 
          może być przedłużona analitycznie na całą płaszczyznę zespoloną, z wyjątkiem punktu <InlineMath>s = 1</InlineMath>, 
          który jest biegunem prostym funkcji.
        </p>
        <p>
          Jednym ze sposobów przedłużenia funkcji dzeta jest równanie funkcjonalne:
        </p>
        <BlockMath>
          {`\\zeta(s) = 2^s \\pi^{s-1} \\sin\\left(\\frac{\\pi s}{2}\\right) \\Gamma(1-s) \\zeta(1-s)`}
        </BlockMath>
        <p>
          gdzie <InlineMath>\Gamma</InlineMath> to funkcja gamma Eulera.
        </p>
      </section>

      <section>
        <h3>Związek z liczbami pierwszymi</h3>
        <p>
          Funkcja dzeta ma głęboki związek z liczbami pierwszymi poprzez tzw. iloczyn Eulera:
        </p>
        <BlockMath>
          {`\\zeta(s) = \\prod_{p \\text{ prime}} \\frac{1}{1-p^{-s}} = \\prod_{p \\text{ prime}} \\left(1 + \\frac{1}{p^s} + \\frac{1}{p^{2s}} + \\frac{1}{p^{3s}} + \\cdots \\right)`}
        </BlockMath>
        <p>
          Ten wzór, odkryty przez Leonarda Eulera, pokazuje bezpośredni związek między funkcją dzeta a rozkładem liczb pierwszych.
        </p>
      </section>

      <section>
        <h3>Zera funkcji dzeta</h3>
        <p>
          Funkcja dzeta ma dwa rodzaje zer:
        </p>
        <ul>
          <li>
            <strong>Trywialne zera</strong>: Występują w punktach <InlineMath>s = -2, -4, -6, \ldots</InlineMath>, 
            czyli w ujemnych parzystych liczbach całkowitych.
          </li>
          <li>
            <strong>Nietrywialne zera</strong>: Są to zera leżące w tzw. paśmie krytycznym, czyli dla{' '}
            <InlineMath>{`0 \\leq \\text{Re}(s) \\leq 1`}</InlineMath>.
          </li>
        </ul>
        <p>
          Hipoteza Riemanna dotyczy właśnie tych nietrywialnych zer i stwierdza, że wszystkie one leżą 
          na tzw. prostej krytycznej <InlineMath>{`\\text{Re}(s) = \\frac{1}{2}`}</InlineMath>.
        </p>
      </section>

      <section>
        <h3>Znaczenie funkcji dzeta</h3>
        <p>
          Funkcja dzeta Riemanna jest centralnym obiektem teorii liczb analitycznej i ma zastosowania w:
        </p>
        <ul>
          <li>Badaniu rozkładu liczb pierwszych</li>
          <li>Teorii liczb całkowitych</li>
          <li>Analizie fourierowskiej</li>
          <li>Teorii prawdopodobieństwa</li>
          <li>Fizyce statystycznej</li>
          <li>Teorii macierzy losowych</li>
        </ul>
      </section>
    </div>
  );
};

export default ZetaFunction; 