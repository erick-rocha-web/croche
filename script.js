// ================================================
//  HEADER — some o fundo lilás ao rolar
// ================================================
const header = document.getElementById('header');
const THRESHOLD = 60; // px até o fundo sumir

window.addEventListener('scroll', () => {
    if (window.scrollY > THRESHOLD) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, { passive: true });


// ================================================
//  MENU TOGGLE — abre/fecha dropdown
// ================================================
const menuToggle = document.getElementById('menuToggle');
const dropdown = document.getElementById('dropdown');

menuToggle.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
});

// Fecha o dropdown ao clicar em qualquer link
dropdown.querySelectorAll('.dropdown-link').forEach(link => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('open');
        menuToggle.classList.remove('open');
    });
});

// Fecha o dropdown ao clicar fora
document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
        dropdown.classList.remove('open');
        menuToggle.classList.remove('open');
    }
});


// ================================================
//  SCROLL SUAVE com offset do header fixo
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;

        const headerHeight = header.offsetHeight;
        const targetTop = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: targetTop - headerHeight - 12, // 12px de respiro
            behavior: 'smooth'
        });
    });
});