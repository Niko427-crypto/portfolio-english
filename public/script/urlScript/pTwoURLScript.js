// project two address
document.addEventListener('DOMContentLoaded', () => {
    navigateToProjectTwo();

    const pTwoLink = document.getElementById('p2-link');
    if (pTwoLink) {
        pTwoLink.addEventListener('click', (e) => {
            navigateToProjectTwo();
        });
    }
});

function navigateToProjectTwo() {
    history.pushState(null, null, '/civilian-soldiers');
}