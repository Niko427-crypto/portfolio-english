// TAB SCRIPTS
const projectTabs = document.querySelectorAll('.tabs');
const tabContents = document.querySelectorAll('[data-tab-content]');

function handleTabClick(tab) {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContents.forEach(tabContent => tabContent.classList.remove('active'));
    projectTabs.forEach(tab => tab.classList.remove('active'));

    tab.classList.add('active');
    target.classList.add('active');

    // Save the selected tab to localStorage
    localStorage.setItem('selectedTab', tab.dataset.tabTarget);
}

projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        handleTabClick(tab);
    });
});

// STAY ON TAB ON RELOAD
document.addEventListener('DOMContentLoaded', function() {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab) {
        const selectedTab = document.querySelector(`[data-tab-target="${storedTab}"]`);
        if (selectedTab) {
            handleTabClick(selectedTab);
        }
    }

    // CLEAR LOCALSTORAGE AFTER CLICKING ON LINK
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            localStorage.removeItem('selectedTab');
        });
    });
});

// SCROLL TO TOP BUTTON
const scrollToTopBtn = document.getElementById('scroll-top');

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
});