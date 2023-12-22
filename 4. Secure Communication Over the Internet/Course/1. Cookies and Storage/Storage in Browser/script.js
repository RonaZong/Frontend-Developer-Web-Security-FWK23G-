// Set data, first parameter is the name, second parameter is the value to associate with the name
// Set username in localStorage
localStorage.setItem("name", "Rona");
localStorage.setItem("lastName", "Zong");
localStorage.setItem("username", "kristian");

// Set theme in sessionStorage
sessionStorage.setItem("name", "Rona");
sessionStorage.setItem("lastName", "Zong");
sessionStorage.setItem("theme", "darkmode");


// Get data from localStorage and sessionStorage
localStorage.getItem("name"); // Rona
sessionStorage.getItem("name"); // Rona
console.log(localStorage.getItem("username"));
console.log(sessionStorage.getItem("theme"));


// Remove Data
localStorage.removeItem("name");
sessionStorage.removeItem("name");

// Clear localStorage and sessionStorage
localStorage.clear()
sessionStorage.clear()

// Cookies
// Set Cookies
// Cookie will be expired since the default expiration date is in the past.
// Set an expiration date manually, 01/01/9999 which essentially never expires.
document.cookie = `name=Rona; expires=${new Date(9999, 0, 1).toUTCString()}`;
document.cookie = `lastName=Zong; expires=${new Date(9999, 0, 1).toUTCString()}`;
document.cookie = "name=Kristian;"

// Set another cookie. Notera att det bara är att skriva =.
// Get Cookie
document.cookie; // name=Rona; lastName=Zong
console.log(document.cookie);
document.cookie = "color=green;";
console.log(document.cookie);

// Expiration
// Cookies without expiration last through a session.
document.cookie = `name=Kristian; expires=${new Date(2024, 0, 2).toUTCString()}`;
// Going to dissapear directly.
document.cookie = `name=Kristian; expires=${new Date(2020, 0, 2).toUTCString()}`;

// Remove cookie, set it again with a blank value and a past expiration date
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

/* 
1. localStorage setItem, getItem
2. sessionStorage
3. cookies
*/