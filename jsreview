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


// ES6 TERNARY OPERATOR 

result = (condition) ? 'something' : 'somethingelse';
//is result condition true?         if not, do something else.
                                   // The two possible results come last, separated by a colon (:).
