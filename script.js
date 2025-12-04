document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded!");

    const tabs = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.project-card');

    if(tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(btn => btn.classList.remove('active'));
                tab.classList.add('active');
                const targetCategory = tab.getAttribute('data-target');

                cards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (targetCategory === 'all' || cardCategory === targetCategory) {
                        card.classList.remove('hidden');
                        card.style.animation = 'none';
                        card.offsetHeight; 
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    const cursor = document.getElementById('cursor');
    const projectImages = document.querySelectorAll('.image-container');

    if(cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        projectImages.forEach(container => {
            container.addEventListener('mouseenter', () => cursor.classList.add('active'));
            container.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }

    const allDetails = document.querySelectorAll("details");

    allDetails.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            allDetails.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });

    const backToTopBtn = document.getElementById('backToTop');
    if(backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    
});

function switchLang(lang) {
    const enContent = document.getElementById('cv-en');
    const uaContent = document.getElementById('cv-ua');
    const btnEn = document.getElementById('btn-en');
    const btnUa = document.getElementById('btn-ua');

    if (lang === 'en') {
        enContent.classList.remove('hidden');
        uaContent.classList.add('hidden');
        
        btnEn.classList.add('bg-white', 'text-black');
        btnEn.classList.remove('text-gray-500');
        
        btnUa.classList.remove('bg-white', 'text-black');
        btnUa.classList.add('text-gray-500');
    } else {
        enContent.classList.add('hidden');
        uaContent.classList.remove('hidden');
        
        btnUa.classList.add('bg-white', 'text-black');
        btnUa.classList.remove('text-gray-500');
        
        btnEn.classList.remove('bg-white', 'text-black');
        btnEn.classList.add('text-gray-500');
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[id^="modal-"]');
        modals.forEach(modal => {
            if (!modal.classList.contains('hidden')) {
                closeModal(modal.id);
            }
        });
    }
});
