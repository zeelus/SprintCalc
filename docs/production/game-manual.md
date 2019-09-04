# SprintCalc

## Instrukcja gry

Zalecana ilość graczy: 2

Skład pakietu: 
1. 15 kart postaci
2. 10 kart zdarzeń
3. 15 kart projektów

Do gry wymagana jest aplikacja **SprintCalc**

## Rozgrywka

Przygotowanie gry:

1. Przygotuj aplikację.
2. Podziel karty zgodnie z informacją zawartą pod kodem QR np. programiści, zdarzenia, projekty.

Celem gry jest zdobycie większej ilości pieniędzy od przeciwnika. 
Gracze zaczynją w ustalonej między sobą kolejności.
Zalecana ilość tur to: 30.

### Gra
1. Wybór karty z jednego z trzech stosów: pracowników, zdarzeń i projektów. Następnie za pomocą aplikacji zeskanuj kod QR karty. Po wybraniu karty projektu lub postaci gracz ma możliwość dodanie lub odrzucenie jej. Gracz może również porzucić projekt lub zwolnić dodanego dewelopera. Po wybraniu karty zdarzenia i zeskanowania jej, wyświetli się komunikat jaki wpływ na grę ma zeskanowana karta. Wybraną karte należy odłożyć, nie trafia z powertem do talii.
2. Po wybraniu karty gracz w aplikacji powinien ustawić jakie zasoby (frontend i backend) programistów jakie mają zostać użyte w dostępnych projektach.
3. Następnie gracz naciska przycisk "Następna runda", co wylicza jaką część projektu zdołano zrealizować i odejmuje koszty posiadania pracowników.
4. Następnie drugi gracz powtarza tą samą czynność.

Gracz zarobi pieniądze, kiedy uda mu się ukończyć dany projekt w terminie. Obecnie nie ma bonsu za ukończenie projektu przed czasem.

Jeśli gracz nie ukończy projektu na czas projekt zostanie usunięty i pnieniądze nie zostaną wpłacone na konto gracza.

Gracz może zaryzykować i pobrać kartę zdarzenia. Oznacza to brak możliwości pobrania innej karty w tej rundzie. 
Skutki wydarzeń są pozytywne oraz negatywne. Po zeskanowaniu wydarzenia jego skutów nie da się cofnąć.

Pierwszy gracz, którego saldo spadnie poniżej 0 przegrywa.
Zwycięzcą jest gracz, który uzyska największą ilość pieniędzy.

## Budowanie aplikacji

Kod źródłowy aplikacji dostępny pod adresem: [https://github.com/zeelus/SprintCalc](https://github.com/zeelus/SprintCalc)

Aby zbudować należy zainstalować oprogramowanie [node.js](https://nodejs.org/en/).

W katalogu z kodem źródłowym wykonać następujące komendy:
1. node install
2. npm install expo-cli --global
3. expo start

## Pobranie aplikcaji
Aplikację można też pobrać skanując kod na stronie: `https://expo.io/@zee2000/SprintCalc`

## Autorzy:
* Gilbert Gwizdała 
* Janusz Majchrzak
