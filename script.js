document.addEventListener("DOMContentLoaded", () => { // Ensures the DOM is fully loaded before executing
    const quizData = [
      {
        question: "1. What does \"CPU\" stand for in computer terminology?",
        a: "Central Process Unit",
        b: "Central Processing Unit",
        c: "Computer Personal Unit",
        d: "Central Processor Unit",
        correct: "b",
      },
      {
        question: "2. Which of the following is an input device?",
        a: "Monitor",
        b: "Printer",
        c: "Scanner",
        d: "Speaker",
        correct: "c",
      },
      {
        question: "3. What is the main function of the computer's RAM?",
        a: "To store data permanently",
        b: "To control input devices",
        c: "To hold data temporarily for processing",
        d: "To provide internet connectivity",
        correct: "c",
      },
      {
        question: "4. Which operating system is developed by Microsoft?",
        a: "Linux",
        b: "Android",
        c: "Windows",
        d: "iOS",
        correct: "c",
      },
      {
        question: "5. What does \"http\" stand for in a website address?",
        a: "HyperText Transfer Protocol",
        b: "HyperText Transmission Protocol",
        c: "HyperTransfer Text Protocol",
        d: "HyperText Transfer Process",
        correct: "a",
      },
      {
        question: "6. What is the purpose of a web browser?",
        a: "To create websites",
        b: "To display web pages",
        c: "To connect computers in a network",
        d: "To store web pages",
        correct: "b",
      },
      {
        question: "7. Which of the following is not a programming language?",
        a: "Python",
        b: "Java",
        c: "HTML",
        d: "Excel",
        correct: "d",
      },
      {
        question: "8. What is phishing?",
        a: "A type of computer virus",
        b: "A tool to increase internet speed",
        c: "A method of fraudulently obtaining personal information",
        d: "A game",
        correct: "c",
      },
      {
        question: "9. What file extension is commonly used for Microsoft Word documents?",
        a: ".xls",
        b: ".docx",
        c: ".ppt",
        d: ".mp3",
        correct: "b",
      },
      {
        question: "10. What is a GPU?",
        a: "Global Processing Unit",
        b: "Graphics Processing Unit",
        c: "General Processing Unit",
        d: "Graphical Performance Unit",
        correct: "b",
      }
    ];
  
    const quiz = document.getElementById('quiz');
    const startQuizContainer = document.getElementById('start-quiz');
    const answerEls = document.querySelectorAll('.answer');
    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBtn = document.getElementById('submit');
    let userNameInput = document.getElementById('username');
    let currentQuiz = 0;
    let score = 0;
  
    function startQuiz() {
      let userName = userNameInput.value.trim();
      if (userName) {
        startQuizContainer.style.display = 'none';
        quiz.style.display = 'block';
        loadQuiz();
      } else {
        alert("Please enter your name to start the quiz.");
      }
    }
  
    function loadQuiz() {
      deselectAnswers();
  
      const currentQuizData = quizData[currentQuiz];
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
    }
  
    function deselectAnswers() {
      answerEls.forEach(answerEl => {
        answerEl.checked = false;
      });
    }
  
    function getSelected() {
      let answer = undefined;
      answerEls.forEach(answerEl => {
        if(answerEl.checked) {
          answer = answerEl.id;
        }
      });
      return answer;
    }
  
    submitBtn.addEventListener('click', () => {
      const answer = getSelected();
  
      if(answer) {
        if(answer === quizData[currentQuiz].correct) {
          score++;
        }
  
        currentQuiz++;
        if(currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          let userName = userNameInput.value;
          quiz.innerHTML = `
            <h2>${userName}, you answered correctly ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Restart Quiz</button>
          `;
        }
      }
    });
  
    document.querySelector('#start-quiz button').addEventListener('click', startQuiz);
  });