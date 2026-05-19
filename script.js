// Aguarda o DOM carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura do formulário de contato
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        // Bloqueia o recarregamento automático da página
        event.preventDefault();

        // Limpa espaços extras digitados pelo usuário nas extremidades
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("mensagem").value.trim();

        // Expressão regular para validar estrutura padrão de e-mails
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 1. Validação de obrigatoriedade (Verifica se há campos vazios)
        if (nome === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).");
            return; 
        }

        // 2. Validação de formato (Verifica se o e-mail possui @ e um domínio válido)
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido (exemplo: nome@dominio.com).");
            return;
        }

        // 3. Sucesso (Simula o envio se passar nos testes anteriores)
        alert("Mensagem enviada com sucesso! Obrigado pelo contato, Gabriela.");
        
        // Reseta o formulário limpando os campos
        form.reset();
    });
});