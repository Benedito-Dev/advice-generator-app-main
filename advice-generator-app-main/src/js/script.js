btn = document.getElementById("gerar")
var texto = document.getElementById("conselho")

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buscarConselho() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar o conselho.');
        }
        return response.json();
    })
    .then(data => {
        const conselho = data.slip.advice;
        
        // Estilizando o elemento HTML
        document.getElementById('conselho').textContent = conselho
        document.getElementById('conselho').style.color = `hsl(193, 38%, 86%)`;
        document.getElementById('conselho').style.fontSize = `25px`;
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

btn.addEventListener('click', function() {
    buscarConselho()
    document.getElementById('Titulo').textContent = `Advice #${gerarNumeroAleatorio(1, 158)}`
})