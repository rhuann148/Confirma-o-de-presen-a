document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const guestName = document.getElementById('guest-name').value.trim(); // Remove espaços em branco

    // Verifica se o nome do convidado não está vazio
    if (guestName) {
        // Exibe um alerta de confirmação
        alert(`Obrigado, ${guestName}, por confirmar sua presença!`);

        // Recarrega a página após o usuário clicar em "OK"
        location.reload();
    } else {
        alert('Por favor, digite seu nome.'); // Alerta se o campo estiver vazio
    }

    // Aqui você pode adicionar a lógica para armazenar os nomes em um banco de dados ou lista
});
