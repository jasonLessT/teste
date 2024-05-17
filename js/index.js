function posicaoRandomica() {
    console.log("teste")
    const button = document.getElementById('nao');

    // Obter as dimensões da janela e do botão
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Definir limites aleatórios para a posição do botão
    const minX = 0;
    const maxX = windowWidth - buttonWidth;
    const minY = 0;
    const maxY = windowHeight - buttonHeight;

    // Gerar novas posições aleatórias para o botão
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    console.log(randomX, randomY)

    // Atualizar a posição do botão
    button.style.position = 'fixed';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

const buttonNao = document.getElementById('nao');

buttonNao.addEventListener('mouseover', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
});

const buttonSim = document.getElementById('sim');

buttonSim.addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=-VEUWrmVsQ4', '_blank');
});