/* ACCORDION FUNCTION SCRIPT */
document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll('.content-header');
    const accordionContents = document.querySelectorAll('.content-text');
    const accordionArrows = document.querySelectorAll('.a-arrow');

    let previousHeader = null;

    function showContent(content) {
        const cTarget = document.querySelector(content.dataset.contentTarget);
        const arrow = content.querySelector('.a-arrow');

        if (content === previousHeader) {
            cTarget.classList.toggle('active');
            content.classList.toggle('active');
            arrow.classList.toggle('active');
        } else {
            const isNestedHeader = content.closest('.nested-accordion');
            const isMainHeader = content.closest('.main-accordion');

            if (!isNestedHeader) {
                if (previousHeader) {
                    document.querySelector(previousHeader.dataset.contentTarget).classList.remove('active');
                }

                [accordionContents, accordionHeaders, accordionArrows].forEach(collection =>
                    collection.forEach(item => item.classList.remove('active'))
                );
            }

            [cTarget, content, arrow].forEach(item => item.classList.add('active'));

            previousHeader = content;
        }
    }

    accordionHeaders.forEach(content => {
        content.addEventListener('click', () => {
            showContent(content);
        });
    });

    accordionHeaders[0].click();
});
