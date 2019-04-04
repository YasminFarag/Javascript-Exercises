// console.log('this is an exercise in console logging');


// var myValue = ('This is the value');
// console.log(myValue);


// var firstName = ('Yasmin');
// var lastNam = ('Farag');
// console.log(firstName, lastNam);

// var firstName = ('claudia');
// var cityName = ('NY');
// var jobTitle = ('doctor');
// var age = ('35');
// var car = ('Mercedes');
// var children = ('3');

// console.log(firstName, cityName, jobTitle, age, car, children);



// var familyName = ('John Smith');
// var age = ('43');
// var jobTitle = ('teacher');
// var cityName = ('berlin');
// var status = ('married');
// console.log(familyName, 'is a ' + age + ' years old ', 'who lives in ' + cityName, ' he is ' + status);

// // data types exercises

// //1

// var firstString = 'yasminfarag';
// console.log(firstString);

// //2
// console.log(firstString[2], firstString[6]);


// // 3 : 6

// var name = ('John');
// var age = 30;
// var year = 2020;
// console.log(name + ' is ' + age + ' in ' + year);


// // 7,8

// let isMarried = 'true';
// console.log(name + ' is married: ' + isMarried);


// // 9

// let programmingLanguage = 'JavaScript';
// let isFun = 'true';
// console.log(programmingLanguage + ' is fun: ' + isFun);

// // 10 

// console.log(programmingLanguage[0], programmingLanguage[4]);


// // 11

// console.log(programmingLanguage.length);




// /*  Data Types Exercises P2 */

// // 1

// let length = 16.78;
// let lastName = "Johnson";
// let carType = "";
// let isOpen = true;

// console.log(typeof length);
// console.log(typeof lastName);
// console.log(typeof carType);
// console.log(typeof isOpen);





// // 2

// let ageMark = '35';
// let ageJohn = 45;

// console.log(typeof ageMark);
// console.log(typeof ageJohn);

// // 3

// let bigAge = true;
// /* console.log(bigAge); */
// console.log(Boolean(bigAge));



// // 4

// let x;
// console.log(typeof x);



// // 5
// x = 'data';
// console.log(typeof x);

// // 6

// x = 'data';
// console.log(x[3]);


// // 7

// x = 'data';
// console.log(typeof x.length);

// // 8

// let a = 12;
// let b = 25;
// let c = 33;

// console.log((a == b));
// console.log((a == c));
// console.log((a == a));
// console.log((b == a));
// console.log((b == c));
// console.log((b == b));
// console.log((c == a));
// console.log((c == b));
// console.log((c == c));
// console.log(typeof (a == b));


// // 9

// /* infinity is a type of a number */


// // 10 


// let myData = 'file';

// console.log((isNaN(myData)));

// // 11

// console.log(typeof isNaN(myData));


// //

// let yourName =' francesca ';
// let trimmedName= yourName.trim();
// let firstChar= trimmedName[0];
// let lastChar= trimmedName[8];
// let firstThreeChar= trimmedName.substring(0,3)
// console.log( `hello ${trimmedName} your name is ${trimmedName.length} characters long, the first letter of your name is ${firstChar} ,the last is ${lastChar
// }  if i wanted to be funny, i would call you ${firstThreeChar}shmoo`);





// // STRING EXERCISE



// // 1

// let firstVariable="I can walk in the park all day!"
// console.log(firstVariable.substring(18,22));


// // 2

// let programming="JavaScript";

// console.log(programming.substring(3,6));


// // 3

// let stri ="Hello World";


// console.log(stri.toUpperCase());


// // 4

// let stri2= "Hello Earthling";

// console.log(stri2.toLowerCase());

// // 5

// let shoe="nice shoes";

// console.log(shoe.includes('n'));
// console.log(shoe.includes('l'));

// // 6

// let concate="niceshoes";

// console.log(`${concate .substring(0,1)}${concate}${concate.substring(0,1)}`);

// // 7

// let newOne= "HelloEarthling";

// console.log('abc' + newOne + 'efg');


// // 8

// let secondVar ='im there';

// console.log(secondVar.toUpperCase());
// console.log(secondVar.includes('Java'));

// // 9

// let thirdVar= "JavaScript";
// console.log(`${thirdVar.charAt(9)}${thirdVar.substring(1, thirdVar.length-1)}${thirdVar.charAt(0)}`);


// // 10

// let myName= 'yasmin';
// let myJob= 'student';
// let myAddress='berlin';

// console.log('My Name is ' + myName + '.' + 'i live in ' + myAddress + ' and im a ' + myJob);

// // 11

// let fifth="the quick brown fox" ;

// console.log(fifth.substring(0,1).toUpperCase() + fifth.substring(1).toLowerCase());





//////////////////////////////////////////////


// Operators Exercises


// 1

// let x = 5;
// let y = 10;


// console.log(x , y);
// console.log(y - x);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y );


// // 5


// let z = 10;

// let resultOne = (x * y) / z;
// console.log(resultOne);


// // 6

