// rough draft address
document.addEventListener('DOMContentLoaded', () => {
    navigateToAbout();

    const aboutLink = document.getElementById('rough-link');
    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            navigateToAbout();
        });
    }
});

function navigateToAbout() {
    history.pushState(null, null, '/rough-drafts');
}