// MAIN TOP-CONTAINER

// directory dropdown
document.addEventListener('mouseover', e => {
    const isDropdownLink = e.target.matches('[data-dropdown-link]');
    if (!isDropdownLink && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownLink) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    };

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    });
});

// responsive hamburger menu:
const hamburger = document.querySelector('.hamburger');
const headerLinks = document.querySelector('.header-links');

function closeMenu() {
    hamburger.classList.remove('active');
    headerLinks.classList.remove('active');
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !headerLinks.contains(event.target)) {
        closeMenu();
    }
});

headerLinks.addEventListener('click', (event) => {
    event.stopPropagation();
});