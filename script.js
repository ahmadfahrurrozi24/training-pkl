const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submitBtn");
const resultElement = document.getElementById("result");

const quizData = [
  {
    question: "Apa ibukota Indonesia?",
    options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
    answer: "Jakarta",
  },
  {
    question: "Berapa hasil dari 5 x 2?",
    options: ["10", "8", "5", "6"],
    answer: "10",
  },
  {
    question: "Binatang khas Indonesia dan hanya ada di Indonesia adalah?",
    options: ["komodo", "buaya", "harimau", "beruang"],
    answer: "komodo",
  },
  {
    question: "Rumah adat di Jawa Tengah adalah?",
    options: ["joglo", "rumah kaca", "krong bade", "gadang"],
    answer: "joglo",
  },
  {
    question: "Indonesia Merdeka Pada Tanggal?",
    options: ["17 agustus 1945", "18 agustus 1945", "20 agustus 1945", "25 agustus 1945"],
    answer: "17 agustus 1945",
  },
  {
    question: "Negara yang berbatasan dengan Indonesia di bagian selatan adalah?",
    options: ["Jepang", "Malaysia", "India", "Australia"],
    answer: "Australia",
  },
  {
    question: "Laut terluas di Indonesia adalah?",
    options: ["Samudra Pasifik", "Samudra Hindia", "Samudra Atlantis", "Samudra Antarktika"],
    answer: "Samudra Pasifik",
  },
  {
    question: "Di bawah ini adalah negara yang mata uangnya adalah dollar, kecuali?",
    options: ["Malaysia", "India", "Inggris", "Amerika"],
    answer: "Malaysia",
  },
  {
    question: " Di bawah ini nama bulan penanggalan Masehi yang jumlah harinya paling sedikit adalah?",
    options: ["Maret", "Februari", "April", "Januari"],
    answer: "Februari",
  },
  {
    question: " Wilayah di Indonesia yang tidak dilalui garis katulistiwa adalah?",
    options: ["Kalimantan", "Jawa tengah", "Papua", "Jambi"],
    answer: "Papua",
  },
  // Tambahkan pertanyaan dan jawaban lain di sini
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option-button");
    optionButton.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(optionButton);
  });
}

function checkAnswer(selectedAnswer) {
  const question = quizData[currentQuestion];

  if (selectedAnswer === question.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  submitButton.style.display = "none";
  resultElement.textContent = `Skor Anda: ${score} dari ${quizData.length}`;
}

submitButton.addEventListener("click", () => checkAnswer());

showQuestion();