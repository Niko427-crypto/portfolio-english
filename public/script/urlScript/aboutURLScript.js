// about address
document.addEventListener('DOMContentLoaded', () => {
    navigateToAbout();

    const aboutLink = document.getElementById('about-link');
    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            navigateToAbout();
        });
    }
});

function navigateToAbout() {
    history.pushState(null, null, '/about');
}