
/* javascript types */
typeof("string") == "string"
typeof(3) == typeof(3.4) == typeof(0x34) == "number"
typeof(myObject) == typeof(myArray) == "object" // arrays are objects
typeof(true) == typeof(1 == 2) == "boolean"
typeof(Math.sin) == "function"
typeof(notthere) == "undefined"

/* comparisons */
123 == "123"                       // true => converts type
123 === "123"                      // false => checks type
typeof(x) == "undefined"           // x isn't there
x == null                          // x is defined, but null

/* Numbers */
parseInt("123")                    // base 10 => 123
parseInt("123", 16);               // base 16 => 291
parseFloat("123.43");              // 123.43

isNaN(0/0) == true                 // illegal number
3/0 == Infinity                    // legal...
-3/0 == -Infinity                  //
isFinite(3/0) == false             // ... but not finite

/* regular expression (regex) string comparisons */
matches = "hello".match(/h../)     // returns array ["hel"] or null

re = new RegExp("h..", "ig");      // construct regexp -- no slashes
matches = "hello".match(re);       // use it

"hello".replace(/h/,"b")           // => "bello"

