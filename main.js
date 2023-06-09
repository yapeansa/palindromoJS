const formulario = document.getElementById('formulario');
const texto = document.getElementById('palavra');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', acaoNoFormulario);

function acaoNoFormulario(e) {
    e.preventDefault();
    const palavra = texto.value;
    const palavraLower = palavra.toLowerCase();
    const separarPalavra = palavraLower.split('');
    const tudoJunto = [];
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    separarPalavra.forEach(letra => {
        if (alfabeto.includes(letra))
            tudoJunto.push(letra);
    });
    const textoNaOrdem = tudoJunto.join('');
    const inverterPalavra = tudoJunto.reverse('');
    const textoInvertido = inverterPalavra.join('');

    resultado.innerHTML = palavra == '' ? '<p>Por favor, digite uma palavra.</p>' : verificaSeEPalindromo(palavra, textoNaOrdem, textoInvertido);
}

function verificaSeEPalindromo (palavra, textoNaOrdem, textoInvertido) {
    return textoNaOrdem == textoInvertido ? `<p>A texto digitado, "${palavra}", é um palíndromo.</p>` : `<p>A texto digitado, "${palavra}", não é um palíndromo.`;
}

// Cuidando do placeholder

texto.addEventListener('focus', () => this.placeholder = '');

texto.addEventListener('blur', () => this.placeholder = 'Digite uma palavra...');
