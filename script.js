// ===== PAGE NAVIGATION =====

// Go to Contact Page
function goToContact() {
    window.location.href = "contact.html";
}

// Go to Images Page
function goToImages() {
    window.location.href = "image.html";
}

// Go Back to Home
function goToHome() {
    window.location.href = "index.html";
}

// Smooth fade transition (optional)
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});
// ===== BACKGROUND MUSIC (persists across pages) =====

const music = new Audio('music/vibes.mp3');
music.loop = true;
music.volume = 0.25;

const savedTime    = parseFloat(sessionStorage.getItem('musicTime') || '0');
const wasPlaying   = sessionStorage.getItem('musicPlaying') === 'true';

music.currentTime  = savedTime;
let musicStarted   = false;

if (wasPlaying) {
  music.play().then(() => { musicStarted = true; }).catch(() => {});
}

document.addEventListener('click', () => {
  if (!musicStarted) {
    music.play();
    musicStarted = true;
    sessionStorage.setItem('musicPlaying', 'true');
  }
});

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('musicTime',    music.currentTime);
  sessionStorage.setItem('musicPlaying', (!music.paused).toString());
});