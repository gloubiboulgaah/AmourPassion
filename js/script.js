
var audio = document.getElementById("myAudio");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    document.querySelector('.audio-player').innerText = 'Click to pause';
  } else {
    audio.pause();
    document.querySelector('.audio-player').innerText = 'Click to play';
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('img1');
  
    // Ajoutez un gestionnaire d'événements de clic
    image.addEventListener('click', function() {
      // Ajoutez ou supprime la classe "transparent" pour régler l'opacité
      image.classList.toggle('transparent');
    });
});

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

let questions = [
  new Question("Quel est l'espèce de chien préferée d'Anouck ?",["le berger allemand","le teckel","le labrador","le pitbull"],"le teckel"),
  new Question("Quel est le nom du chien d'Anouck",["Oscour ?","Osirus","Ozzy","Omar Ben-Salaah'Aid"],"ozzy"),
  new Question("Quelle est la chose que Anouck préfère faire ?",["se droguer","manger","mettre en place son régime autoritaire","dormir"],"dormir"),
  new Question("Quelle est le groupe de musique préféré d'Anouck ?",["Arctic Monkeys","Grout/Grout","So la Lune","jul"],"Arctic Monkeys"),
  new Question("Quel est le nom du futur enfant d'Anouck (avec moi) ?",["Oscar","Rachid","Ozzy","Léon"],"Léon"),
  new Question("Qui est l'amoureux d'Anouck ?",["Elliott RAMETGROUT","Eliott Tivollier","Elliott Smith","Elliott Roger"], "Elliott RAMETGROUT"),
  new Question("De quoi Anouck a le plus peur ?",["des araignées","des clowns","des noirs","du noir"],"du noir"),
  new Question("Combien Anouck a de frères et soeurs ?",["1","2","3","4"],"3"),
  new Question("Quel instrument Anouck sait joue ?",["la guitare","la batterie","le saxo","le violon"],"le saxo"),
  new Question("Qu'est-ce qui a valu à Anouck d'être connue ?",["son incroyable beauté","son imitation du cochon","sa forcce extraordinaire","son livre"],"son imitation du cochon")
];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}


const display = {
  elementShown: function(id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function() {
    endQuizHTML = `
      <h1>Quiz terminé !</h1>
      <h3 id="score"> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown("quiz", endQuizHTML);
  },
  question: function() {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function() {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function() {
        quiz.guess(guess);
        quizApp();
      }
    }
    // display choices and handle guess
    for(let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function() {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
  },
};

// Game logic
quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  } 
}
// Create Quiz
let quiz = new Quiz(questions);
quizApp();


