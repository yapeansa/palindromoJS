const formulario = document.getElementById('formulario');
const texto = document.getElementById('palavra');
const resultado = document.getElementById('resultado');

function acaoNoFormulario(e) {
    e.preventDefault();
    const palavra = texto.value;
    const separarPalavra = palavra.split('');
    const inverterPalavra = separarPalavra.reverse('');
    const palavraInvertida = inverterPalavra.join('');
    if (palavra == palavraInvertida) {
        resultado.innerHTML = `<p>A palavra ${palavra} é um palíndromo.</p>`;
    }
    else {
        resultado.innerHTML = `<p>A palavra ${palavra} não é um palíndromo.`
    }
}

formulario.addEventListener('submit', acaoNoFormulario);
