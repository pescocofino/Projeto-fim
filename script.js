// Expandir/Contrair FAQ com animação suave
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Validação do formulário e feedback de sucesso
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            document.querySelector('.alert-success').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.alert-success').style.display = 'none';
            }, 5000);
            document.getElementById('contact-form').reset();
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });
