
function Person(first, last) {              // create "constructor"
    this.first = first;                     // public variables -- reference current object
    this.last = last;

    var privateFn = function(first, last){  // private function
    // ...
    }

    this.setName = function(first, last){   // public function
        this.first = first;
    this.last = last;
    }

}

Person.prototype.fullName = function() {    // extend prototype
    return this.first + ' ' + this.last;    //   even at runtime!
}

var bob = new Person("Bob", "Smith");       // "new" creates an object
bob.fullName();                             // => "Bob Smith"

