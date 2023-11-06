document.addEventListener("DOMContentLoaded", function() {
    const startQuizButton = document.getElementById("start-quiz");
    const nextQuestionButtons = document.querySelectorAll(".next-question-button");
    const resultCard = document.querySelector(".result-card");
    const quizCards = document.querySelectorAll(".question-card");
    const userAnswers = [];
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    const quizCompletedSound = document.getElementById("quiz-completed-sound");

    const questions = [
        {
            image: "paris.jpg",
            title: "What city is this in the photo?",
            options: ["Paris", "Venice", "Rome", "Moscow"],
            correctOption: "Paris"
        },
        {
            image: "venice.jpg",
            title: "What city is this in the photo?",
            options: ["Paris", "Venice", "Rome", "Moscow"],
            correctOption: "Venice"
        },
        {
            image: "rome.jpg",
            title: "What city is this in the photo?",
            options: ["Berlin", "Vilnius", "Rome", "Saint-Petersburg"],
            correctOption: "Rome"
        },
        {
            image: "moscow.jpg",
            title: "What city is this in the photo?",
            options: ["Ottawa", "Lisbon", "Moscow", "Madrid"],
            correctOption: "Moscow"
        },
        {
            image: "new_york.jpg",
            title: "What city is this in the photo?",
            options: ["Rome", "Riga", "Helsinki", "New-York"],
            correctOption: "New-York"
        },
        {
            image: "copenhagen.jpg",
            title: "What city is this in the photo?",
            options: ["Warsaw", "Jelgava", "Copenhagen", "Ottawa"],
            correctOption: "Copenhagen"
        },
        {
            image: "Almaty.jpg",
            title: "What city is this in the photo?",
            options: ["Zurich", "Almaty", "Copenhagen", "Paris"],
            correctOption: "Almaty"
        },
        {
            image: "Tokyo.jpg",
            title: "What city is this in the photo?",
            options: ["Hamburg", "Beijing", "Florence", "Tokyo"],
            correctOption: "Tokyo"
        },
        {
            image: "sidney.jpg",
            title: "What city is this in the photo?",
            options: ["Sidney", "Berlin", "San Francisco", "Rio de Janeiro"],
            correctOption: "Sidney"
        },
        {
            image: "London.jpg",
            title: "What city is this in the photo?",
            options: ["Manchester", "Luxembourg", "Rome", "Leicester"],
            correctOption: "London"
        },

    ];

    startQuizButton.addEventListener("click", function() {
        quizCards[currentQuestionIndex].style.display = "block";
        startQuizButton.style.display = "none";
    });

    nextQuestionButtons.forEach(button => {
        button.addEventListener("click", function() {
            const selectedOption = quizCards[currentQuestionIndex].querySelector("input[type=radio]:checked");
            if (selectedOption) {
                const userAnswer = selectedOption.value;
                const correctAnswer = questions[currentQuestionIndex].correctOption;

                userAnswers.push({ question: currentQuestionIndex + 1, answer: userAnswer });
                if (userAnswer === correctAnswer) {
                    quizCompletedSound.play();
                    correctAnswers++;
                }
            }

            quizCards[currentQuestionIndex].style.display = "none";
            currentQuestionIndex++;

            if (currentQuestionIndex < quizCards.length) {
                quizCards[currentQuestionIndex].style.display = "block";
            } else {
                showResults();
            }
        });
    });

    function showResults() {
        resultCard.style.display = "block";
        resultCard.querySelector("#correct-answers").textContent = correctAnswers;
        displayUserAnswers();
    }

    function displayUserAnswers() {
        const userAnswersList = document.getElementById("user-answers");
        userAnswers.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `Question ${item.question}: Your answer - ${item.answer}`;
            userAnswersList.appendChild(li);
        });
    }
    function showResults() {
        resultCard.style.display = "block";
        resultCard.querySelector("#correct-answers").textContent = correctAnswers;
        displayUserAnswers();
        quizCompletedSound.play();
    }

});
