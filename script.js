const quizData = [
  {
    question: 'How old is Phyllis?',
    a: '10',
    b: '17',
    c: '19',
    d: '100',
    correct: 'c'
  }, {
    question: 'How old is Matt?',
    a: '20',
    b: '21',
    c: '25',
    d: '19',
    correct: 'a'
  }, {
    question: 'What is the most used programming language in 2021?',
    a: 'Java',
    b: 'Python',
    c: 'JavaScript',
    d: 'R',
    correct: 'b'
  }, {
    question: 'What is the first song of REAL A Cappella?',
    a: 'Can\'t Help Falling in Love',
    b: 'That\'s Christmas to Me',
    c: 'Mary, Did You Know?',
    d: 'Mad World',
    correct: 'd'
  }, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Json Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a'
  }, {
    question: 'What year was JavaScript launched?',
    a: '1997',
    b: '1996',
    c: '1995',
    d: 'none of the above',
    correct: 'c'
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const quesionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0; // first question
let score = 0;

loadQuiz(); // Call every time users submit

function loadQuiz() {
  deSelected();
  const currentQuizData = quizData[currentQuiz];
  quesionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deSelected() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // get the answer
  const answer = getSelected();

  // check to see if there is an answer
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    // update next question
    currentQuiz++;
    // load next question
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // Show quiz results
      quiz.innerHTML = `
      <div class="feedback">
      <h2 >You answered correctly at ${score}/${quizData.length} questions.</h2>
      <div>Feel free to find more interesting projects on <a href="https://github.com/PhyllisJu" target="_blank">my Github Page</a>!</div>
      </div>
      <button onclick="location.reload()">Reload</button>
      `;
      //alert("You finished! Welcome to my Github page for more interesting projects!");
    }
  } else {
    alert("Please select one answer!");
  }


})