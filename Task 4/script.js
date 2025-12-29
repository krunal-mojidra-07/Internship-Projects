const questions = [
  {
    q: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Markup",
      "None"
    ],
    answer: 0
  },
  {
    q: "Which language styles web pages?",
    options: [
      "HTML",
      "Python",
      "CSS",
      "Java"
    ],
    answer: 2
  },
  {
    q: "Which is used for logic?",
    options: [
      "CSS",
      "HTML",
      "JavaScript",
      "SQL"
    ],
    answer: 2
  },
  {
    q: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    answer: 1
  },
  {
    q: "Which CSS property controls text size?",
    options: [
      "font-style",
      "text-size",
      "font-size",
      "text-style"
    ],
    answer: 2
  }
];


let index = 0;
let score = 0;
let time = 10;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");
const quizBox = document.getElementById("quizBox");
const scoreBox = document.getElementById("scoreBox");
const scoreText = document.getElementById("scoreText");

function loadQuestion(){
  clearInterval(timer);
  time = 10;
  timerEl.textContent = `⏱️ ${time}s`;

  progressEl.textContent = `Question ${index+1} of ${questions.length}`;
  questionEl.textContent = questions[index].q;
  optionsEl.innerHTML = "";

  questions[index].options.forEach((opt,i)=>{
    const div = document.createElement("div");
    div.className="option";
    div.textContent = opt;
    div.onclick = ()=>{
      document.querySelectorAll(".option").forEach(o=>o.classList.remove("selected"));
      div.classList.add("selected");
      div.dataset.correct = i === questions[index].answer;
    };
    optionsEl.appendChild(div);
  });

  timer = setInterval(()=>{
    time--;
    timerEl.textContent = `⏱️ ${time}s`;
    if(time===0) next();
  },1000);
}

function next(){
  const selected = document.querySelector(".option.selected");
  if(selected && selected.dataset.correct==="true") score++;

  index++;
  if(index < questions.length){
    loadQuestion();
  }else{
    quizBox.style.display="none";
    scoreBox.style.display="block";
    scoreText.textContent = `${score} / ${questions.length}`;
  }
}

document.getElementById("nextBtn").onclick = next;

loadQuestion();
