
alert("message");                               // messagebox with "OK"
var choice = confirm("message");                // OK/CANCEL true or false
var input = prompt("message", "default value"); // enter a value; null if cancelled

x = document.getElementById("foo");             // finds <div id="foo"></div>

x.style.background = "#333";                    // set CSS style
x.style.borderLeft = "1px solid #ccc";          // border-left => borderLeft (camelCase)

x.className = "myclass";                        // set CSS class
x.innerHTML = "Hello";                          // set html inside div

y = document.getElementById("myinput");         // input area/textarea
y.value = "Hi";                                 // get or set text

