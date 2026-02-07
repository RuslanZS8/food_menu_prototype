document.addEventListener('DOMContentLoaded', function () {
    // Get all category elements
    const categories = document.querySelectorAll('.category');

    // Add click event to each category
    categories.forEach(category => {
        category.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element with smooth behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    const style = document.createElement('style');
    style.textContent = `
                    .category {
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }
                    .category:hover {
                        background-color: #f0f0f0;
                    }
                `;
    document.head.appendChild(style);
});


// Replace your menu.js with this JavaScript code

document.addEventListener('DOMContentLoaded', function () {
    // Create infinite scrolling for grid2
    createInfiniteCarousel();

    // Smooth scroll for category navigation
    setupCategoryNavigation();
});

function createInfiniteCarousel() {
    const grid2Container = document.querySelector('.grid2');
    if (!grid2Container) return;

    // Clone all cards and append them for seamless looping
    const cards = grid2Container.querySelectorAll('.card');
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        grid2Container.appendChild(clone);
    });

    // Reset animation when it reaches halfway (for continuous loop)
    const container = document.querySelector('.grid2-container');

    container.addEventListener('animationiteration', () => {
        // Remove and re-add animation to prevent jank
        grid2Container.style.animation = 'none';
        void grid2Container.offsetWidth; // Trigger reflow
        grid2Container.style.animation = 'scrollInfinite 30s linear infinite';
    });

    // Pause on hover (optional enhancement)
    container.addEventListener('mouseenter', () => {
        grid2Container.style.animationPlayState = 'paused';
    });

    container.addEventListener('mouseleave', () => {
        grid2Container.style.animationPlayState = 'running';
    });
}

function setupCategoryNavigation() {
    // Add click handlers for categories
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
    });

}
