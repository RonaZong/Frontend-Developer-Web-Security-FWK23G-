/* DOM (Document Object Model) is a standard object model and programming interface for HTML.
With DOM, JS can access and change all the elements of an HTML document. 

DOM defines:
The HTML elements as object.
The properties of all HTML elements.
The methods to access all HTML elements.
The events for all HTML elements. 

With the obeject model, JS gets all the power it needs  to create dynamic HTML:
JS can change all the HTML elements in the page.
JS can change all the HTML attributes in the page.
JS can change all the CSS styles in the page.
JS can remove existing HTML elements and attributes.
JS can add new HTML elements and attributes.
JS can react to all existing HTML events in the page.
JS can create new HTML events in the page.*/

/* When a web page is loaded, the browser creates a DOM of the page.
HTML DOM model is constructed as a tree of Objects. */


/* DOM methods are actions you can perform (on HTML elements).
DOM properties are values (of HTML elements) that you can set or change. */

/* DOM document object is the owner of all other objects in web page.
Access the document obejct to access any element in an HTML page. */

/* Find HTML Elements */
// getElementById() method finds an element by element id
document.getElementById("id");
// getElementsByTagName() method finds elements by tag name
document.getElementsByTagName("p");
// getElementsByClassName() method finds elements by class name
document.getElementsByClassName("class");
// querySelector() methods finds elements that match a specified CSS selector (id, class, names, types, attributes, values of attributes, etc)
document.querySelector("p.demo");
// querySelectorAll() method returns a list of all HTML elements that match the specified CSS query
document.querySelectorAll("p.class");
// forms[] finds the form element, in the forms collection, and displays all element values
document.forms["form"];
// anchors property returns all <a> elements that have a name attribute
// doctype property returns the document's doctype


/* Change HTML Elements */
// element.attribute = new value;
// innerHTML property gets or changes the inner HTML of an element
console.log(document.getElementById("innerHTML").innerHTML);
document.getElementById("innerHTML").innerHTML = "New inner HTML";
// attribute property changes the attribute value of an HTML element
// document.getElementById("image").src = "";
// setAttribute() method changes the attribute value of an HTML element
// element.setAttribute(attribute, value);
// style property changes the style of an HTML element
// element.style.property = "new style";


/* Add and Delete Elements */
// createElement() method creates an HTML element
// document.createElement("element");
// createTxtNode() method
// document.createTextNode("some text");
// appendChild() method adds an HTML element
// document.appendChild("element");
// parentElement.appendChild("childElement");
// removeChild() method removes an HTML element
// document.removeChild("element");
// replaceChild() method replaces an HTML element
// document.replaceChild("new", "old");
// write() method writes into the HTML output stream
// document.write("text"); 

// parentElement.insertBefore("newElement", "Existing Element");


/* Events Handlers */
// Add Events Handlers
// onclick method adds event handler code to an onclick event
// document.getElementById("id").onclick = function() {};

// Add Events Handlers
// element.addEventListener("event", handler);

/* Change CSS Properties */
// element.style.property = new style;



/* Forms */
// Form Validaiton
// function validateForm() {
//     let x = document.forms["form2"]["fname"].value;
//     if (x == "") {
//         alert("Name ust be filed out");
//         return false;
//     }
// }

/* Date Validation is the process of ensuting that user input is clean, correct, and useful.
Typical validation tasks are: 
has the user filled in all required fields?
has the user entered a valid date?
has the user entered text in a numeric field? */
/* Server side validation is performed by a web server, after input has been sent to the server.
Client side validation is performed by a web browser, before input is sent to a web server. */

/* Constraint Validation:

Constraint validation HTML Input Attributes:
disbled specifies that the input element should be disabled
max specifies the maximum value of an input element
min specifies the minimum value of an input element
pattern specifies the value pattern of an input element
required specifies that the input field requires an element
type specifies the type of an input element

Constraint validation CSS Pseudo Selectors:
:disabled selects input elements with the "disabled" attribute specified
:invalid selects input elements with invalid values
:optional selects input elements with no "required" attribute specified
:required selects input elements with the "required" attribute specified
:valid selects input elements with valid values

Constraint validation DOM Properties and Methods */


// Exercise
// Find HTML Elements
// document.querySelector("p.main");
// const pars = document.querySelectorAll("p.main");

// Change HTML Elements
// let header = document.querySelector("h1");
// header.innerHTML = "New Heading";
// let link = document.querySelector("#link");
// link.href = "http://www.newwebsite.com";

// Change CSS Properties
// pars[1].style.fontSize = "2em";

// Add HTML Elements
// let para = document.createElement("p");
// let node = document.createTextNode("This is new");
// para.appendChild(node);

// let element = document.querySelector("#div1");
// element.appendChild(para);

// let child = document.querySelector("#p1");
// element.insertBefore(para, child);