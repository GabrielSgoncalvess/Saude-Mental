document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    mensagemSucesso.textContent = `Obrigado, ${nome}! Sua solicitação foi enviada.`;
    mensagemSucesso.style.color = 'green';

    
    document.getElementById('agendamentoForm').reset();
});