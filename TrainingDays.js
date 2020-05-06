/* As a seasoned athlete, one of your 
favorite activities is running marathons. 
You use a service called Training Days that 
sends you a message for the event you signed up 
for and the days you have left to train.

Since you also code, Training Days has asked 
you to help them solve a problem: The program 
currently uses the wrong scope for its variables. 
They know this can be troublesome as their service 
evolves. In this project you will make Training 
Days more maintainable and less error-prone by fixing 
variable scopes.
 */



// The scope of `random` is too loose 


const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // The scope of `days` is too tight 
  const getTrainingDays = event => {
   let days;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
  
  const name = 'Nala';
  // The scope of `name` is too tight 
  const logEvent = (name,event) => {
    
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  
  logEvent(name, event);
  logTime(name, days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
  
  logEvent(name2, event2);
  logTime(name2, days2);
  
  

  /*TEST:

  1. What will be the output of this code?

  const roadTrip = () => {
  const destination = 'Crater Lake, Oregon';
  const snacks = 'trail mix';
  const supplies = 'sleeping bags';
};

console.log(`Next stop: ${destination}`);

ANSWER: Uncaught ReferenceError: destination is not defined

BECAUSE: Since destination is declared in the function, it is not available in the global scope.
Back



2. How many global variables are there in the following block of code?

const input = 8;
const controlVal = input / 2 + 3;

const multiplier = (number, phase) => {
  const val = number * controlVal + phase;
  console.log(val);
};

ANSWER: There are three: input, controlVal, and multiplier.

BECAUSE: Since these are defined outside of a block, they are in the global scope.



3. What is preferable: defining variables in the global scope or defining variables in the block scope?

ANSWER: Defining variables in the block scope. Variables defined in the global scope can cause unexpected behavior in our code.

BECAUSE: Global scope can make things like variable collision (using the same variable for two different purposes) more common.


4. What will be the output of this code?

let sayHello = 'Hi there';
const sayGoodbye = 'Goodbye';

const speakItalian = () => {
  sayHello = 'Ciao!';
  console.log(sayHello);
  console.log(sayGoodbye);
};

speakItalian();

ANSWER: Ciao!
Goodbye

BECAUSE: he value of sayHello is changed to 'Ciao!' within the function.


5. Which variables possess block scope?

const input = 8;
const controlVal = input / 2 + 3;

const multiplier = (number, phase) => {
  const val = number * controlVal + phase;
  console.log(val);
};

ANSWER: number, phase, val

BECAUSE: These variables are in the global scope.


6. What is a globally scoped variable?

ANSWER: A variable that is accessible to any part of the program.



7. Which best defines a variable with block scope?

A variable that is defined within a block and only available inside a block.

*/