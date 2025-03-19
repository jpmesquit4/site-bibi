// Definir a data inicial (14 de fevereiro)
const dataInicial = new Date("2025-02-14T00:00:00").getTime();

function atualizarTimer() {
    const agora = new Date().getTime();
    const diferenca = agora - dataInicial;

    // Calcular dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibir no HTML
    document.getElementById("timer").innerHTML = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Atualizar o timer a cada segundo
setInterval(atualizarTimer, 1000);

// Chamar a função imediatamente para não esperar o primeiro intervalo
atualizarTimer();
