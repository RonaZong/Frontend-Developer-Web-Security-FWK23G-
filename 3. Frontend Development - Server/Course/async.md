```javascript

Async/await är ett sätt att hantera asynkron kod i JavaScript.

Låt oss bryta ner det:

Asynkron kod: Ibland behöver vi utföra uppgifter som kan ta tid, som att ladda data från internet eller vänta på att något ska hända. Asynkron kod gör att programmet inte behöver stanna och vänta på dessa uppgifter; det kan fortsätta att göra andra saker medan det väntar.

Async/await: I JavaScript används async och await för att göra hanteringen av asynkron kod enklare. När du markerar en funktion som async, säger du till JavaScript att den kan innehålla asynkron kod. När du använder await inne i den funktionen, säger du att programmet ska vänta på att en viss asynkron uppgift ska slutföras innan det går vidare.

-----------------------------------------------------------------------------------------


1: Enkel Asynkron Funktion
Uppgift:

-Skapa en asynkron funktion med namnet `simpleAsyncFunction`.
-Inuti funktionen, använd `setTimeout` för att simulera en asynkron väntetid på 2000 millisekunder.
-Efter att tiden har gått, logga ett meddelande.

/Din kod:


-----------------------------------------------------------------------------------------

2: Asynkron Operation med Återkoppling
Uppgift:

-Skapa en asynkron funktion med namnet `asyncOperationWithFeedback`.
-Inuti funktionen, använd `setTimeout` för att simulera en asynkron väntetid på 1500 millisekunder.
-Efter att tiden har gått, logga ett meddelande och returnera en bekräftelsesträng.

/Din kod:


-----------------------------------------------------------------------------------------

3: Hantera Asynkrona Fel
Uppgift:

-Skapa en asynkron funktion med namnet `asyncFunctionWithError`.
-Inuti funktionen, använd `setTimeout` för att simulera en asynkron väntetid på 1000 millisekunder.
-Efter att tiden har gått, kasta ett fel med meddelandet "Ett fel inträffade".

/Din kod:


-----------------------------------------------------------------------------------------

4: Kedja Asynkrona Anrop
Uppgift:

-Skapa två asynkrona funktioner: `firstAsyncFunction` och `secondAsyncFunction`.
-I `firstAsyncFunction`, använd `setTimeout` för att simulera en asynkron väntetid på 2000 millisekunder och logga ett meddelande.
-I `secondAsyncFunction`, använd `setTimeout` för att simulera en asynkron väntetid på 1000 millisekunder och logga ett annat meddelande.
-Anropa `firstAsyncFunction` och när den är klar, anropa `secondAsyncFunction`.

/Din kod:



-----------------------------------------------------------------------------------------

5: Asynkron Funktion med Parameter
Uppgift:

-Skapa en asynkron funktion med namnet `asyncFunctionWithParameter`.
-Funktionen ska ta emot en parameter och använda `setTimeout` för att simulera en asynkron väntetid på 1500 millisekunder.
-Efter att tiden har gått, logga meddelandet "Funktionen anropad med parameter: [parameter]".

/Din kod:




-----------------------------------------------------------------------------------------


-----------------------------------------------------------------------------------------




/ FACIT

-----------------------------------------------------------------------------------------



1: Enkel Asynkron Funktion
async function simpleAsyncFunction() {
    // Skapa och vänta på en Promise som löser sig efter 2000 millisekunder
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Logga ett meddelande när tiden har gått
    console.log("Uppgift 1 klar!");
}

// Använd funktionen genom att anropa den
simpleAsyncFunction();


-------------------------------------------------

2: Asynkron Operation med Återkoppling
async function asyncOperationWithFeedback() {
    // Skapa och vänta på en Promise som löser sig efter 1500 millisekunder
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Logga ett meddelande när tiden har gått
    console.log("Uppgift 2 klar!");
    // Returnera en bekräftelsesträng när operationen är klar
    return "Operationen lyckades!";
}

// Använd funktionen och hantera resultatet med en .then-kedja
asyncOperationWithFeedback().then(result => console.log(result));


-------------------------------------------------


3: Hantera Asynkrona Fel
async function asyncFunctionWithError() {
    // Skapa och vänta på en Promise som löser sig efter 1000 millisekunder
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Kasta ett fel med ett meddelande
    throw new Error("Ett fel inträffade");
}

// Hantera fel med try-catch-block
async function handleAsyncError() {
    try {
        // Anropa den asynkrona funktionen
        await asyncFunctionWithError();
    } catch (error) {
        // Fånga och logga felet
        console.error(error.message);
    }
}

// Anropa funktionen för att se hur felhantering fungerar
handleAsyncError();


-------------------------------------------------


4: Kedja Asynkrona Anrop
async function firstAsyncFunction() {
    // Skapa och vänta på en Promise som löser sig efter 2000 millisekunder
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Logga ett meddelande när tiden har gått
    console.log("Första asynkrona anropet klart!");
}

async function secondAsyncFunction() {
    // Skapa och vänta på en Promise som löser sig efter 1000 millisekunder
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Logga ett meddelande när tiden har gått
    console.log("Andra asynkrona anropet klart!");
}

// Kedja anropen med .then för att säkerställa ordningen
firstAsyncFunction().then(() => secondAsyncFunction());


-------------------------------------------------

5: Asynkron Funktion med Parameter
async function asyncFunctionWithParameter(parameter) {
    // Skapa och vänta på en Promise som löser sig efter 1500 millisekunder
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Logga ett meddelande med den mottagna parametern
    console.log(`Funktionen anropad med parameter: ${parameter}`);
}

// Använd funktionen genom att skicka med en parameter
asyncFunctionWithParameter("Testparameter");

-------------------------------------------------
```
