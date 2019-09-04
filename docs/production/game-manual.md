# SprintCalc

##Informacje ogólne

Ilość graczy: 2

Skład pakietu: 

1. 15 kart postaci
2. 10 kart zdarzeń
3. 15 kart projektów

Do gry wymagana jest aplikacja SprintCalc. Aplikacja dostępna jest pod adresem: https://github.com/zeelus/SprintCalc.

##Rozgrywka

Przygotowanie gry:

1. Przygotuj aplikacji.
2. Podziel karty zgodnie z rysunkami na rewersie(zgodnie z grupą z której pochodzą np. programiści zdarzenia projekty.).


Cel gry: Celem gry jest zdobycie większej ilości pieniędzy od przeciwnika. 

Grę zaczyna najmłodszy gracz. 

Gracze mają do rozegranie 40 rund, w których kolejno: 

1. Wybierają kartę z trzech stosów (postaci, zdarzenia, projektu). Następnie za pomocą aplikacji zeskanuj kod QR karty. Po wybraniu karty projektu lub postaci gracz ma możliwość dodanie lub odrzucenie jej. Dodanie karty zapisywane jest w aplikacji na stałe. Po wybraniu karty zdarzenia i zeskanowania jej, wyświetli się komunikat jaki wpływ na grę ma zeskanowana karta. Wybraną karte należy odłożyć.
2. Po wybraniu karty gracz w aplikacji musi ustawić jakie zasoby(w kategoriach frontend i backend) programistów mają zostać użyte w dostępnych projektach.
3. Następnie gracz naciska przycisk "Następna runda" co wylicza jaką część projektu zdołano zrealizować, i odejmuje koszty posiadania pracowników.
4. Następnie drugi gracz powtarza tą samą czynność.

Pierwszy gracz, którego saldo spadnie poniżej 0 przegrywa.

Gra kończy się po osiągnięci przez wszystkich graczy liczby 40 rund. Zwycięzcą jest gracz który uzyska największą ilość pieniędzy.

##Budowanie aplikacji

Kod źródłowy aplikacji dostępny pod adresem: [https://github.com/zeelus/SprintCalc](https://github.com/zeelus/SprintCalc)

Aby zbudować należy zainstalować oprogramowanie [node.js](https://nodejs.org/en/).

W katalogu z kodem źródłowym wykonać następujące komendy:

1. node install
2. npm install expo-cli --global
3. expo start

## Pobranie aplikcaji
Aplikację można też pobrać skanując kod na stronie: `https://expo.io/@zee2000/SprintCalc`

