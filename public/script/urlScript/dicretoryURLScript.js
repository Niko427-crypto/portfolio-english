// directory address
document.addEventListener('DOMContentLoaded', () => {
    navigateToDirectory();

    const directoryLink = document.getElementById('directory-link');
    if (directoryLink) {
        directoryLink.addEventListener('click', (e) => {
            navigateToDirectory();
        });
    }
});

function navigateToDirectory() {
    history.pushState(null, null, '/directory');
}