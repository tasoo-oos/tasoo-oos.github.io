document.addEventListener('DOMContentLoaded', function () {
    const mode_button = document.querySelector('#mode');

    function setTheme(themeName) {
        document.documentElement.className = themeName;
        localStorage.setItem('theme', themeName);
    }

    function load_theme() {
        const theme = localStorage.getItem('theme');
        if (theme) {
            if (theme === 'theme-light') {
                setTheme('theme-light');
            }

            if (theme === 'theme-dark') {
                setTheme('theme-dark');
            }
            return;
        }

        const prefersDarkTheme = window.matchMedia(
            '(prefers-color-scheme: dark)'
        );
        if (prefersDarkTheme.matches) {
            setTheme('theme-dark');
            return;
        }

        const prefersLightTheme = window.matchMedia(
            '(prefers-color-scheme: light)'
        );
        if (prefersLightTheme.matches) {
            setTheme('theme-light');
            return;
        }

        setTheme('theme-dark');
    }

    load_theme();

    mode_button.addEventListener('click', () => {
        const theme = localStorage.getItem('theme');
        if (theme === 'theme-dark') {
            setTheme('theme-light');
        }

        if (theme === 'theme-light') {
            setTheme('theme-dark');
        }
    });
});
