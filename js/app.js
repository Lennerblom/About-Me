'use strict';

var userPoints = 0;
 
console.log('hello world');

alert('Welcome, my name is Mike and I\m going to see how well you know me, or how well you can guess.');

var user = prompt('First of all, what is your name?');

alert('Hi ' + user + '!  I am so glad you want to know me better.');

var answer = prompt('Do you think I\'m married?'  ,  'type yes or no').toLocaleLowerCase();

console.log(answer);

//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//toLowerCAse of toUpperCase
//use a confirm box?

if (answer === 'yes' || answer ==='y') {
    alert('That\s correct!  I have been married for 18 years!');
    //if it's correct give them a point
    userPoints++;
} else {
        //if it's not correct tell them to try again
        alert('Actually, I have been married for 18 years!');
    }
    alert('you have' + userPoints);

   var answer2 = prompt('I have three kids, do you think all three are boys?'); 

   if (answer === 'yes' || answer ==='y') {
    alert('Nope! ALL girls, my oldest is almost 16');
    //if it's correct give them a point
    userPoints;
} else {
        //if it's not correct tell them to try again
        alert('Your right! ALL girls, my oldest is almost 16.');
    }
    alert('you have' + userPoints++);

