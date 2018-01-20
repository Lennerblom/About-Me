'use strict';

var userPoints = 0;

console.log('hello world');

alert('Welcome, my name is Mike and I\'m going to see how well you know me, or how well you can guess.');

var user = prompt('First of all, what is your name?');

alert('Hi ' + user + '!  I\'m gonna ask you five questions and give you a point for each correct one.');

var answer = prompt('Do you think I\'m married?'  ,  'type yes or no').toLocaleLowerCase();

console.log(answer);

//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//toLowerCAse or toUpperCase
//use a confirm box?

if (answer === 'yes' || answer ==='y') {
  alert('That\'s correct!  I have been married for 18 years!');
  //if it's correct give them a point
  userPoints++;
} else {
  //if it's not correct tell them to try again
  alert('Actually, I have been married for 18 years!');
}
alert('you have ' + userPoints + ' point');

var answer2 = prompt('I have three kids, do you think all three are boys?').toLocaleLowerCase();

console.log(answer2);

if (answer2 === 'yes' || answer2 ==='y') {
  alert('Nope! ALL girls, my oldest is almost 16');
  //if it's correct give them a point

} else {
  //if it's not correct tell them to try again
  alert('Your right! ALL girls, my oldest is almost 16.');
  userPoints++;
}
alert('you have ' + userPoints + ' points');

var answer3 = prompt('Do you think I own any pets, most people do?').toLocaleLowerCase();


console.log(answer3);

if (answer3 === 'yes' || answer3 === 'y') {
  alert('That\'s right, I have two dogs named Lucy and Masey.');
  userPoints++;
} else {
  alert('Dogs. I have two dogs named Lucy and Masey');
}
alert('You got ' + userPoints + ' points');

var answer4 = prompt('Of the four main meal types: Breakfast, Lunch, Dinner, and Dessert.  Do you think dessert is my favorite?').toLocaleLowerCase();

console.log(answer4);

if (answer4 === 'yes' || answer4 === 'y') {
  alert('No, fooled you.  Breakfast is the best!');

} else {
  alert('Correct!  It\'s breakfast.');
  userPoints++;
}
alert('You got ' + userPoints + ' points');

var answer5 = prompt('Every morning I have to wake up at 4:00 am to get ready for work. Do you think this is true?').toLocaleLowerCase();

console.log(answer5);

if (answer5 === 'yes' || answer5 === 'y') {
  alert('No, actually I leave the house at 4:00 am.  I get up at 3:15!');     
} else {
  alert('Correct!  I actually leave the house at 4:00 am.  I get up at 3:15!');
  userPoints++;
}
alert('You got ' + userPoints + ' points');

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

alert('You got ' + userPoints + ' points');

document.write('You got ' + userPoints + ' points.');