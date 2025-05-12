document.addEventListener('DOMContentLoaded', function() {

    // Menu Hamburguer Responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Animação do ícone hamburguer (opcional)
            menuToggle.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link (para mobile)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (menuToggle.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Destacar link ativo no menu conforme scroll (Opcional mais avançado)
    const sections = document.querySelectorAll('main section[id]');
    function navHighlighter() {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            // Ajuste o offsetTop dependendo da altura do seu header fixo
            const sectionTop = current.offsetTop - (document.querySelector('header').offsetHeight + 10);
            let sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    window.addEventListener('scroll', navHighlighter);
    navHighlighter(); // Executa na carga inicial também


    // Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previne o envio padrão do formulário

            // Simulação de validação e envio
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
                formMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                formMessage.className = 'form-message error';
                return;
            }

            // Simulação de envio bem-sucedido
            // Em um projeto real, você enviaria os dados para um backend aqui
            formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
            formMessage.className = 'form-message success';
            contactForm.reset(); // Limpa o formulário

            // Remove a mensagem após alguns segundos
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        });
    }

    // Atualizar ano no rodapé
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});