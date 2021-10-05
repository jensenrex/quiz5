const questions = [
  {
    question: "How many eggs in a dozen?"
    choices: [6, 10, 12, 20]
    correctAnswer: 2,
  },
  {
    question: "How long is a piece of string?"
    choices: ["6 inches", "Dunno", "12m", "20km"]
    correctAnswer: 1,
  },
  {
    question: "How many eggs in a dozen?"
    choices: [6, 10, 12, 20]
    correctAnswer: 2,
  }
]

let index = 0

const grabQuestion = document.getElementById('question');

const addQuestion = (question) => {
  grabQuestion.innerHTML = question;
}

addQuestion(questions[index].question);