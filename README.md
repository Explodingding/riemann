# Hipoteza Riemanna - Aplikacja Edukacyjna

Interaktywna aplikacja edukacyjna poświęcona hipotezie Riemanna, jednego z najważniejszych nierozwiązanych problemów matematycznych.

## Funkcjonalności

- Wprowadzenie do hipotezy Riemanna
- Wyjaśnienie liczb zespolonych i funkcji Zeta
- Interaktywne wizualizacje
- Szczegółowe omówienie znaczenia i zastosowań hipotezy
- Pełny słownik pojęć matematycznych z eleganckim formatowaniem wzorów

## Technologie

- React 19
- TypeScript
- MathJax do renderowania wzorów matematycznych
- Plotly.js do wizualizacji
- CSS do stylizacji

## Rozpoczęcie pracy z projektem

### Instalacja zależności

```bash
npm install
```

### Uruchomienie aplikacji w trybie deweloperskim

```bash
npm start
```

Otwórz [http://localhost:3000](http://localhost:3000), aby zobaczyć aplikację w przeglądarce.

### Budowanie wersji produkcyjnej

```bash
npm run build
```

Tworzy wersję produkcyjną aplikacji w folderze `build`, gotową do deploymentu.

## Deployment na Netlify

Projekt jest skonfigurowany do łatwego deploymentu na Netlify:

1. Połącz repozytorium z Netlify
2. Konfiguracja buildowania zostanie automatycznie wykryta z pliku `netlify.toml`
3. Netlify automatycznie zbuduje i zdeployuje aplikację

Możesz również wykonać deployment ręcznie, używając Netlify CLI:

```bash
# Instalacja Netlify CLI
npm install -g netlify-cli

# Autoryzacja
netlify login

# Deployment
netlify deploy --prod
```

## Licencja

Ten projekt jest udostępniany na licencji MIT. Szczegóły można znaleźć w pliku LICENSE.
