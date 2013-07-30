
var str = "Hello";                // local variable, when inside a function
str2 = "Hello World";             // global variable in default context (window.str2)
str3 = 'My quote char: " ';       // single or double quote
str4 = "My really really really \
really long string broken into \
multiple lines";

str = 19;                         // change to int
str = 0xfe + 2.343 + 2.5e3;       // hex, floats, exp

var newObject = new Object();     // constructor
newObject = {};                   // shorthand for same
newObject.name = "bob"            // dynamic attributes
newObject.name = null             // it's there (null item)
delete newObject.name             // it's gone (undefined)
newObject["real age"] = 33;       // array notation/hash table

var obj = {                       // create object using JSON
    name: "Bob",                  //   aka Javascript Object Notation
    details: {
        age: 33,
        "favorite color": "green"
    }
}
obj.name
obj.details["favorite color"]

var newArray = [];                // no size
newArray[3] = "hi";               // grows dynamically
newArray[2] = 13;                 // any type
newArray.push(newObject);         // add new item
newArray.pop();                   // remove it

