const formulario = document.getElementById('formulario');
const texto = document.getElementById('palavra');
const resultado = document.getElementById('resultado');

function acaoNoFormulario(e) {
    e.preventDefault();
    const palavra = texto.value;
    const converte = palavra.toLowerCase();
    const separarPalavra = converte.split('');
    const inverterPalavra = separarPalavra.reverse('');
    const palavraInvertida = inverterPalavra.join('');
    if (converte == palavraInvertida) {
        resultado.innerHTML = `<p>A palavra ${palavra} é um palíndromo.</p>`;
    }
    else {
        resultado.innerHTML = `<p>A palavra ${palavra} não é um palíndromo.`
    }
}

formulario.addEventListener('submit', acaoNoFormulario);
