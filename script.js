const quizData = [
    {
        question: 'where is lal killa located?',
        a: 'punjab',
        b: 'old delhi',
        c: 'tamilnadu',
        d: 'gujarat',
        correct: 'b',

    },{
         question: 'who is precedent of india ?',
         a: 'narend modi',
         b: 'amit shah',
         c: 'ramnath kovind',
         d: 'mukesh ambani',
         correct: 'c',
    
    },
    {
        question: 'who is gold medalist in olympic 2020 ?',
        a: 'p.v. sindhu',
        b: 'meri kom',
        c: 'sachin tendulkar',
        d: 'niraj chopra',
        correct: 'd',
    },
    {
        question: 'famous Autobiography of gandhiji ?',
        a: 'swamini vato',
        b: 'ram chritra manas',
        c: 'stya na proyogo',
        d: 'mari hakikat',
        correct: 'c',
    },
    {
        question:'height of "statue of unity" ?',
        a: '182',
        b: '222',
        c: '184',
        d: 'non of above !',
        correct: 'a',
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
