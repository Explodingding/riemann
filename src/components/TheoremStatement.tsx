import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const TheoremStatement: React.FC = () => {
  return (
    <div className="page">
      <h2>Treść Hipotezy Riemanna</h2>
      
      <section>
        <h3>Formalne sformułowanie</h3>
        <p>
          Hipoteza Riemanna, sformułowana przez Bernharda Riemanna w 1859 roku, dotyczy rozmieszczenia 
          zer funkcji dzeta Riemanna <InlineMath>\zeta(s)</InlineMath> na płaszczyźnie zespolonej. 
          Można ją sformułować następująco:
        </p>
        <blockquote className="theorem">
          Wszystkie nietrywialne zera funkcji dzeta Riemanna <InlineMath>\zeta(s)</InlineMath> leżą na prostej krytycznej{' '}
          <InlineMath>{`\\text{Re}(s) = \\frac{1}{2}`}</InlineMath>.
        </blockquote>
      </section>
      
      <section>
        <h3>Co to oznacza?</h3>
        <p>
          Funkcja dzeta Riemanna ma dwa rodzaje zer:
        </p>
        <ul>
          <li>
            <strong>Trywialne zera</strong>: Występują w punktach <InlineMath>{`s = -2, -4, -6, \\ldots`}</InlineMath> 
            (ujemne parzyste liczby całkowite). Te zera są dobrze znane i zrozumiałe.
          </li>
          <li>
            <strong>Nietrywialne zera</strong>: Są to pozostałe miejsca, gdzie <InlineMath>\zeta(s) = 0</InlineMath>.
            Hipoteza Riemanna mówi, że wszystkie te zera mają rzeczywistą część równą dokładnie <InlineMath>{`\\frac{1}{2}`}</InlineMath>.
          </li>
        </ul>
        <p>
          Innymi słowy, jeśli <InlineMath>{`\\zeta(\\sigma + it) = 0`}</InlineMath> i <InlineMath>t</InlineMath> jest liczbą rzeczywistą różną od zera, 
          to hipoteza Riemanna przewiduje, że <InlineMath>{`\\sigma = \\frac{1}{2}`}</InlineMath>.
        </p>
      </section>
      
      <section>
        <h3>Znaczenie prostej krytycznej</h3>
        <p>
          Prosta krytyczna w płaszczyźnie zespolonej to linia, na której część rzeczywista wynosi <InlineMath>{`\\frac{1}{2}`}</InlineMath>. 
          Każdy punkt na tej linii ma postać <InlineMath>{`\\frac{1}{2} + it`}</InlineMath>, gdzie <InlineMath>t</InlineMath> jest dowolną liczbą rzeczywistą.
        </p>
        <p>
          Mówiąc o nietrywialnych zerach funkcji dzeta, wiemy na pewno, że znajdują się one w tzw. paśmie krytycznym, 
          czyli obszarze, gdzie <InlineMath>{`0 \\leq \\text{Re}(s) \\leq 1`}</InlineMath>. Hipoteza Riemanna precyzuje to dalej, 
          twierdząc, że wszystkie te zera leżą dokładnie na środku tego pasma.
        </p>
      </section>
      
      <section>
        <h3>Próby dowodu i podejścia</h3>
        <p>
          Przez ponad 160 lat od sformułowania hipotezy Riemanna, wielu znakomitych matematyków próbowało ją udowodnić 
          lub obalić. Poniżej przedstawiamy najważniejsze podejścia i częściowe wyniki:
        </p>
        
        <h4>Analityczne podejścia</h4>
        <ul>
          <li>
            <strong>Równoważne sformułowania</strong>: Matematycy jak G.H. Hardy i J.E. Littlewood odkryli 
            wiele równoważnych form hipotezy, mając nadzieję, że niektóre z nich będą łatwiejsze do udowodnienia.
          </li>
          <li>
            <strong>Wykazanie zerowania na prostej krytycznej</strong>: W 1914 roku Hardy udowodnił, że nieskończenie 
            wiele zer funkcji dzeta leży na prostej krytycznej, co było pierwszym poważnym krokiem w kierunku potwierdzenia hipotezy.
          </li>
          <li>
            <strong>Metoda Hardiego-Littlewooda</strong>: Opracowane przez nich metody pozwoliły na badanie 
            zachowania funkcji dzeta w paśmie krytycznym, choć nie dały ostatecznego dowodu.
          </li>
          <li>
            <strong>Wzór jawny</strong>: Równanie Riemanna-von Mangoldta, łączące rozkład liczb pierwszych 
            z zerami funkcji dzeta, jest kluczowym narzędziem w badaniach nad hipotezą.
          </li>
        </ul>
        
        <h4>Weryfikacje numeryczne</h4>
        <p>
          Znaczącym podejściem były zakrojone na szeroką skalę obliczenia numeryczne:
        </p>
        <ul>
          <li>
            <strong>Pierwsze zera</strong>: W 1903 roku, Gram zweryfikował, że pierwsze kilkadziesiąt zer leży na prostej krytycznej.
          </li>
          <li>
            <strong>Zautomatyzowane obliczenia</strong>: W miarę rozwoju komputerów, matematycy jak Andrew Odlyzko 
            zweryfikowali coraz więcej zer:
            <ul>
              <li>Do lat 80. XX wieku: kilkadziesiąt tysięcy zer</li>
              <li>Lata 90.: miliony zer</li>
              <li>XXI wiek: do 10<sup>13</sup> zer</li>
            </ul>
          </li>
          <li>
            <strong>Weryfikacja Xaviera Goursata</strong>: W 2004 roku zweryfikował on pierwsze 10 bilionów zer, 
            wszystkie leżące na prostej krytycznej.
          </li>
        </ul>
        
        <h4>Podejścia fizyczne i algebraiczne</h4>
        <p>
          Niektóre z najbardziej obiecujących współczesnych podejść wywodzą się z fizyki i algebry:
        </p>
        <ul>
          <li>
            <strong>Teoria macierzy losowych</strong>: Odkrycie przez Montgomery'ego i Odlyzko związku między 
            statystyką zer funkcji dzeta a wartościami własnymi macierzy losowych otworzyło nowe drogi badań.
          </li>
          <li>
            <strong>Podejście kwantowe</strong>: Prace Berry'ego i Keating'a sugerują, że może istnieć operator 
            kwantowy, którego wartości własne odpowiadają zerom funkcji dzeta.
          </li>
          <li>
            <strong>Geometria nieprzemienna</strong>: Alain Connes zaproponował podejście wykorzystujące geometrię 
            nieprzemienną, sugerując, że hipoteza może być rozumiana jako problem spektralny.
          </li>
        </ul>
        
        <h4>Fałszywe i kontrowersyjne dowody</h4>
        <p>
          Hipoteza Riemanna wielokrotnie przyciągała też uwagę matematyków, którzy twierdzili, że znaleźli dowód:
        </p>
        <ul>
          <li>
            <strong>Louis de Branges</strong>: W 2004 roku ogłosił dowód, który jednak zawierał luki i nie został przyjęty przez społeczność matematyczną.
          </li>
          <li>
            <strong>Athanassios Fokas</strong>: W 2017 roku przedstawił podejście oparte na transformacji Radon, 
            które jednak nie rozwiązało problemu w pełni.
          </li>
          <li>
            <strong>Michael Atiyah</strong>: W 2018 roku, krótko przed śmiercią, ten wybitny matematyk twierdził, 
            że znalazł dowód, ale jego prezentacja była zbyt niepełna, by mogła być zweryfikowana.
          </li>
        </ul>
        
        <p>
          Mimo tych wszystkich podejść i częściowych wyników, hipoteza Riemanna pozostaje jednym z największych 
          otwartych problemów matematyki, a jej rozwiązanie prawdopodobnie będzie wymagało połączenia idei 
          z wielu różnych dziedzin matematyki i fizyki.
        </p>
      </section>
        
      <section>
        <h3>Status hipotezy</h3>
        <p>
          Mimo upływu ponad 160 lat od jej sformułowania, hipoteza Riemanna pozostaje nierozwiązana. Jest to jeden z 
          najbardziej znanych otwartych problemów matematycznych i jeden z siedmiu "problemów milenijnych" Instytutu 
          Matematycznego Claya, za których rozwiązanie przewidziana jest nagroda miliona dolarów.
        </p>
        <p>
          Dotychczas zweryfikowano komputerowo, że pierwsze kilka miliardów nietrywialnych zer rzeczywiście leży na prostej 
          krytycznej, co stanowi silne potwierdzenie empiryczne hipotezy. Jednak pełny matematyczny dowód (lub zaprzeczenie) 
          wciąż pozostaje nieuchwytny.
        </p>
      </section>
        
      <section>
        <h3>Równoważne sformułowania</h3>
        <p>
          Hipoteza Riemanna ma wiele równoważnych sformułowań w różnych obszarach matematyki:
        </p>
        <ul>
          <li>
            <strong>W teorii liczb</strong>: Jest równoważna określonym twierdzeniom o rozkładzie liczb pierwszych i funkcji{' '}
            <InlineMath>\pi(x)</InlineMath>, która liczy liczby pierwsze mniejsze lub równe <InlineMath>x</InlineMath>.
          </li>
          <li>
            <strong>W analizie</strong>: Wiąże się z zachowaniem pewnych całek i rozkładów szeregów.
          </li>
          <li>
            <strong>W teorii operatorów</strong>: Istnieją sformułowania w kategoriach wartości własnych pewnych 
            operatorów w przestrzeniach Hilberta.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TheoremStatement; 