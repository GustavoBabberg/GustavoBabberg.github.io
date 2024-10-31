
const botao = document.getElementById('Editar');
const h1 = document.getElementById('meuH1');

botao.addEventListener('click', () => {
    h1.textContent = 'Novo texto para o H1!';
});