```javascript

Callbacks är som att lämna en lapp med instruktioner.

Här är hur det fungerar:

Lämna en lapp: När du har en uppgift som tar tid att göra, som att baka en kaka, vill du inte sitta där och stirra på ugnen hela tiden. Istället skriver du ner på en lapp hur kakan ska göras och sätter den på kylskåpet.

Fortsätt göra andra saker: Medan kakan grillas i ugnen kan du göra andra saker, som att städa köket eller titta på TV. Du tittar inte bara på ugnen hela tiden.

Kalla när det är klart: När ugnen är klar kommer ugnen att "ringa dig tillbaka" (callback). Den säger, "Hej, kakan är klar!" och nu vet du att det är dags att gå tillbaka till köket.

I programmering fungerar callbacks på samma sätt:

Lämna en lapp (callback): Istället för att stanna och vänta på att en uppgift ska slutföras, lämnar du en lapp (en funktion) som innehåller instruktioner om vad som ska göras när uppgiften är klar.

Fortsätt göra andra saker (asynkron kod): Medan väntar på att den långsamma uppgiften ska slutföras, kan programmet fortsätta att göra andra saker.

Kalla när det är klart (callback-anrop): När den långsamma uppgiften är klar, "ringer" programmet tillbaka (anropar callback-funktionen) och utför instruktionerna på lappen.

Så, callbacks hjälper till att göra programmet effektivt och responsivt, precis som att lappa innehåller instruktioner för att göra köket mer effektivt!

-----------------------------------------------------------------------------------------



1: Addition
Uppgift:

-Skapa en funktion add som tar två tal som argument och en callback-funktion.
-Inuti funktionen, beräkna summan av de två talen.
-Anropa callback-funktionen med summan som ett argument.

/Din kod:





-----------------------------------------------------------------------------------------

2: Tidigare eller senare
Uppgift:

-Skapa en funktion waitAndCall som tar en tid i millisekunder och en callback-funktion.
-Använd setTimeout för att vänta den angivna tiden.
-Anropa callback-funktionen efter den angivna tiden.

/Din kod:



-----------------------------------------------------------------------------------------


3: Array Transformation
Uppgift:

-Skapa en funktion processArray som tar en array och en callback-funktion.
-Använd en for-loop för att iterera genom varje element i arrayen.
-Anropa callback-funktionen för varje element i arrayen.

/Din kod:



-----------------------------------------------------------------------------------------


4: Filtrera Array
Uppgift:

-Skapa en funktion filterArray som tar en array och en callback-funktion.
-Använd filter-metoden för att filtrera ut vissa element baserat på callback-funktionens villkor.
-Skriv ut det filtrerade resultatet.

/Din kod:



-----------------------------------------------------------------------------------------


5: Strängoperation
Uppgift:

-Skapa en funktion concatenateStrings som tar två strängar och en callback-funktion som parameter.
-Inuti funktionen, kombinera de två strängarna till en ny sträng.
-Anropa callback-funktionen med den kombinerade strängen som ett argument.

/Din kod:



-----------------------------------------------------------------------------------------


6: Hitta Element
Uppgift:

-Skapa en funktion findElement som tar en array och en callback-funktion som parameter.
-Använd arr.find() för att hitta det första elementet i arrayen som uppfyller villkoret i callback-funktionen.
-Anropa callback-funktionen med det hittade elementet som ett argument.

/Din kod:



-----------------------------------------------------------------------------------------


7: Callback med Fallback
Uppgift:

-Skapa en funktion callbackWithFallback som tar tre parametrar: flag (en boolesk parameter) och två callback-funktioner (callback1 och callback2).
-Inuti funktionen, använd en if-sats för att kontrollera värdet av flag.
-Om flag är sann, anropa callback1, annars anropa callback2.
-Skapa två enkla callback-funktioner (callback1 och callback2) som bara loggar olika meddelanden.
-Använd funktionen callbackWithFallback med olika värden för flag och observera vilken callback som anropas.

/Din kod:



-----------------------------------------------------------------------------------------


8: Kontrollera Asynkron Operation
Uppgift:

-Skapa en asynkron funktion asyncOperation som tar en callback-funktion som parameter.
-Inuti funktionen, simulera en asynkron operation med hjälp av setTimeout (t.ex. 2000 millisekunder).
-Efter att tiden har gått, logga ett meddelande och anropa den medföljande callback-funktionen.
-Använd funktionen med en callback och observera att meddelandet loggas efter den asynkrona operationen.

/Din kod:



-----------------------------------------------------------------------------------------

9: Upprepa Callback
Uppgift:

-Skapa en funktion repeatCallback som tar en callback-funktion och ett antal repetitioner som parametrar.
-Använd en for-loop för att upprepa callback-anropet det angivna antalet gånger.
-Anropa callback-funktionen inuti loopen och skicka med den aktuella iterationen som ett argument.

/Din kod:



-----------------------------------------------------------------------------------------


10: Chaining Callbacks
Uppgift:

-Skapa två funktioner: firstFunction och secondFunction, där varje funktion tar en callback-funktion som parameter.
-I firstFunction, logga ett meddelande och anropa callback-funktionen.
-I secondFunction, logga ett annat meddelande.
-Använd firstFunction med en callback som i sin tur anropar secondFunction.

/Din kod:



-----------------------------------------------------------------------------------------


-----------------------------------------------------------------------------------------





/ FACIT 


1: Addition:
// Steg 1: Skapa funktionen
function add(x, y, callback) {
    // Steg 2: Beräkna summan av de två talen
    const sum = x + y;
    // Steg 3: Anropa callback-funktionen med summan som ett argument
    callback(sum);
}

// Steg 4: Använd funktionen med en callback
add(5, 10, function(result) {
    // Steg 5: Logga summan
    console.log(result); // Borde skriva ut 15
});


-------------------------------------------------

2: Tidigare eller senare
// Steg 1: Skapa funktionen
function waitAndCall(time, callback) {
    // Steg 2: Använd setTimeout för att vänta den angivna tiden
    setTimeout(callback, time);
}

// Steg 3: Använd funktionen med en callback
waitAndCall(2000, function() {
    // Steg 4: Logga meddelandet efter den angivna tiden
    console.log("Detta kommer att skrivas ut efter 2 sekunder");
});


-------------------------------------------------


3: Array Transformation:
// Steg 1: Skapa funktionen
function processArray(arr, callback) {
    // Steg 2: Använd en for-loop för att iterera genom varje element i arrayen
    for (let i = 0; i < arr.length; i++) {
        // Steg 3: Anropa callback-funktionen för varje element
        callback(arr[i]);
    }
}

// Steg 4: Använd funktionen med en callback
processArray([1, 2, 3], function(item) {
    // Steg 5: Logga varje element multiplicerat med 2
    console.log(item * 2);
});



-------------------------------------------------


4: Filterrera Array:
// Steg 1: Skapa funktionen
function filterArray(arr, callback) {
    // Steg 2: Använd filter-metoden för att filtrera ut vissa element baserat på callback-funktionens villkor
    const result = arr.filter(callback);
    // Steg 3: Skriv ut det filtrerade resultatet
    console.log(result);
}

// Steg 4: Använd funktionen med en callback
filterArray([1, 2, 3, 4, 5], function(item) {
    // Steg 5: Returnera true om elementet är större än 2
    return item > 2;
});



-------------------------------------------------


5: Strängoperation:
// Steg 1: Skapa funktionen
function concatenateStrings(str1, str2, callback) {
    // Steg 2: Kombinera de två strängarna
    const result = str1 + str2;
    // Steg 3: Anropa callback-funktionen med det kombinerade resultatet
    callback(result);
}

// Steg 4: Använd funktionen med en callback
concatenateStrings("Hej ", "världen!", function(result) {
    // Steg 5: Logga det kombinerade resultatet
    console.log(result); // Borde skriva ut "Hej världen!"
});



-------------------------------------------------


6: Hitta Element:
// Steg 1: Skapa funktionen
function findElement(arr, callback) {
    // Steg 2: Använd find för att hitta det första elementet som uppfyller callback-villkor
    const result = arr.find(callback);
    // Steg 3: Logga resultatet
    console.log(result);
}

// Steg 4: Använd funktionen med en callback
findElement([1, 2, 3, 4, 5], function(item) {
    // Steg 5: Returnera true om elementet är större än 2
    return item > 2;
});



-------------------------------------------------


7: Callback med Fallback:
// Steg 1: Skapa funktionen
function callbackWithFallback(flag, callback1, callback2) {
    // Steg 2: Använd en if-sats för att välja vilken callback som ska anropas
    if (flag) {
        // Steg 3: Anropa den första callback-funktionen om flag är sann
        callback1();
    } else {
        // Steg 4: Anropa den andra callback-funktionen om flag är falsk
        callback2();
    }
}

// Steg 5: Skapa två enkla callback-funktioner
function callback1() {
    console.log("Callback 1 anropad");
}

function callback2() {
    console.log("Callback 2 anropad");
}

// Steg 6: Använd funktionen med olika värden för flag
callbackWithFallback(true, callback1, callback2); // Ska logga "Callback 1 anropad"
callbackWithFallback(false, callback1, callback2); // Ska logga "Callback 2 anropad"



-------------------------------------------------


8: Kontrollera Asynkron Operation:
// Steg 1: Skapa en asynkron funktion med async nyckelord
async function asyncOperation(callback) {
    // Steg 2: Simulera en asynkron operation med setTimeout
    setTimeout(function() {
        // Steg 3: Logga meddelande och anropa callback-funktionen när operationen är klar
        console.log("Asynkron operation klar");
        callback();
    }, 2000);
}

// Steg 4: Använd funktionen med en callback
asyncOperation(function() {
    // Steg 5: Logga meddelande när callbacken anropas efter asynkron operation
    console.log("Callback anropad efter asynkron operation");
});



-------------------------------------------------


9: Upprepa Callback:
// Steg 1: Skapa funktionen
function repeatCallback(callback, repetitions) {
    // Steg 2: Använd en for-loop för att upprepa callback-anrop
    for (let i = 0; i < repetitions; i++) {
        // Steg 3: Anropa callback-funktionen med aktuell iteration
        callback(i);
    }
}

// Steg 4: Använd funktionen med en callback och antal repetitioner
repeatCallback(function(index) {
    // Steg 5: Logga meddelande med aktuell iteration
    console.log("Callback anropad för repetition " + index);
}, 3);



-------------------------------------------------


10: Chaining Callbacks:
// Steg 1: Skapa två funktioner
function firstFunction(callback) {
    // Steg 2: Logga meddelande från första funktionen
    console.log("Första funktionen");
    // Steg 3: Anropa callback-funktionen från första funktionen
    callback();
}

function secondFunction() {
    // Steg 4: Logga meddelande från andra funktionen
    console.log("Andra funktionen");
}

// Steg 5: Använd funktionerna och se till att den andra funktionens callback anropas från den första
firstFunction(function() {
    // Steg 6: Anropa andra funktionens callback från callbacken i första funktionen
    secondFunction();
});



-------------------------------------------------