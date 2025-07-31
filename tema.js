
const themeButton = document.getElementById('theme-toggle');

function isDarkMode() {
  return document.documentElement.classList.contains('dark');
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}

function updateThemeButton() {
  if (!themeButton) return;
  themeButton.textContent = isDarkMode() ? '☀️ Modalità Chiara' : '🌙 Modalità Scura';
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode() ? 'dark' : 'light');
    updateThemeButton();
  });
}

applySavedTheme();
updateThemeButton();
