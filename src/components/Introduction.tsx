import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const Introduction: React.FC = () => {
  return (
    <div className="page">
      <h2>Wprowadzenie do Hipotezy Riemanna</h2>
      
      <section>
        <h3>Czym jest Hipoteza Riemanna?</h3>
        <p>
          Hipoteza Riemanna to jeden z najważniejszych nierozwiązanych problemów matematycznych, sformułowany przez 
          niemieckiego matematyka Bernharda Riemanna w 1859 roku. Dotyczy ona rozmieszczenia zer funkcji dzeta Riemanna 
          w płaszczyźnie zespolonej.
        </p>
        <p>
          W najprostszym ujęciu, hipoteza stwierdza, że wszystkie nietrywialne zera funkcji dzeta Riemanna leżą na 
          tzw. prostej krytycznej, czyli linii, na której część rzeczywista liczby zespolonej wynosi <InlineMath>{`\\frac{1}{2}`}</InlineMath>.
        </p>
      </section>
      
      <section>
        <h3>Dlaczego jest tak ważna?</h3>
        <p>
          Hipoteza Riemanna jest kluczowa z kilku powodów:
        </p>
        <ul>
          <li>
            <strong>Związek z liczbami pierwszymi</strong>: Ma fundamentalne znaczenie dla zrozumienia rozkładu 
            liczb pierwszych wśród liczb naturalnych.
          </li>
          <li>
            <strong>Powiązania z wieloma dziedzinami</strong>: Łączy różne obszary matematyki – od teorii liczb, 
            przez analizę, po fizykę kwantową.
          </li>
          <li>
            <strong>Problem milenijny</strong>: Jest jednym z siedmiu "problemów milenijnych" ogłoszonych przez 
            Instytut Matematyczny Claya, za których rozwiązanie przewidziana jest nagroda w wysokości miliona dolarów.
          </li>
        </ul>
      </section>
      
      <section>
        <h3>Kontekst historyczny</h3>
        <p>
          Bernhard Riemann (1826-1866) był niemieckim matematykiem, który wniósł znaczący wkład w wiele dziedzin matematyki, 
          w tym geometrię różniczkową i teorię liczb. W 1859 roku opublikował pracę "O liczbie liczb pierwszych mniejszych 
          od danej wielkości", w której pojawiła się hipoteza dotycząca zer funkcji dzeta.
        </p>
        <p>
          Co ciekawe, Riemann nie przywiązywał dużej wagi do tej hipotezy – wspomniał o niej tylko jako o prawdopodobnym 
          przypuszczeniu, które ułatwiłoby jego dalsze badania. Nie przypuszczał, że stanie się ona jednym z najważniejszych 
          nierozwiązanych problemów matematycznych na następne 160+ lat.
        </p>
      </section>
      
      <section>
        <h3>Co będziemy poznawać?</h3>
        <p>
          W tej aplikacji przejdziemy krok po kroku przez różne aspekty hipotezy Riemanna:
        </p>
        <ol>
          <li>
            <strong>Liczby zespolone</strong> – niezbędne do zrozumienia przestrzeni, w której "żyje" hipoteza Riemanna.
          </li>
          <li>
            <strong>Funkcja dzeta Riemanna</strong> – główny obiekt zainteresowania, jej definicję, właściwości i znaczenie.
          </li>
          <li>
            <strong>Treść hipotezy</strong> – dokładne sformułowanie problemu i jego konsekwencje.
          </li>
          <li>
            <strong>Wizualizacje</strong> – graficzne przedstawienia ułatwiające intuicyjne zrozumienie.
          </li>
          <li>
            <strong>Znaczenie i zastosowania</strong> – dlaczego ta hipoteza jest tak ważna i jak wpływa na różne dziedziny.
          </li>
        </ol>
      </section>
      
      <section>
        <h3>Dla kogo jest ta aplikacja?</h3>
        <p>
          Ta aplikacja edukacyjna jest przeznaczona zarówno dla osób zainteresowanych matematyką, studentów, jak i profesjonalistów, 
          którzy chcą lepiej zrozumieć hipotezę Riemanna. Staramy się przedstawić materiał w sposób dostępny, ale bez rezygnacji 
          z matematycznej ścisłości.
        </p>
        <p>
          Nawet jeśli Twoja znajomość matematyki jest podstawowa, dołożyliśmy starań, aby wyjaśnić koncepcje od podstaw, 
          umożliwiając stopniowe zrozumienie tego fascynującego problemu.
        </p>
      </section>
    </div>
  );
};

export default Introduction; 