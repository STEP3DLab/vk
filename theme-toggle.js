window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const isDark = stored === 'dark';
  root.classList.toggle('dark', isDark);
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';

  if (btn) {
    btn.addEventListener('click', () => {
      const currentlyDark = root.classList.toggle('dark');
      localStorage.setItem('theme', currentlyDark ? 'dark' : 'light');
      btn.textContent = currentlyDark ? '☀️' : '🌙';
    });
  }
});
