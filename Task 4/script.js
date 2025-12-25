const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Trainer Marking Language",
        b: "Hyper Text Markup Language",
        c: "High Text Machine Language",
        d: "Hyper Tool Markup Language",
        correct: "b"
    },
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "JQuery",
        c: "CSS",
        d: "XML",
        correct: "c"
    },
    {
        question: "Which is a scripting language?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("optA").innerText = q.a;
    document.getElementById("optB").innerText = q.b;
    document.getElementById("optC").innerText = q.c;
    document.getElementById("optD").innerText = q.d;
}

function nextQuestion() {
    const answers = document.getElementsByName("answer");
    let selected;

    answers.forEach(ans => {
        if (ans.checked) selected = ans.value;
        ans.checked = false;
    });

    if (selected === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            `<h2>Quiz Completed</h2>
             <p>Your Score: ${score} / ${quizData.length}</p>`;
    }
}

loadQuestion();