// let a = 15;
// let b = 9;
// let remainder = (a % b);
// console.log(remainder);

// // 7

// var c = 20;
// var resultTwo = (a + b) * c;
// console.log(resultTwo);

// // 8

// // console.log(++a);

// // 9

// // console.log(--b);

// // 10 

// let d = ( b - a );
// console.log(d);
// console.log(d + c);


// // 11

// console.log(resultOne % resultTwo);




/////////////////////////////////////////////////////



var per= 17;
var per1= 30;
var percentage = per / per1
console.log( percentage + "%");


// Average

var Aver1 = 8;
var Aver2 = 6;
var Aver3 = 5;
var Aver4 = 9;
var Aver5 = 8;
var Aver6 = 2;
var Aver7 = 1;
var Aver8 = 8.5;
var Aver9 = 7;
var Aver10 = 4;

var lastResult = Aver1 + Aver2 + Aver3 + Aver4 + Aver5 + Aver6 +Aver7 + Aver8 + Aver9 + Aver10;
console.log(lastResult / 10);  // 5.85


// 

var firstTest= 75;
var secondTest= 70;
var thirdTest= 85;
var fourthTest = 90;
var fifthTest= 100;

var allTests= firstTest + secondTest + thirdTest + fourthTest + fifthTest;
var sixthTest= 85 * 6;
console.log(sixthTest - allTests);


//

var assesmentAver = 78 ;
var minAver = 78 * 8 ;
var finalAver = 80 * 9;
console.log(finalAver - minAver ); // 96


//


let firstPerimeter = 5;
let secondPerimeter = 6;
let thirdPerimeter = 7;

let trianglePer = firstPerimeter + secondPerimeter + thirdPerimeter;
console.log(trianglePer);

let semipere = (trianglePer/2);

console.log(semipere);

let area = Math.sqrt(semipere*(semipere-firstPerimeter)*(semipere-secondPerimeter)*(semipere-thirdPerimeter)
);
console.log(area);






var firstBill = 22.35;
var firstTip = (firstBill * 10) / 100 ;
var finalBill1 = firstBill + firstTip;
console.log(finalBill1); // 24.585

var secondBill = 26.67;
var secondTip = (secondBill * 15) / 100 ;
var finalBill2 = secondBill + secondTip;
console.log(finalBill2); // 30.6705


var thirdBill = 35.92;
var thirdTip = (thirdBill * 20 ) / 100;
var finalBill3 = thirdBill + thirdTip ;
console.log(finalBill3); // 43.104



var ticketsCost = 6450;
var ticketValue = 15;
var ticketsNum= ticketsCost / ticketValue;
console.log(ticketsNum);


//

let weeklyRate= 500;
let monthlyRate = weeklyRate * 4;
let annualRate = monthlyRate * 12;
console.log(annualRate);




/////////////////////////////////////////////////


// Comparison Operators Exercises


// let xx = 20;
// let yy = 30;
// let zz = 5;



// console.log(xx == yy);
// console.log(!(xx == yy));
// console.log(xx > yy);
// console.log(xx <= yy);
// console.log(yy > xx);

// // 6
// let zx = xx * zz;
// let zy = zz + yy; 


// console.log(zx > zy); //

// // 7
// console.log((xx -zz) < (yy / zz));

// // 8

// console.log(zz == xx == yy);

// // 9

// console.log((xx % zz) == (yy % zz));

// // 10

// console.log((zz + xx) > (yy - zz));
// console.log((zz + xx) == (yy - zz));


//////////////////////////////////////////////////////////////

// Logical Operators Exercises

let aa = 'true';
let bb = 'false';

// 1
console.log(aa && bb);

// 2
console.log(aa || bb);

//3
console.log(!(aa && bb));
// 4

let x = 20;
let y = 30;
let z = 5;

// 5
console.log((x > z) && (x > y));

// 6

console.log(!(x == y));

// 7

console.log((z < y) || (z > x));


// 8

console.log((x == z) || !(x == y));

// 9

console.log((x >= 10) && (y <= 10));

// 10 

console.log(((x * z) <= 100) || ((x * y) >= 100));




////////////////////////////////


// Ternary Worksheet



// 1
var age = 16;
let canDrive = (age > 18) ? 'you can drive' : 'no, too young';

console.log(canDrive)

// 2

var speed= 120;

let speedCheck =(speed < 130) ? 'You re driving below the speed limit' : 'you re going too fast!';
console.log(speedCheck);
// let speedCheck =(speed > 130) ? 'You re driving below the speed limit' : 'youre going too fast!';
//  console.log(speedCheck);


// 3

var agee = 19;
var personAge = (agee < 21) ? 'serve juice' : 'serve wine';
console.log(personAge);

// 4

var newStudent= true;
var isStudent = (newStudent == true) ? 'Ticket costs €5,00' : 'Ticket costs €12,00';
console.log(isStudent);




// 5

var time= 15.00;
var timeOfDay = (time <= 11) ? 'Good Morning' : 'Good Evening';
console.log(timeOfDay);

























