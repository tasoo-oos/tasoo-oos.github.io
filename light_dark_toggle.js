document.addEventListener('DOMContentLoaded', function () {
    const mode_button = document.querySelector('#color-mode');

    function setTheme(themeName) {
        // Set the theme attribute instead of className
        document.documentElement.setAttribute('data-bs-theme', themeName);
        localStorage.setItem('theme', themeName);
    }

    function load_theme() {
        const theme = localStorage.getItem('theme');
        if (theme) {
            setTheme(theme);
            return;
        }

        const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkTheme.matches) {
            setTheme('dark');
            return;
        }

        const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
        if (prefersLightTheme.matches) {
            setTheme('light');
            return;
        }

        setTheme('dark'); // Default to dark theme if no user preference detected
    }

    load_theme();

    mode_button.addEventListener('click', () => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
});
