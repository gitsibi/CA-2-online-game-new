const questions = [
    { question: "Choose the '#FF0000' color:", options: ["red", "pink", "yellow", "blue"], correct: 0 },
    { question: "Choose the '#008000' color:", options: ["green", "pink", "yellow", "blue"], correct: 0 },
    { question: "Choose the '#FFFF00' color:", options: ["red", "green", "yellow", "blue"], correct: 2 },
    { question: "Choose the '#0000FF' color:", options: ["red", "green", "pink", "blue"], correct: 3 },
    { question: "Choose the '#00FF00' color:", options: ["red", "green", "yellow", "blue"], correct: 1 },
    { question: "Choose the '#800080' color:", options: ["purple", "green", "yellow", "blue"], correct: 0 },
    { question: "Choose the '#FFA500' color:", options: ["red", "orange", "yellow", "blue"], correct: 1 },
    { question: "Choose the '#FFC0CB' color:", options: ["red", "green", "pink", "blue"], correct: 2 },
    { question: "Choose the '#A52A2A' color:", options: ["red", "green", "yellow", "brown"], correct: 3 },
    { question: "Choose the '#808080' color:", options: ["grey", "green", "yellow", "blue"], correct: 0 }
];
let currQues = 0;
let score = 0;
const suffledQues = questions.sort(() => Math.random() - 0.5);
document.addEventListener('DOMContentLoaded', function() {
    showQues(currQues);
    document.getElementById('next-btn').addEventListener('click', function() {
        if (currQues<suffledQues.length - 1) {
            currQues++;
            showQues(currQues);
        } else {
            localStorage.setItem('score', score);
            window.location.href = 'result.html';
        }
    });
    document.getElementById('prev-btn').addEventListener('click', function() {
        if (currQues > 0) {
            currQues--;
            showQues(currQues);
        }
    });
    document.getElementById('quit-btn').addEventListener('click', function() {
        if (confirm("Are you sure you want to quit?")) {
            window.location.href = 'index.html';
        }
    });
});

function showQues(index) {
    const quesElement = document.getElementById('question');
    const optElement = document.querySelector('.options');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const feedbackElement = document.getElementById('show-answer');
    const correctAnswerElement = document.getElementById('correct-answer');
    const quesNumberElement = document.getElementById('ques-number');
    quesNumberElement.innerText = `Question ${index + 1} of ${suffledQues.length}`;
    quesElement.innerText = suffledQues[index].question;
    optElement.innerHTML = ''; 
    const optionLetters = ['a','b','c','d'];
    suffledQues[index].options.forEach((option, i) => {
        const button = document.createElement('button');
        button.className ='option';
        button.style.backgroundColor = option;
        button.dataset.correct=i===suffledQues[index].correct;
        button.innerText=`${optionLetters[i]}. ${option}`;
        button.addEventListener('click', function() {
            if (this.dataset.correct=="true") {
                score++;
                if (currQues < suffledQues.length - 1) {
                    currQues++;
                    showQues(currQues);
                } else {
                    localStorage.setItem('score', score);
                    window.location.href = 'result.html';
                }
            } else {
                feedbackElement.style.display = 'block';
                correctAnswerElement.innerText = suffledQues[index].options[suffledQues[index].correct];
            }
        });
        optElement.appendChild(button);
    });
    feedbackElement.style.display = 'none';
    prevButton.disabled = index === 0;
    nextButton.disabled = index === suffledQues.length - 1;
}
