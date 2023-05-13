let nao = document.getElementById('Nao');
function gerarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
};

nao.addEventListener('click', () =>{
    nao.classList.add('hidden')
    alert('essa opção não existe, é coisa da sua cabeça')

}  )