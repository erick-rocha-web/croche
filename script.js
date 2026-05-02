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


// ================================================
//  FORMULÁRIO — envia mensagem pelo WhatsApp
// ================================================
const formBtn = document.getElementById('formBtn');

formBtn.addEventListener('click', () => {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (!nome || !mensagem) {
        alert('Por favor, preencha pelo menos o nome e a mensagem.');
        return;
    }

    // Monta o texto da mensagem
    const texto = `Olá! Me chamo *${nome}* email: ${email ? ` (${email})` : ''}. 😊\n\n${mensagem}`;

    // Número da Liih (código do Brasil: 55)
    const numero = '5561999069113';

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
});