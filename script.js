const quizData = [
    {
        question: 'where is lal killa located?',
        a: 'punjab',
        b: 'old delhi',
        c: 'tamilnadu',
        d: 'gujarat',
        correct: 'b',

    },{
         question: 'what is the best programming language in 2021?',
         a: 'java',
         b: 'c',
         c: 'python',
         d: 'java script',
         correct: 'd',
    
    },
    {
        question: 'who is former precedent of u.s. ?',
        a: 'florin pop',
        b: 'donald trump',
        c: 'jo - biden',
        d: 'shivam kachhadiya',
        correct: 'b',
    },
    {
        question: 'what is html stand for?',
        a: 'Hyper text markup language',
        b: 'high text mark loop',
        c: 'hyper text margin language',
        d: 'hyper text markup location',
        correct: 'a',
    },
    {
        question:'what year javascript launch??',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'non of above !',
        correct: 'd',
    }
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;



loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

  
}

function getSelected() {
   

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;

            
        }
       
        

    });
    return answer;

}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
   

    const answer = getSelected();
   
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();

    } else {
        quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length} question.</h2>`;
    }

}

});
