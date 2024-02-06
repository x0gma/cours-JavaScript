class Question {
  constructor(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
  }
  isCorrectAnswer(option) {
    return option === this.answer;
  }
}

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.questionIndex];
  }

  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }

    this.questionIndex++;
  }

  hasEnded() {
    return this.questionIndex >= this.questions.length;
  }
}

const display = {
  showElement: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },

  question: function () {
    this.showElement("question", quiz.getCurrentQuestion().text);
  },

  options: function () {
    let options = quiz.getCurrentQuestion().options;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      };
    };

    for (i = 0; i < options.length; i++) {
      this.showElement("guess" + i, options[i]);
      guessHandler("guess" + i, options[i]);
    }
  },

  progress: function () {
    this.showElement(
      "progress",
      `${quiz.questionIndex} / ${quiz.questions.length} `
    );
  },

  endQuiz: function () {
    let endQuizHTML = `
    <h1>Quizz terminé !</h1>
    <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
    `;
    this.showElement("quiz", endQuizHTML);
  },
};

quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.options();
    display.progress();
  }
};

let quiz = new Quiz(questions);
quizApp();
