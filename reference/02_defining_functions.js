function foo(a,b){                  // global function
  return a + b;
}

var fn = function(a,b){             // save function as variable...
  return foo(a,b);
}

obj.fn = function(a,b){             // ...or as part of object
  return a + b;
}

function bar(a,b){
    var n = 1;                      // local var

    function helper(x) {            // inner function...
        return 1/Math.sqrt(x + n);  // .. can use local vars
    }
    return helper(input);           // avoid need for global function
}

foo(1,2) == fn(1,2) == 3;           // true
