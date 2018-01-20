/*'use strict';

var userPoints = 0;

console.log('hello world');

alert('Welcome, my name is Mike and I\'m going to see how well you know me, or how well you can guess.');

var user = prompt('First of all, what is your name?');

alert('Hi ' + user + '!  I\'m gonna ask you five questions and give you a point for each correct one.');

var questions = ['Do you think I\'m married?', 'I have three kids, do you think all three are boys?', 'Do you think I own any pets, most people do?', 'Of the four main meal types: Breakfast, Lunch, Dinner, and Dessert.  Do you think dessert is my favorite?', 'Every morning I have to wake up at 4:00 am to get ready for work. Do you think this is true?'];

var answers = ['yes', 'no' , 'yes', 'no', 'no'];


function married(){
  var answer = prompt(questions[0]).toLowerCase();
  console.log(answer);
  if (answer === answers[0]) {
    alert('That\'s correct!  I have been married for 18 years!');
    userPoints++;
  } else {
    alert('Actually, I have been married for 18 years!');
  }
  alert('you have ' + userPoints + ' point');
}

married();

function kids(){
  var answer2 = prompt(questions[1]).toLowerCase();
  console.log(answer2);

  if (answer2 === answers[1]) {
    alert('Your right! ALL girls, my oldest is almost 16.');
    userPoints++;
  } else {
    alert('Nope! ALL girls, my oldest is almost 16');
  }
  alert('you have ' + userPoints + ' points');
}
kids();

function pets(){
  var answer3 = prompt(questions[2]).toLowerCase();
  console.log(answer3);

  if (answer3 === answers[2]) {
    alert('That\'s right, I have two dogs named Lucy and Masey.');
    userPoints++;
  } else {
    alert('Dogs. I have two dogs named Lucy and Masey');
  }
  alert('You got ' + userPoints + ' points');
}
pets();

function meal(){
  var answer4 = prompt(questions[3]).toLowerCase();

  console.log(answer4);

  if (answer4 === answers[3]) {
    alert('Correct!  It\'s breakfast.');
    userPoints++;
  } else {
    alert('No, fooled you.  Breakfast is the best!');
  }
  alert('You got ' + userPoints + ' points');
}
meal();

function wakeUp(){
  var answer5 = prompt(questions[4]).toLowerCase();
  console.log(answer5);

  if (answer5 === answers[4]) {
    alert('Correct!  I actually leave the house at 4:00 am.  I get up at 3:15!');
    userPoints++;
  } else {
    alert('No, actually I leave the house at 4:00 am.  I get up at 3:15!'); 
  }
  alert('You got ' + userPoints + ' points');
}
wakeUp();

function numGuess(){
  var i = 0;
  while (i < 4) {
    var answer6 = prompt('Guess what number I’m thinking of between 1 and 5?');
    console.log('Guess a number' + answer6);
    if (answer6 === '3') {
      alert('That\'s the number!  Good guess.');
      i += 4;
      userPoints ++;
    } else if (answer6 < 3) {
      alert('No, guess again, a little higher.');
    } else if (answer6 > 3) {
      alert('No, guess again, a little lower');
    }
    i++;
  }
}
numGuess();

function stateGuess(){
  var favState = ['MONTANA','OREGON','CALIFORNIA','GEORGIA', 'UTAH','HAWAII'];
  var attempts = 0;
  do {
    var answer7 = prompt('Besides Washington, guess one of my favorite States?').toUpperCase();
    console.log('favorite state: ' + answer7);
    if (favState.includes(answer7)) {
      alert('Yes, your right, ' + answer7 + ' is one of my favorite states. These are all my favorite states: ' + favState.toString());
      userPoints++;
      break;
    } else {
      alert('No ' + answer7 + ' is not one of my favorite states, try again.');
      attempts++;
    }
  } while (attempts <= favState.length);
}
alert('You got ' + userPoints + ' points');

stateGuess();

document.write('You got ' + userPoints + ' points.');


/*var j = 0;
while (j < 4) {
  var answer7 = prompt('Besides Washington, guess one of my favorite States?').toLocaleLowerCase();
  console.log('favorite state' + answer7);
  if (answer7 <= favState.length) {
    alert('Yes, your right. Montana, Oregon, California, and Georgia are my favorite states');
    i += 4;
    userPoints++;
  } else if (answer7 !== favState) {
    alert('No guess again');
  }
  j++;
}
*/
