document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const guestName = document.getElementById('guest-name').value;
    
    // Exibe uma mensagem de confirmação
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = `Obrigado, ${guestName}, por confirmar sua presença!`;
    confirmationMessage.style.display = 'block';

    // Aqui você pode adicionar a lógica para armazenar os nomes em um banco de dados ou lista
    // Por exemplo, armazenando em um array ou enviando para um servidor via AJAX
});