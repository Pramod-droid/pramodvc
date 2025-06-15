function updateTime() {
  const timeDisplay = document.getElementById('timeDisplay');
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  };
  const formatted = now.toLocaleString('en-US', options);
  timeDisplay.textContent = formatted;
}
setInterval(updateTime, 1000);
updateTime();

function joinRoom() {
  const name = document.getElementById('nameInput').value.trim();
  const room = document.getElementById('roomInput').value.trim();
  const loading = document.getElementById('loadingSpinner');
  const loadingName = document.getElementById('loadingNameText');
  const joinBtn = document.getElementById('joinBtn');

  if (!name || !room) {
    alert("Please enter your name and room code.");
    return;
  }

  joinBtn.disabled = true;
  loading.style.display = 'block';
  loadingName.textContent = `Joining as ${name}, please wait...`;

  setTimeout(() => {
    window.location.href = `room.html?name=${encodeURIComponent(name)}&room=${encodeURIComponent(room)}`;
  }, 2000);
}
