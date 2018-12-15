//Array hold data in one variable

//Initialize new array

let names = ['John', 'Mark', 'Jane']  //Array of names, three elements
let years = new Array(1990, 1969, 1948);  //Far more used (elements 0,1,2)


console.log(names[0]); // 
console.log(names.lenght); //how many elements are there


//Mutate Array data

names[1] = 'Ben'; //ARRAY
names[names.length] = 'Mary';
console.log(names);

//Different data types

let john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); //Add something new to array on last place
john.unshift('Mr. '); //Add element to array on first place
john.pop(); //Remove last element from array
john.shift(); //Remove first element from array

john.indexOf(john);
console.log(john.indexOf(1990)); //Shows on which possition is that element

let isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);



