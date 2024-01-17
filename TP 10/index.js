class Question {
  constructor(question, options, answer) {
    this.question = question;
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

//////////////////// Créer une class Quizz afin de coder la logique du quizz ////////////////////
/// constructor
/// méthode pour get la question en cours
/// méthode pour les guess (incrémenter le score et la question en cours)
/// méthode pour déterminer si le quizz est terminé ou non

//////////////////// Créer un objet display afin de coder la logique de l'affichage ////////////////////

/// méthode pour afficher un élément
//****syntaxe****
// méthode : function (paramètre1, paramètre2, ...) {}

///méthode pour afficher la question (reprends la méthode ci-dessus)

///méthode pour afficher les choix

//méthode pour afficher l'avancement dans le quizz (1/4)

//méthode pour afficher ce qu'il se passe lorsque le quizz est terminé

///////////////////// Créer une fonction quizApp qui associe la logique du quizz à l'affichage ////////////////////
// quizApp = () => {};

///////////////////// enfin créer le quizz ////////////////////
// let quiz = new Quiz(questions);
// quizApp();
