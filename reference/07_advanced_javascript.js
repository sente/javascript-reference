
function foo(a,b){              // will raise exception
  var c = a + b;
  throw "Error Message";        // your message here
}

try{                            // try dangerous code
   foo(1,2);
}
catch(e){                       // catch exception
   alert(e.name + e.message);   // show details
}

eval("x = 3");                  // execute arbitrary code

timer = setTimeout("myfunction()", 1000)    // execute in 1 second (1000ms)
clearTimeout(timer);                        // cancel event

