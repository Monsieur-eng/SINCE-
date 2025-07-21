const yesBtn = document.getElementById('yesBtn');
const maybeBtn = document.getElementById('maybeBtn');
const resultDiv = document.getElementById('result');
const loadingText = document.getElementById('loadingText');
const loveSinceText = document.getElementById('loveSince');
const notification = document.getElementById('notification');

yesBtn.addEventListener('click', () => {
  resultDiv.classList.remove('hidden');
  loadingText.classList.remove('hidden');
  loveSinceText.classList.add('hidden');
  notification.classList.add('hidden');

  setTimeout(() => {
    loadingText.textContent = "Loading from the day I love you...";
  }, 1200);

  setTimeout(() => {
    loadingText.classList.add('hidden');
    loveSinceText.classList.remove('hidden');
    startCounter();
  }, 3000);
});

maybeBtn.addEventListener('click', () => {
  resultDiv.classList.add('hidden');
  notification.classList.remove('hidden');
});

function startCounter() {
  const startDate = new Date('2024-04-13T00:00:00');
  const loveSinceText = document.getElementById('loveSince');

  function update() {
    const now = new Date();
    const diff = Math.floor((now - startDate) / 1000);
    loveSinceText.textContent = `I have loved you since ${diff.toLocaleString('fr-FR')} secondes.`;
  }

  update();
  setInterval(update, 1000);
}