const moods = [
  {
    backgroundColor: "#ffe4e1",
    color: "#4b2e2e"
  },
  {
    backgroundColor: "#1f1f1f",
    color: "#eeeeee"
  },
  {
    backgroundColor: "#dcd6f7",
    color: "#4d3c77"
  },
  {
    backgroundColor: "#eafbe0",
    color: "#2e4a32"
  },
  {
    backgroundColor: "#ffccbc",
    color: "#663300"
  }
];

let moodIndex = 0;

function switchMood() {
  moodIndex = (moodIndex + 1) % moods.length;
  const mood = moods[moodIndex];
  document.body.style.backgroundColor = mood.backgroundColor;
  document.body.style.color = mood.color;
}

function updateClock() {
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hrs}:${mins}:${secs}`;
}

setInterval(updateClock, 1000);
updateClock();
