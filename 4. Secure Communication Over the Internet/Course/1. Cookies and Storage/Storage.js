// Set data, first parameter is the name, second parameter is the value to associate with the name
localStorage.setItem("name", "Rona");
localStorage.setItem("lastName", "Zong");

sessionStorage.setItem("name", "Rona");
sessionStorage.setItem("lastName", "Zong");

// Set Cookies
// Cookie will be expired since the default expiration date is in the past.
// Set an expiration date manually, 01/01/9999 which essentially never expires.
document.cookie = `name=Rona; expires=${new Date(9999, 0, 1).toUTCString()}`;
document.cookie = `lastName=Zong; expires=${new Date(9999, 0, 1).toUTCString()}`;

// Get Data
localStorage.getItem("name"); // Rona
sessionStorage.getItem("name"); // Rona

// Get Cookie
document.cookie; // name=Rona; lastName=Zong

// Remove Data
localStorage.removeItem("name");
sessionStorage.removeItem("name");

// Remove cookie, set it again with a blank value and a past expiration date
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT";


