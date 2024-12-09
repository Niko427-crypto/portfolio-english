// home address
document.addEventListener('DOMContentLoaded', () => {
    navigateToHome();

    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            navigateToHome();
        });
    }
});

function navigateToHome() {
    history.pushState(null, null, '/');
}