// Chap 21   CHANGING CASE


// Q1

var user = "AlloWER";
var user = user.toUpperCase();
console.log(user);


// Q-2

var x = "HELLO WORLD";
x = x.toLowerCase();
console.log (x);


// Q-3


var x = "HELLO WORLD";
x = x.toUpperCase();
console.log (x);


// Q-4

var str = "UnIVersIty";
var newstr = str.toLowerCase();
console.log (newstr);   


// Q-5

var arr = [ "HELLO", "WORLD" ];
var newstr = arr [0].toLowerCase();
console.log (newstr);


// Q-6



var str = "Hello world";
var newstr = str.toUpperCase();
console.log (newstr);  


// Q-7

var city = "kaRaCHi";
var firstchar = city.slice (0,1).toUpperCase();
var remainChar = city.slice (1,).toLowerCase();
var complete = firstchar + remainChar;

console.log (complete);




// chap 22 to 25 STRINGS

// Q-1

var sameWord = "caption";
var sliceWord = sameWord.slice (1,3);

console.log (sliceWord);


// Q-2

var sameWord = "caption";
var countWord = sameWord.length;
 
console.log (countWord);


// Q-3

var animal = "elephant";
var slice = animal.slice (3,7);
console.log (slice);


// Q-4


var sameWord = "calculator";
var countWord = sameWord.length;
 
console.log (countWord);


// Q-5

var text = "calculate";
var charCount = text.length;
console.log (charCount);

var slice = text.slice ( 1,-3 );
console.log (slice);


// Q-6


var text = "To be or not be.."
var index = text.indexOf ("be");
console.log (index);


// Q-7

var text = "To be or not be.."
var index = text.lastIndexOf ("be");
console.log (index);


// Q-8

var text = "I'II go to the store, then I'II go again ";
var index = text.lastIndexOf ("go");
console.log (index);


// Q-9

var string = "Hello world";
var indexNum = 4;

if (indexNum >= 0 && indexNum < string.length) {
    console.log ("Index exists in strings");


} else {
    console.log ("Index out of range");
}



// Q-10

var str = "abcde";
var char = str.charAt (2);

console.log (char);


// Q 11

var text = "This is a sample text";
var cha = text.charAt (9);

console.log (cha);


// Q-12

var str = "Hello world";
var x = str.charAt (str.length -1);
console.log (x);


// Q 13

var input = "Hello world";
var char = input.charAt (4);

console.log (char);












