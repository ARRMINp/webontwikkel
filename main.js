// main.js
const questions = [
    {
        question: "Wat is de hoofdstad van Nederland?",
        answers: ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht"],
        correctAnswer: "Amsterdam"
    },
    {
        question: "Welke kleur heeft de lucht op een heldere dag?",
        answers: ["Blauw", "Groen", "Rood", "Geel"],
        correctAnswer: "Blauw"
    },
    {
        question: "Hoeveel continenten zijn er?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: "7"
    }
];

let currentQuestionIndex = 0;

function startQuiz() {
    // Verberg het startscherm en toon het quiz-scherm
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("nextButton").style.display = "block";

    // Toon de eerste vraag
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const question = questions[index];
    document.getElementById('question-container').textContent = question.question;
    
    const answerContainer = document.getElementById('answer-container');
    answerContainer.innerHTML = '';
    
    question.answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer;
        answerContainer.appendChild(li);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert("Quiz afgerond!");
        // Hier kun je de quiz resetten of naar een einde-scherm gaan
    }
}
