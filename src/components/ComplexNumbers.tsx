import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const ComplexNumbers: React.FC = () => {
  return (
    <div className="page">
      <h2>Liczby Zespolone</h2>
      
      <section>
        <h3>Podstawowa definicja</h3>
        <p>
          Liczby zespolone rozszerzają zbiór liczb rzeczywistych, dodając jednostkę urojoną <InlineMath>i</InlineMath>, 
          dla której zachodzi równanie <InlineMath>i^2 = -1</InlineMath>. Każda liczba zespolona <InlineMath>z</InlineMath> ma postać:
        </p>
        <BlockMath>z = a + bi</BlockMath>
        <p>
          gdzie <InlineMath>a</InlineMath> i <InlineMath>b</InlineMath> są liczbami rzeczywistymi. 
          <InlineMath>a</InlineMath> nazywamy częścią rzeczywistą liczby <InlineMath>z</InlineMath> i oznaczamy jako <InlineMath>{`\\text{Re}(z)`}</InlineMath>,
          natomiast <InlineMath>b</InlineMath> to część urojona <InlineMath>{`\\text{Im}(z)`}</InlineMath>.
        </p>
      </section>

      <section>
        <h3>Interpretacja geometryczna</h3>
        <p>
          Liczby zespolone można interpretować jako punkty na płaszczyźnie, gdzie oś pozioma reprezentuje część rzeczywistą, 
          a oś pionowa część urojoną. Ta płaszczyzna nazywana jest płaszczyzną zespoloną lub płaszczyzną Gaussa.
        </p>
        <div className="image-placeholder">
          [Wizualizacja płaszczyzny zespolonej]
        </div>
      </section>

      <section>
        <h3>Postać trygonometryczna</h3>
        <p>
          Każdą liczbę zespoloną <InlineMath>{`z = a + bi \\neq 0`}</InlineMath> można przedstawić w postaci trygonometrycznej:
        </p>
        <BlockMath>{`
          z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}
        `}</BlockMath>
        <p>
          gdzie:
        </p>
        <ul>
          <li><InlineMath>{`r = |z| = \\sqrt{a^2 + b^2}`}</InlineMath> - moduł liczby zespolonej</li>
          <li><InlineMath>{`\\theta = \\arg(z) = \\arctan(b/a)`}</InlineMath> - argument liczby zespolonej</li>
        </ul>
        <p>
          Postać <InlineMath>{`re^{i\\theta}`}</InlineMath> nazywamy zapisem wykładniczym liczby zespolonej.
        </p>
      </section>

      <section>
        <h3>Podstawowe operacje</h3>
        
        <h4>Dodawanie i odejmowanie</h4>
        <p>
          Dodawanie i odejmowanie liczb zespolonych odbywa się przez dodawanie lub odejmowanie odpowiednich części:
        </p>
        <BlockMath>{`
          (a + bi) + (c + di) = (a + c) + (b + d)i
        `}</BlockMath>
        <BlockMath>{`
          (a + bi) - (c + di) = (a - c) + (b - d)i
        `}</BlockMath>
        
        <h4>Mnożenie</h4>
        <p>
          Mnożenie liczb zespolonych:
        </p>
        <BlockMath>{`
          (a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i
        `}</BlockMath>
        
        <h4>Sprzężenie i moduł</h4>
        <p>
          Dla liczby zespolonej <InlineMath>z = a + bi</InlineMath>, jej sprzężenie oznaczamy <InlineMath>{`\\bar{z}`}</InlineMath>:
        </p>
        <BlockMath>{`
          \\bar{z} = a - bi
        `}</BlockMath>
        <p>
          Moduł liczby zespolonej:
        </p>
        <BlockMath>{`
          |z| = \\sqrt{z\\bar{z}} = \\sqrt{a^2 + b^2}
        `}</BlockMath>
      </section>

      <section>
        <h3>Znaczenie w hipotezie Riemanna</h3>
        <p>
          Liczby zespolone są fundamentalne dla zrozumienia hipotezy Riemanna, ponieważ:
        </p>
        <ul>
          <li>Funkcja dzeta Riemanna jest funkcją zmiennej zespolonej</li>
          <li>Hipoteza dotyczy zer tej funkcji w paśmie krytycznym na płaszczyźnie zespolonej</li>
          <li>Nietrywialne zera funkcji dzeta mają postać <InlineMath>{`\\rho = \\sigma + it`}</InlineMath>, gdzie hipoteza Riemanna przewiduje, że <InlineMath>{`\\sigma = 1/2`}</InlineMath></li>
        </ul>
        <p>
          Zrozumienie liczb zespolonych jest więc kluczowym krokiem do pojęcia istoty hipotezy Riemanna i jej znaczenia.
        </p>
      </section>
    </div>
  );
};

export default ComplexNumbers; 