// reflection address
document.addEventListener('DOMContentLoaded', () => {
    navigateToAbout();

    const aboutLink = document.getElementById('reflections-link');
    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            navigateToAbout();
        });
    }
});

function navigateToAbout() {
    history.pushState(null, null, '/reflections');
}