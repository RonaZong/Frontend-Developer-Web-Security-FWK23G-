// Set username in localStorage
localStorage.setItem("username", "kristian");

// Set theme in sessionStorage
sessionStorage.setItem("theme", "darkmode");

// Get data from localStorage and sessionStorage
console.log(localStorage.getItem("username"));
console.log(sessionStorage.getItem("theme"));

// Clear localStorage and sessionStorage
localStorage.clear()
sessionStorage.clear()

// Cookies
// Set cookie name 
document.cookie = "name=Kristian;"
// Set another cookie. Notera att det bara är att skriva =.
console.log(document.cookie);
document.cookie = "color=green;";
console.log(document.cookie);

// Expiration
// Cookies without expiration last through a session.
document.cookie = `name=Kristian; expires=${new Date(2024, 0, 2).toUTCString()}`;
// Going to dissapear directly.
document.cookie = `name=Kristian; expires=${new Date(2020, 0, 2).toUTCString()}`;

/* 
1. localStorage setItem, getItem
2. sessionStorage
3. cookies
*/