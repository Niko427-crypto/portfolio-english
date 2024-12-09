// project one address
document.addEventListener('DOMContentLoaded', () => {
    navigateToProjectOne();

    const pOneLink = document.getElementById('p1-link');
    if (pOneLink) {
        pOneLink.addEventListener('click', (e) => {
            navigateToProjectOne();
        });
    }
});

function navigateToProjectOne() {
    history.pushState(null, null, '/i-live-for-me');
}