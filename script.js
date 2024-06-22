const notes = {
  C: "sounds/C3.mp3",
  D: "sounds/D3.mp3",
  E: "sounds/E3.mp3",
  F: "sounds/F3.mp3",
  G: "sounds/G3.mp3",
  A: "sounds/A3.mp3",
  B: "sounds/B3.mp3",
};

let currentNote;

function clearAll() {
  document.querySelectorAll(".key").forEach((key) => {
    key.style.backgroundColor = "";
  });
}

function startGame() {
  clearAll();
  currentNote = getRandomNote();

  playSound(currentNote);
}

function getRandomNote() {
  const keys = Object.keys(notes);
  return keys[Math.floor(Math.random() * keys.length)];
}

function handleGuess(note) {
  const key = document.querySelector(`.key[data-note="${note}"]`);

  if (note === currentNote) {
    key.style.backgroundColor = "green";
  } else {
    key.style.backgroundColor = "red";
    setTimeout(() => clearAll(), 2000);
  }
}

function playSound(note) {
  const audio = new Audio(notes[note]);
  audio.play();
}

document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", function () {
    const note = this.dataset.note;
    console.log(this.dataset);
    handleGuess(note);
  });
});

document.getElementById("startButton").addEventListener("click", function () {
  startGame();
});
