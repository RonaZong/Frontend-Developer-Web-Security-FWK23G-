/* Cookies and Storage */
// 1.1 Write a script that stores your name and hometown in localStorage.
localStorage.setItem("username", "Rona");
localStorage.setItem("hometown", "Shanghai");

// 1.2a Build a website that shows how many times the user has visited your website.
// Store the visit in localStorage
let visitCount = localStorage.getItem("visitCount");
if (visitCount) {
  visitCount = parseInt(visitCount) + 1;
} else {
  visitCount = 1;
}
localStorage.setItem("visitCount", visitCount);
document.getElementById("visitCount").textContent = visitCount;

// 1.2b Add a text form where a user can type something. Below that, there should be a heading "Past Entries" that shows what the user has entered in the field before.
const entryForm = document.getElementById("entryForm");
const userInput = document.getElementById("userInput");
const pastEntriesList = document.getElementById("pastEntries");
const pastEntry = document.getElementById("pastEntry");

entryForm.addEventListener("submit", e => {
  e.preventDefault();

  // Get userinput
  const entryText = userInput.value;
  pastEntry.textContent = entryText;

  // if (entryText.trim() !== "") {
  //   const entryListItem = document.createElement("li");
  //   entryListItem.textContent = entryText;
  //   pastEntriesList.appendChild(entryListItem);

    // Store the entry in localStorage
    let pastEntries = localStorage.getItem("pastEntries");
    console.log(pastEntries);
    if (pastEntries) {
  //     pastEntries = JSON.parse(pastEntries);
        pastEntries.forEach(entry => {
          console.log(entry);
  //         const entryListItem = document.createElement("li");
          entryText.textContent = entry;
  //           pastEntriesList.appendChild(entryListItem);
        });
    } else {
      pastEntries = [];
    }
  //   pastEntries.push(entryText);
    localStorage.setItem("pastEntries", JSON.stringify(pastEntries));

    // Clear the input field
    userInput.value = "";
  // }
});

// Display past entries on page load
// const storedEntries = localStorage.getItem("pastEntries");
// if (storedEntries) {
//   const pastEntries = JSON.parse(storedEntries);
//   pastEntries.forEach(entry => {
//     const entryListItem = document.createElement("li");
//     entryText.textContent = entry;
//     pastEntriesList.appendChild(entryListItem);
//   });
// }


// 1.2c Make sure that "Past Entries" do not disappear if you reload the page.

// 1.2d Add a timestamp to each entry.
// document.getElementById("timestamp").innerHTML = "";


// 1.2e Add a button that resets the number of visits to zero.


// 1.3a Make a website that contains a button. If you press the button, the browser must store a cookie with the name clicks. clicks increases by 1 for each time the user presses the button.

// 1.3b Add a header to the page. This should say "Welcome back, you were here X seconds ago!"

// 1.3c Add a button "Remove all cookies" which removes all cookies on your page.
// let removeCookies = document.getElementById("removeCookies");
// removeCookies.onclick = function() {
    //Expiration
    // document.cookie = `name=Kristian; expires=${new Date(2024, 0, 2).toUTCString()}`
    // document.cookie = `name=clicks; expires=${new Date(2020, 0, 2).toUTCString()}` 
// }
// 1.4 Build a website that prints all cookies and their values in a table with two columns. For example:
// Name                Value
// lastVisited         2022-01-01T23:00:00.000Z
// favoriteTheme       dark mode
// itemsInCart         2



  
  
  
  

// Sessions
// 2 In this exercise, you will build a page for an online bookstore. Below are some features you can implement in any order.
// Users can see different books on the home page that are available in the library.
// When you click on a book, you get some information about it. You can start with just a few books and hardcoded values. If you want, you can put these in a database.
// A user gets "Recently Viewed" on the home page with a list of books they have just looked at.
// A user can add books to the cart. Which books are in the shopping cart are saved in the session.
// A user has a login where session data is saved more permanently. The user can now close the browser, come back and still have the goods in the basket.
// After a certain amount of inactivity, the session is destroyed and the user is logged out.

// Feel free to refactor the code as you learn better ways to solve the problems during the course.



// function setCookie(cname, cvalue, exdays) {
//   const date = new Date();
//   date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) === ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) === 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }

// function checkVisits() {
//   let visitCount = getCookie("visitCount");
//   if (visitCount === "") {
//     visitCount = 1;
//   } else {
//     visitCount = parseInt(visitCount) + 1;
//   }
//   setCookie("visitCount", visitCount, 365);
//   document.getElementById("visitCount").innerHTML = visitCount;
// }