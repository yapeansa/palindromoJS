const formulario = document.getElementById('formulario');
const texto = document.getElementById('palavra');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', acaoNoFormulario);

function acaoNoFormulario(e) {
    e.preventDefault();
    const palavra = texto.value;
    const palavraLower = palavra.toLowerCase();
    const separarPalavra = palavraLower.split('');
    const inverterPalavra = separarPalavra.reverse('');
    const palavraInvertida = inverterPalavra.join('');

    resultado.innerHTML = palavra == '' ? '<p>Por favor, digite uma palavra.</p>' : verificaSeEPalindromo(palavra, palavraLower, palavraInvertida);
}

function verificaSeEPalindromo (palavra, palavraLower, palavraInvertida) {
    if (palavraLower == palavraInvertida) {
        return `<p>A palavra ${palavra} é um palíndromo.</p>`;
    }
    else {
        return `<p>A palavra ${palavra} não é um palíndromo.`;
    }
}

// Cuidando do placeholder

texto.addEventListener('focus', function () { this.placeholder = '' });

texto.addEventListener('blur', function () { this.placeholder = 'Digite uma palavra...' });
