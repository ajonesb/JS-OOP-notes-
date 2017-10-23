//  POLYMORPHISM 

var answer = {
    get: function fn1 () {
        return this.val;
    },
    val: 42
};

var firmAnswer  = Object.create(answer); // using a prototype
firmAnswer.get = function fn2() {
    return this.val + "!!"; // gets val from answer + !!
};

//returns the same value plus the !! at the end 

answer.get();
firmAnswer.get();


/********************************************************************************************************************** */


// CONSTRUCTOR AND CLASSICAL INHERITANCE

function MyClass(){
    this.a = 42;
}

//Method
MyClass.prototype.method = function method() {

};

//Instantiate 
this.instance = new MyClass();


// Parent class constructor 
function Parent(){
    this.a = 42;
}

//parent class method 
Parent.prototype.method = function method() {};

//Child class constructor 
function Child() {
    Parent.call(this);
    this.b = 3.14159
}

//Inherit from parent class 
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

//Child class method 
Child.prototype.method = function method() {
    Parent.prototype.method.call(this);
}

/* Imagine the String() constructor didn't exist. Create a constructor function MyString() that 
acts like String() as closely as possible. You're not allowed to use any built-in string 
methods or properties, and remember that String() doesn't exist. You can use this code to 
test your constructor:*/

function MyString (string) {
    this.length = 0;
    for(var i in string) {
        this.length++;
    }
}

var x = new MyString("Hello");
x.length;

//Create an object called shape that has a type property and a getType() method.

var shape = {
    type: 'shape',
    getType: function () {
        return this.type;
    }
}

/* Define a Triangle() constructor function whose prototype is shape. 

Objects created with Triangle() should have three own properties—a, b, c representing the sides 
of a triangle */

function Triangle(a, b, c) {
    this.a = a; 
    this.b = b;
    this.c = c;
}

// Add a new method to the prototype called getPerimeter(). 
Triangle.prototype.getPerimeter = function () {
 return this.a + this.b + this.c;
};

// Test your implementation with this code"
var t = new Triangle(1,2,3);


/********************************************************************************************************************** */

// PROTOTYPE INHERITANCE SIMPLE

var myCar = {
 
  name: "Ford Escort",
 
  drive: function () {
    console.log( "Weeee. I'm driving!" );
  },
 
  panic: function () {
    console.log( "Wait. How do you stop this thing?" );
  }
 
};
 
// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );
 
// Now we can see that one is a prototype of the other
console.log( yourCar.name );



// PROTOTYPE CHAINING EXAMPLE 

function Shape () {
    this.name = 'shape';
    this.toString = function () {return this.name;};
}

function TwoDShape {
    this.name = '2D shape';
}

function Triangle(side, height) {
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function () {
        return this.side * this.height /2;
    };
}

//The code that performs the inheritance magic is as follows:

TwoDShape.prototype = new shape();
Triangle.prototype = new TwoDShape();


/********************************************************************************************************************** */

// ********************* EMCASCRIPT 6 ********************************* //

// ES6 TERNARY OPERATOR 

result = (condition) ? 'something' : 'somethingelse';
//is result condition true?         if not, do something else.
                                   // The two possible results come last, separated by a colon (:)

// ES6 CLASS

class Drone {
    constructor (id, name){ // automatically executes when creating new properties
        this.id = id;
        this.name = name;
    }

    fly () {
        console.log('Drone ' + this.id + 'is flying');
    }
}

let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Twirl');

drone.fly();
drone2.fly();


// ES6 CLASS GETTERS AND SETTERS 

// can be used for validation, login, or setting or getting properties. 

class Drone {
    constructor (id, name){
        this._id = id; // setup id here
    }

    // create a new property that behaves like a function 

    get id() {
        console.log('in id getter');
        return this._id + 'TEMPORARY';
    }

    // Just like a getter, a setter is used to execute a function when we set a value. 

    set id (value) {
        this._id = value; // will be set to new value once invoked below with drone.id = 'B456';
    }
}

let drone = new Drone('A123');
drone.id = 'B456'; // our setter was invoked to print new id
console.log('drone id: ' + drone.id);


// Class Inheritance 

Class Vehicle {
    constructor () {
        this.gpsEnabled = true;
    }
}

class Drone extends Vehicle {

}

// derived constructor must call super ()
class Car extends Vehicle {
    constructor (){
        super(); // special function called to make sure Vehicle constructor gets called first, requirment.
        console.log('constructing Car');
    }
}

let c = new Car();


// Class Inheritance properties

Class Vehicle {
    constructor () {
        this.gpsEnabled = true;
    }
}

class Drone extends Vehicle {

}

class Car extends Vehicle {
    constructor (){
        super(); 
        this.gpsEnabled = false; // super overides to false, takes over 
    }
}

let c = new Car();
console.log(c.gpsEnabled);



// Class Inheritance methods 


class Vehicle {
    start () {
        console.log('starting Vehicle');
    }
     /* Static method we access that within the name Vehicle itself because it's static, doesn't belong to
      an instance of vehicle, belongs directly on vehicle. 
      
      Static method on vehicle is accessible by any derived class, in this case Car as shown below when
      calling Car.getCompanyName();
      */
    static getCompanyName() {
        console.log('My Company');
    }
}

class Car extends Vehicle {
    start () {
        super.start(); // super calls first 
        console.log('starting car');
    }

    static getCompanyName() { 
        super.getCompanyName();
        console.log('My Other Company');
    }
}

let c = new Car(); // creating a new car and assigning it to C
Car.getCompanyName(); //trying to execute static method from Vehicle class, will work fine. 
