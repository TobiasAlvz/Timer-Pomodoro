// Variáveis de estado do temporizador
let timeLeft = 1500; // 25 minutos em segundos
let isRunning = false;
let intervalId;

// Elementos do DOM
const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

// Função para atualizar o temporizador
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerEl.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (timeLeft === 0) {
    clearInterval(intervalId);
    isRunning = false;
    startBtn.innerHTML = "Começar";
    statusEl.innerHTML = "Pausa";
    timeLeft = 300; // 5 minutos em segundos
    alert("Parabéns! Você completou um ciclo Pomodoro!");
  }

  timeLeft--;
}

// Função para começar o temporizador
function startTimer() {
  if (!isRunning) {
    intervalId = setInterval(updateTimer, 1000);
    isRunning = true;
    startBtn.innerHTML = "Pausar";
    statusEl.innerHTML = "Trabalhando";
  } else {
    clearInterval(intervalId);
    isRunning = false;
    startBtn.innerHTML = "Começar";
    statusEl.innerHTML = "Pausa";
  }
}

// Função para reiniciar o temporizador
function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  startBtn.innerHTML = "Começar";
  statusEl.innerHTML = "Trabalhando";
  timeLeft = 1500;
  timerEl.innerHTML = "25:00";
}

// Adiciona os event listeners aos botões
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
