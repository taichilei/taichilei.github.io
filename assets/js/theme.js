const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// 初始化主题，默认使用浅色主题
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
} else {
    root.setAttribute('data-theme', 'light');
}

// 切换主题
themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
