document.addEventListener('DOMContentLoaded', () => {
    const welcomeBtn = document.getElementById('welcomeBtn');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const bookSearchInput = document.getElementById('bookSearch');
    const bookSearchBtn = document.getElementById('bookSearchBtn');
    const bookCards = document.querySelectorAll('.book-card');
    const eventToggleBtn = document.getElementById('eventToggleBtn');
    const eventDetails = document.querySelector('.event-details');
    const contactForm = document.getElementById('contactForm');
    const contactMessage = document.getElementById('contactMessage');
    const yearSpan = document.getElementById('currentYear');

    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', () => {
            alert('¡Bienvenido a Mishima Books! Disfruta explorando nuestros libros.');
        });
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeToggleBtn.textContent = document.body.classList.contains('dark-theme') ? 'Modo claro' : 'Modo oscuro';
        });
    }

    if (bookSearchBtn && bookSearchInput) {
        bookSearchBtn.addEventListener('click', () => {
            const query = bookSearchInput.value.trim().toLowerCase();
            let foundAny = false;

            bookCards.forEach((card) => {
                const title = card.dataset.title.toLowerCase();
                const visible = title.includes(query);
                card.style.display = visible ? 'block' : 'none';
                if (visible) {
                    foundAny = true;
                }
            });

            if (query.length === 0) {
                bookSearchInput.placeholder = 'Busca por título o autor';
            }

            const message = document.getElementById('searchMessage');
            message.textContent = foundAny ? 'Mostrando resultados para "' + query + '"' : 'No se encontró ningún libro con ese término.';
            message.className = foundAny ? 'form-message success' : 'form-message error';
        });
    }

    if (eventToggleBtn && eventDetails) {
        eventToggleBtn.addEventListener('click', () => {
            eventDetails.classList.toggle('hidden');
            eventToggleBtn.textContent = eventDetails.classList.contains('hidden') ? 'Mostrar detalles del evento' : 'Ocultar detalles del evento';
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = contactForm.querySelector('#name');
            const email = contactForm.querySelector('#email');
            const messageField = contactForm.querySelector('#message');

            if (!name.value.trim() || !email.value.trim() || !messageField.value.trim()) {
                contactMessage.textContent = 'Por favor completa todos los campos antes de enviar.';
                contactMessage.className = 'form-message error';
                return;
            }

            if (!email.value.includes('@')) {
                contactMessage.textContent = 'Ingresa un correo electrónico válido.';
                contactMessage.className = 'form-message error';
                return;
            }

            contactMessage.textContent = '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.';
            contactMessage.className = 'form-message success';
            contactForm.reset();
        });
    }

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});