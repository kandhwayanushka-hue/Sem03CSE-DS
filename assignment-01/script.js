var questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "variable",
            "int",
            "string"
        ],
        answer: "var"
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: [
            "#",
            "//",
            "<!-- -->",
            "**"
        ],
        answer: "//"
    },

    {
        question: "Which method is used to display a message in the browser console?",
        options: [
            "print()",
            "display()",
            "console.log()",
            "message()"
        ],
        answer: "console.log()"
    },

    {
        question: "Which keyword is used to create a function in JavaScript?",
        options: [
            "function",
            "def",
            "fun",
            "method"
        ],
        answer: "function"
    },

    {
        question: "Which operator is used for strict equality in JavaScript?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        answer: "==="
    }
];

var currentQuestion = 0;
var score = 0;
var questionTime = 30;
var totalTime = questions.length * 30;
var questionTimer;
var totalTimer;

function startQuiz() {

    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;

    if (
        name == "" ||
        roll == "" ||
        email == "" ||
        course == ""
    ) {
        alert("Please enter all details.");
        return;
    }

    document.getElementById("page1").style.display = "none";
    document.getElementById("quizPage").style.display = "block";

    showQuestion();
    startTotalTimer();
}

function showQuestion() {

    var q = questions[currentQuestion];

    document.getElementById("questionNumber").innerHTML =
        currentQuestion + 1;

    document.getElementById("question").innerHTML =
        q.question;

    document.getElementById("questionTimer").innerHTML =
        30;

    var options = document.getElementById("options");

    options.innerHTML = "";

    for (var i = 0; i < q.options.length; i++) {

        var label = document.createElement("label");

        label.className = "option";

        label.innerHTML =
            '<input type="radio" name="answer" value="' +
            q.options[i] +
            '">' +
            q.options[i];

        options.appendChild(label);

        label.onclick = function() {

            var allOptions =
                document.getElementsByClassName("option");

            for (var j = 0; j < allOptions.length; j++) {
                allOptions[j].classList.remove("selected");
            }

            this.classList.add("selected");
        };
    }

    if (currentQuestion == questions.length - 1) {
        document.getElementById("nextButton").innerHTML =
            "Submit";
    } else {
        document.getElementById("nextButton").innerHTML =
            "Next";
    }

    startQuestionTimer();
}

function startQuestionTimer() {

    clearInterval(questionTimer);

    questionTime = 30;

    document.getElementById("questionTimer").innerHTML =
        questionTime;

    questionTimer = setInterval(function() {

        questionTime--;

        document.getElementById("questionTimer").innerHTML =
            questionTime;

        if (questionTime <= 0) {

            clearInterval(questionTimer);

            nextQuestion();
        }

    }, 1000);
}

function startTotalTimer() {

    totalTimer = setInterval(function() {

        totalTime--;

        var minutes = Math.floor(totalTime / 60);
        var seconds = totalTime % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("totalTimer").innerHTML =
            "0" + minutes + ":" + seconds;

        if (totalTime <= 0) {

            clearInterval(totalTimer);

            finishQuiz();
        }

    }, 1000);
}

function nextQuestion() {

    clearInterval(questionTimer);

    var selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );

    if (selected != null) {

        if (
            selected.value ==
            questions[currentQuestion].answer
        ) {
            score++;
        }
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();
    }
}

function finishQuiz() {

    clearInterval(questionTimer);
    clearInterval(totalTimer);

    var name =
        document.getElementById("name").value;

    var roll =
        document.getElementById("roll").value;

    document.getElementById("resultName").innerHTML =
        name;

    document.getElementById("resultRoll").innerHTML =
        roll;

    document.getElementById("score").innerHTML =
        score;

    document.getElementById("quizPage").style.display =
        "none";

    document.getElementById("resultPage").style.display =
        "block";
}