let currentQuestion = 0;
const totalQuestions = 6;
let answers = [];

const questions = [
    "Apakah Anda merasa lelah dan mengantuk, kurang berenergi dan berstamina?",
    "Apakah Anda sulit berkonsentrasi atau memutuskan sesuatu?",
    "Apakah Anda sering merasa cemas atau khawatir tanpa alasan yang jelas?",
    "Apakah Anda mengalami perubahan berat badan yang signifikan dalam beberapa bulan terakhir?",
    "Apakah Anda memiliki perubahan tidur seperti sulit tidur atau tidur terlalu banyak?",
    "Apakah Anda kehilangan minat atau kegembiraan dalam aktivitas yang biasanya Anda nikmati?",
];

function startTest() {
    document.querySelector('.pembuka').style.display = 'none';
    document.querySelector('.test').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    document.getElementById('question').innerText = questions[currentQuestion];
    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressLabel = document.getElementById('progress-label');
    const progress = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    progressLabel.innerText = `${currentQuestion + 1} dari ${totalQuestions} selesai`;
}

function nextQuestion() {
    const answerToggle = document.getElementById('answerToggle');
    answers.push(answerToggle.checked);
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.querySelector('.result-container');
    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `${calculateResult()}`;
    resultContainer.style.display = 'block';
    document.querySelector('.test').style.display = 'none';
}

function calculateResult() {
    const totalYesCount = answers.filter(answer => answer).length;
    let result = "";
    if (totalYesCount >= totalQuestions / 2) {
        result = "Anda mungkin mengalami beberapa gejala kesehatan mental. Sebaiknya konsultasikan dengan profesional kesehatan.";
    } else {
        result = "Tampaknya Anda memiliki kesehatan mental yang baik. Tetap menjaga kesehatan dan kebahagiaan Anda!";
    }

    return result;
}