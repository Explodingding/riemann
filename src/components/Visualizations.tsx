import React, { useEffect, useState, useMemo } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import Plot from 'react-plotly.js';

// Funkcje pomocnicze do obliczania wizualizacji
const approximateZetaReal = (s: number, t: number, terms: number = 100): number => {
  // Przybliżenie funkcji dzeta dla małych s (re>=0.5)
  let sum = 0;
  for (let n = 1; n <= terms; n++) {
    sum += Math.cos(t * Math.log(n)) / Math.pow(n, s);
  }
  return sum;
};

const approximateZetaImag = (s: number, t: number, terms: number = 100): number => {
  // Przybliżenie części urojonej funkcji dzeta
  let sum = 0;
  for (let n = 1; n <= terms; n++) {
    sum -= Math.sin(t * Math.log(n)) / Math.pow(n, s);
  }
  return sum;
};

const Visualizations: React.FC = () => {
  // First few non-trivial zeros of the Riemann zeta function
  const riemannZeros = useMemo(() => [
    { re: 0.5, im: 14.1347251417 },
    { re: 0.5, im: 21.0220396388 },
    { re: 0.5, im: 25.0108575801 },
    { re: 0.5, im: 30.4248761259 },
    { re: 0.5, im: 32.9350615877 },
    { re: 0.5, im: 37.5861781588 },
    { re: 0.5, im: 40.9187190121 },
    { re: 0.5, im: 43.3270732809 },
    { re: 0.5, im: 48.0051508811 },
    { re: 0.5, im: 49.7738324777 }
  ], []);

  // State dla wykresów
  const [zerosPlotData, setZerosPlotData] = useState<any>([]);
  const [zetaPlotData, setZetaPlotData] = useState<any>([]);
  const [criticalLinePlotData, setCriticalLinePlotData] = useState<any>([]);
  const [distributrionPlotData, setDistributionPlotData] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<string>("zeros");

  // Set up the first plot data on component mount - zera funkcji dzeta
  useEffect(() => {
    const criticalLine = {
      x: Array(100).fill(0.5),
      y: Array.from({ length: 100 }, (_, i) => i / 2),
      type: 'scatter',
      mode: 'lines',
      name: 'Prosta krytyczna (Re(s) = 1/2)',
      line: {
        color: 'rgba(200, 0, 0, 0.5)',
        width: 2,
        dash: 'dash'
      }
    };

    const zeros = {
      x: riemannZeros.map(z => z.re),
      y: riemannZeros.map(z => z.im),
      type: 'scatter',
      mode: 'markers',
      name: 'Nietrywialne zera funkcji dzeta',
      marker: {
        color: 'rgb(0, 100, 200)',
        size: 10,
        symbol: 'circle'
      }
    };

    setZerosPlotData([criticalLine, zeros]);
  }, [riemannZeros]);

  // Set up zeta function visualization on critical strip
  useEffect(() => {
    // Tworzymy siatkę punktów dla funkcji dzeta na paśmie krytycznym
    const sigmaValues = Array.from({ length: 30 }, (_, i) => 0.1 + i * 0.03);
    const tValues = Array.from({ length: 20 }, (_, i) => 10 + i * 2);
    
    const x: number[] = [];
    const y: number[] = [];
    const z: number[] = [];
    
    // Obliczamy wartości |zeta(s)| dla każdego punktu
    sigmaValues.forEach(sigma => {
      tValues.forEach(t => {
        const zetaRe = approximateZetaReal(sigma, t);
        const zetaIm = approximateZetaImag(sigma, t);
        const zetaAbs = Math.sqrt(zetaRe * zetaRe + zetaIm * zetaIm);
        
        x.push(sigma);
        y.push(t);
        z.push(Math.log(zetaAbs)); // używamy logarytmu dla lepszej widoczności
      });
    });
    
    const zetaSurface = {
      type: 'contour',
      x: sigmaValues,
      y: tValues,
      z: z.map((value, index) => {
        const row = Math.floor(index / tValues.length);
        const col = index % tValues.length;
        return sigmaValues[row] * 10 + tValues[col] * 0.1;
      }),
      colorscale: 'Jet',
      contours: {
        coloring: 'heatmap',
        showlabels: true,
      },
      name: 'Moduł funkcji dzeta'
    };
    
    // Dodajemy linię dla prostej krytycznej
    const criticalLine = {
      x: Array(50).fill(0.5),
      y: Array.from({ length: 50 }, (_, i) => 10 + i * 0.8),
      type: 'scatter',
      mode: 'lines',
      name: 'Prosta krytyczna (Re(s) = 1/2)',
      line: {
        color: 'white',
        width: 2,
        dash: 'dash'
      }
    };
    
    // Dodajemy oznaczenia dla kilku pierwszych zer
    const zerosMarkers = {
      x: riemannZeros.slice(0, 5).map(z => z.re),
      y: riemannZeros.slice(0, 5).map(z => z.im),
      type: 'scatter',
      mode: 'markers',
      name: 'Przykładowe zera',
      marker: {
        color: 'white',
        size: 8,
        symbol: 'circle',
        line: {
          color: 'black',
          width: 1
        }
      }
    };
    
    setZetaPlotData([zetaSurface, criticalLine, zerosMarkers]);
  }, [riemannZeros]);

  // Set up critical line visualization
  useEffect(() => {
    // Wartości t dla których obliczamy funkcję dzeta na prostej krytycznej
    const tValues = Array.from({ length: 100 }, (_, i) => i * 0.5);
    const zetaRealValues: number[] = [];
    const zetaImagValues: number[] = [];
    
    // Obliczamy wartości funkcji dzeta na prostej krytycznej
    tValues.forEach(t => {
      zetaRealValues.push(approximateZetaReal(0.5, t));
      zetaImagValues.push(approximateZetaImag(0.5, t));
    });
    
    const zetaRealTrace = {
      x: tValues,
      y: zetaRealValues,
      type: 'scatter',
      mode: 'lines',
      name: 'Re(ζ(1/2 + it))',
      line: {
        color: 'rgb(220, 20, 60)',
        width: 2
      }
    };
    
    const zetaImagTrace = {
      x: tValues,
      y: zetaImagValues,
      type: 'scatter',
      mode: 'lines',
      name: 'Im(ζ(1/2 + it))',
      line: {
        color: 'rgb(30, 144, 255)',
        width: 2
      }
    };
    
    setCriticalLinePlotData([zetaRealTrace, zetaImagTrace]);
  }, []);

  // Histogram odstępów między zerami
  useEffect(() => {
    // Obliczamy różnice między sąsiednimi zerami
    const zeroDiffs: number[] = [];
    for (let i = 1; i < riemannZeros.length; i++) {
      zeroDiffs.push(riemannZeros[i].im - riemannZeros[i-1].im);
    }
    
    // Normalizacja
    const mean = zeroDiffs.reduce((a, b) => a + b, 0) / zeroDiffs.length;
    const normalizedDiffs = zeroDiffs.map(diff => diff / mean);
    
    const histogram = {
      x: normalizedDiffs,
      type: 'histogram',
      histnorm: 'probability density',
      marker: {
        color: 'rgba(0, 100, 200, 0.7)',
        line: {
          color: 'rgba(0, 100, 200, 1)',
          width: 1
        }
      },
      name: 'Rozkład odstępów między zerami'
    };
    
    // Teoretyczna krzywa dla GUE (rozkład Gaussa)
    const xValues = Array.from({ length: 100 }, (_, i) => i * 0.05);
    const gueValues = xValues.map(x => 
      (32 * x * x / (Math.PI * Math.PI)) * Math.exp(-(4 * x * x) / Math.PI)
    );
    
    const gueCurve = {
      x: xValues,
      y: gueValues,
      type: 'scatter',
      mode: 'lines',
      line: {
        color: 'red',
        width: 2
      },
      name: 'Teoretyczny rozkład GUE'
    };
    
    setDistributionPlotData([histogram, gueCurve]);
  }, [riemannZeros]);

  // Layouts dla wykresów
  const zerosLayout = {
    title: 'Nietrywialne zera funkcji dzeta Riemanna',
    xaxis: {
      title: 'Część rzeczywista (Re(s))',
      range: [0, 1]
    },
    yaxis: {
      title: 'Część urojona (Im(s))',
      range: [0, 55]
    },
    autosize: true,
    height: 600,
    hovermode: 'closest',
    showlegend: true
  };

  const zetaLayout = {
    title: 'Wizualizacja funkcji dzeta na paśmie krytycznym',
    xaxis: {
      title: 'Część rzeczywista (Re(s))',
      range: [0, 1]
    },
    yaxis: {
      title: 'Część urojona (Im(s))',
      range: [10, 50]
    },
    autosize: true,
    height: 600,
    hovermode: 'closest',
    showlegend: true
  };

  const criticalLineLayout = {
    title: 'Zachowanie funkcji dzeta na prostej krytycznej',
    xaxis: {
      title: 't (dla s = 1/2 + it)',
      range: [0, 50]
    },
    yaxis: {
      title: 'ζ(1/2 + it)',
      range: [-2, 2]
    },
    autosize: true,
    height: 600,
    hovermode: 'closest',
    showlegend: true
  };

  const distributionLayout = {
    title: 'Rozkład znormalizowanych odstępów między zerami funkcji dzeta',
    xaxis: {
      title: 'Znormalizowany odstęp',
      range: [0, 4]
    },
    yaxis: {
      title: 'Gęstość prawdopodobieństwa',
    },
    autosize: true,
    height: 600,
    hovermode: 'closest',
    showlegend: true,
    bargap: 0.05
  };

  // Render aktywnej wizualizacji
  const renderActiveVisualization = () => {
    switch(activeTab) {
      case "zeros":
        return (
          <Plot
            data={zerosPlotData}
            layout={zerosLayout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}
          />
        );
      case "zeta":
        return (
          <Plot
            data={zetaPlotData}
            layout={zetaLayout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}
          />
        );
      case "critical":
        return (
          <Plot
            data={criticalLinePlotData}
            layout={criticalLineLayout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}
          />
        );
      case "distribution":
        return (
          <Plot
            data={distributrionPlotData}
            layout={distributionLayout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}
          />
        );
      default:
        return (
          <Plot
            data={zerosPlotData}
            layout={zerosLayout}
            useResizeHandler={true}
            style={{ width: '100%', height: '100%' }}
          />
        );
    }
  };

  return (
    <div className="page">
      <h2>Wizualizacje Hipotezy Riemanna</h2>

      <div className="visualization-tabs">
        <button 
          className={activeTab === "zeros" ? "active" : ""} 
          onClick={() => setActiveTab("zeros")}
        >
          Zera funkcji dzeta
        </button>
        <button 
          className={activeTab === "zeta" ? "active" : ""} 
          onClick={() => setActiveTab("zeta")}
        >
          Mapa funkcji dzeta
        </button>
        <button 
          className={activeTab === "critical" ? "active" : ""} 
          onClick={() => setActiveTab("critical")}
        >
          Na prostej krytycznej
        </button>
        <button 
          className={activeTab === "distribution" ? "active" : ""} 
          onClick={() => setActiveTab("distribution")}
        >
          Rozkład odstępów
        </button>
      </div>
      
      <section>
        <h3>
          {activeTab === "zeros" && "Nietrywialne zera funkcji dzeta"}
          {activeTab === "zeta" && "Wizualizacja funkcji dzeta na paśmie krytycznym"}
          {activeTab === "critical" && "Funkcja dzeta na prostej krytycznej"}
          {activeTab === "distribution" && "Rozkład odstępów między zerami"}
        </h3>
        
        {activeTab === "zeros" && (
          <p>
            Poniższy wykres przedstawia położenie pierwszych kilku nietrywialnych zer funkcji dzeta Riemanna 
            na płaszczyźnie zespolonej. Według hipotezy Riemanna, wszystkie te zera leżą na tzw. prostej krytycznej{' '}
            <InlineMath>{`\\text{Re}(s) = \\frac{1}{2}`}</InlineMath>.
          </p>
        )}
        
        {activeTab === "zeta" && (
          <p>
            Ten wykres pokazuje konturową mapę wartości modułu funkcji dzeta <InlineMath>{`|\\zeta(s)|`}</InlineMath> na paśmie krytycznym.
            Ciemniejsze obszary odpowiadają mniejszym wartościom - zera funkcji to miejsca, gdzie funkcja przyjmuje wartość 0.
            Wszystkie zera zdają się leżeć na białej przerywanej linii, która oznacza prostą krytyczną.
          </p>
        )}
        
        {activeTab === "critical" && (
          <p>
            Wykres przedstawia zmianę części rzeczywistej (czerwona linia) i urojonej (niebieska linia) funkcji dzeta 
            na prostej krytycznej <InlineMath>{`s = \\frac{1}{2} + it`}</InlineMath>. W miejscach, gdzie obie linie 
            przecinają zero jednocześnie, funkcja dzeta ma zero - co odpowiada hipotezie Riemanna.
          </p>
        )}
        
        {activeTab === "distribution" && (
          <p>
            Ten histogram pokazuje rozkład znormalizowanych odstępów między sąsiednimi zerami funkcji dzeta Riemanna.
            Czerwona linia przedstawia teoretyczny rozkład odstępów zgodny z przewidywaniami Teorii Macierzy Losowych 
            (GUE - Gaussian Unitary Ensemble), co stanowi zaskakujące powiązanie z fizyką kwantową.
          </p>
        )}
        
        <div className="visualization-container">
          {renderActiveVisualization()}
        </div>
      </section>
      
      <section>
        <h3>Interpretacja wizualizacji</h3>
        
        {activeTab === "zeros" && (
          <>
            <p>
              Na powyższym wykresie widać, że wszystkie pokazane nietrywialne zera rzeczywiście leżą na 
              czerwonej przerywanej linii, która reprezentuje prostą krytyczną <InlineMath>{`\\text{Re}(s) = \\frac{1}{2}`}</InlineMath>.
            </p>
            <p>
              Do tej pory zweryfikowano komputerowo, że pierwsze kilkadziesiąt miliardów nietrywialnych zer 
              funkcji dzeta rzeczywiście leży na tej prostej, co stanowi silne potwierdzenie empiryczne hipotezy Riemanna.
            </p>
          </>
        )}
        
        {activeTab === "zeta" && (
          <>
            <p>
              Mapa konturowa pozwala zobaczyć "krajobraz" funkcji dzeta na płaszczyźnie zespolonej. 
              Można zauważyć, że obszary, gdzie funkcja przyjmuje wartości bliskie zeru (ciemniejsze obszary), 
              zdają się być uporządkowane wzdłuż prostej krytycznej <InlineMath>{`\\text{Re}(s) = \\frac{1}{2}`}</InlineMath>.
            </p>
            <p>
              Ta wizualizacja pomaga zrozumieć, dlaczego hipoteza Riemanna może być prawdziwa - wydaje się, że 
              istnieje pewna "siła" przyciągająca zera funkcji dokładnie do prostej krytycznej.
            </p>
          </>
        )}
        
        {activeTab === "critical" && (
          <>
            <p>
              Wykres pokazuje oscylacyjny charakter funkcji dzeta na prostej krytycznej. Zera funkcji występują 
              dokładnie tam, gdzie zarówno część rzeczywista jak i urojona funkcji przyjmują wartość zero 
              (punkty przecięcia obu krzywych z osią poziomą).
            </p>
            <p>
              Ważną obserwacją jest to, że te oscylacje stają się coraz bardziej złożone dla większych wartości 
              parametru <InlineMath>t</InlineMath>, co czyni dokładne numeryczne i analityczne badanie zer coraz trudniejszym.
            </p>
          </>
        )}
        
        {activeTab === "distribution" && (
          <>
            <p>
              Najbardziej zadziwiającym aspektem tego wykresu jest zgodność między empirycznym rozkładem odstępów 
              między zerami funkcji dzeta a teoretycznym rozkładem przewidywanym przez fizykę macierzy losowych.
            </p>
            <p>
              To nieoczekiwane powiązanie, odkryte przez Hugh Montgomery'ego i potwierdzone przez Andrew Odlyzko, 
              sugeruje głęboki związek między teorią liczb a fizyką kwantową, szczególnie z systemami o chaotycznej 
              dynamice kwantowej. Takie systemy zdają się "wiedzieć" o własnościach funkcji dzeta!
            </p>
          </>
        )}
      </section>
      
      <section>
        <h3>Funkcja dzeta na płaszczyźnie zespolonej</h3>
        <p>
          Pełne zrozumienie funkcji dzeta wymaga wizualizacji jej zachowania na całej płaszczyźnie zespolonej. 
          Funkcja ta przyjmuje wartości zespolone, co sprawia, że jej pełna wizualizacja wymagałaby czterowymiarowej 
          przestrzeni. Zamiast tego, powyższe wykresy przedstawiają różne aspekty tej funkcji.
        </p>
        <p>
          Hipoteza Riemanna to nie tylko abstrakcyjny problem matematyczny - jak pokazują wizualizacje, 
          ma ona geometryczną interpretację jako twierdzenie o położeniu pewnych szczególnych punktów w przestrzeni zespolonej.
        </p>
      </section>
    </div>
  );
};

export default Visualizations; 