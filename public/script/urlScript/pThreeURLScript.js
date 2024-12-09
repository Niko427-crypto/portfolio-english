// project three address
document.addEventListener('DOMContentLoaded', () => {
    navigateToProjectThree();

    const pThreeLink = document.getElementById('p3-link');
    if (pThreeLink) {
        pThreeLink.addEventListener('click', (e) => {
            navigateToProjectThree();
        });
    }
});

function navigateToProjectThree() {
    history.pushState(null, null, '/growth-and-fixed-mindsets');
}