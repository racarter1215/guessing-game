'use strict';
var score = 0;
console.log(score);


function family(){
  var answer = prompt('What is your first name?').toUpperCase();

  
  if (answer === 'ALASTAIR') {
    alert('Hello Alastair, please give me an A on this assignment!');
  } else if (answer === 'JACOB') {
    alert('Hello Jacob, please give me an B on this assignment!');
  } else {
    alert('If this isn\'t Jacob or Alastair, you shouldn\'t be on this site :). You can stay for now, but don\'t get comfortable!');
  }
}

family();


function yesno(question, correct){

  var response = prompt(question).toUpperCase();;
  console.log('Original case:' + response);

  if (response === correct) {
    alert('Good job! You\'re paying attention!');
    score++;
  } else {
    alert('WRONG!!!!!! YOU SUCK!');
  }
}

yesno('Am I from the East Coast?' , 'YES' );
yesno('Was I in the Military' , 'YES');
yesno('Did I contract for the Department of Transportation?' , 'NO');
yesno('Did I successfully get into coding in the military or government?' , 'NO');
yesno('Do I want to become a white hat?' , 'YES');


function numberGame(question, correct) {
  var choice = prompt(question);

  for (var i = 1; i < 4; i++) {
    if (choice > correct) {
      choice = prompt('Too Big!');
    } else if (choice < correct) {
      choice = prompt('Too Small!');
    } else if (choice === correct) {
      alert('Correct!');
      score++;
      break ;
    } else {
      alert("Oops, the answer was 7!")
    }
  }
}
numberGame('Guess the number', '7');



var multiQuestion = prompt('Name my Favorite movies!').toUpperCase();
var rightAnswer = ['A BRIDGE TOO FAR' , 'KELLYS HEROES' , 'BATMAN THE DARK KNIGHT' , 'EVENT HORIZON' , 'THE LONGEST DAY' , 'THE DIRTY DOZEN'];
var attempts;


function multiAnswer(multiQuestion, rightAnswer, attempts) {
  while (attempts = 0, attempts < 6, attempts++) {
    for (var answerIndex = 0; answerIndex < rightAnswer.length; answerIndex++) {
      if (multiQuestion === rightAnswer[answerIndex]) {
        alert('Correct!');
        score++ ;
        break;
      } else {
        multiQuestion = prompt('Wrong! Guess Again!').toUpperCase();
      }
    }
  }
}

multiAnswer(multiQuestion, rightAnswer, attempts);

alert("Thanks for playing " + answer + "!");

alert('Your final score is: ' + score);

