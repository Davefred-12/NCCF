function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = sidebar.style.transform === 'translateX(0%)' ? 'translateX(100%)' : 'translateX(0%)';
}


function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save theme preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Apply saved theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-switch').checked = true;
    }
};




