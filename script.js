const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openOverlay');
const closeBtn = document.getElementById('closeOverlay');

// Overlay öffnen
openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  setTimeout(() => overlay.classList.add('show'), 10);
});

// Overlay schließen
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
  setTimeout(() => overlay.style.display = 'none', 300);
});

// Klick außerhalb des Inhalts schließt Overlay
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('show');
    setTimeout(() => overlay.style.display = 'none', 300);
  }
});
