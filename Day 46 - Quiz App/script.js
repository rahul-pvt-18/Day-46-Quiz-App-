const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    
    const currQuizData = quizData[currQuiz];

    questionEl.innerText = currQuizData.question;
    a_text.innerText = currQuizData.a;
    b_text.innerText  =currQuizData.b;
    c_text.innerText = currQuizData.c;
    d_text.innerText  =currQuizData.d;

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer; 
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click',()=>{
    
    const answer = getSelected();
    if(answer === quizData[currQuiz].correct){
        score++;
    }
    currQuiz++;

    if(currQuiz<quizData.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick = "location.reload()">Reload</button>
        `
    }

})