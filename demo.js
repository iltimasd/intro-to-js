require('jquery');
//single line comment

/*
this
is
a
multi
line
comment
*/

/* letiables are ways to store value/data 
letiables are declared with the keyword `let` */

//undefined
let thisIsUndefined;

/* otherwise let can be declared with a value 
there are multiple data types */

// = assign a value
// semi colon ends a statement

let thisIsANumber = 5;
let disAString = 'use single or double quotes, but pick one'; //i like single quotes so i can use double quotes
let trueOrFalseBOO = true; //this is a boolean
let objectsAreFun = {
    key: "value", //remember ur commas!!!!!!
    anotherKey : 4.20,
    lastKey: true
};

//your BFF
console.log(objectsAreFun.anotherKey);

let beverages = [
    "coffee",
    "tea",
    "juice"
  ];


// console.log(beverages[0]);


// Create an object representing yourself that lists your first name, last name, age, and dream job.
// Assign each object property to a letiable.
// Create an array listing five types of animals.
// Assign your favorite animal to a letiable.
// Divide a number by a string and print the result (which should be NaN)
// Write five true or false statements as comments, and apply them as Booleans to letiables.

let ptII = false;

if(ptII){

// = is assign
// == is compare, === is the better compare 
// <
// >
// >=
// <=

console.log(5===5);


//conditionals

let doorIsLocked = true; // the door is locked

if (doorIsLocked) {
  document.write("The door is locked!");
} else {
  document.write("The door is not locked. You open the door.");
}

let hasKey = true; // you have the key.

if (doorIsLocked && hasKey) {
  // the door is locked, and you have the key
  document.write("You unlocked the door! You open the door.");
} else if (doorIsLocked && !hasKey) {
  // the door is locked, and you don't have the key (!hasKey is the same as hasKey === false)
  document.write("The door is locked.");
} else {
  document.write("The door is not locked. You open the door.");
}

}

//finally, this is a function
//it allows you to extrapolate a block of code in a task

//keyword    name   params
function myFunction(p1, p2) {
    let hidden = "you cant see me";
    //gives back something
    return p1 * p2;              // The function returns the product of p1 and p2
}

//to invoke/call functions use the name of its function, and any params if needed

if(false){

console.log(myFunction(3,7));

console.log(hidden);

let rows = 6;
let columns = 9;
let area = myFunction(rows,columns);
console.log(area);
document.write(myFunction);
}
//JQUERY!!!
    //nice because syntax is "simple"
    //nice bc JS used to REALLY suck, it paved the way
    //not nice, bc in a mobile-first world is too "expensive"
    //everything you want is in ES6
    //it was innovative, but not so much with ReactJS
    //incentives bad coding habits
    //in the end its a tool in your toolkit.
        //one of my goto sketching js tools

        // https://api.jquery.com/category/selectors/
        // https://api.jquery.com/category/events/
        // http://api.jquery.com/category/effects/
//how to link to jQuery
    //before closing body tag add this
    //<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    
    //~~callbacks~~

    $(document).ready(function() {
        // all custom jQuery will go here

        $("#trigger").click();
        $("#trigger").click(
            function(){
                $("#demo").html("Hello, World!");
            }
        );
    });