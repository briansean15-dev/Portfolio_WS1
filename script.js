// --- Dark / Light Theme Switcher ---
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});

// --- Personal Info Modal Controls ---
const modal = document.getElementById('personal-modal');
const infoBtn = document.getElementById('info-btn');
const closeBtn = document.getElementById('close-modal');

// Open modal when button is clicked
infoBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close modal when 'X' is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if user clicks outside the modal box
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
