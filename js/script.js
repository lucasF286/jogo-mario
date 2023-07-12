let pontuacaoLoop;
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const timer = document.querySelector(".timer");
const button = document.querySelector(".buttonrestart");

pontuacao(1);

button.addEventListener("click", ()=> {
    window.location.reload();
})

window.addEventListener("keypress", (e) => {
    e.preventDefault();
    
    if(e.code === 'Space') {
        mario.classList.add("jump");
    }

    setTimeout(() => {
        mario.classList.remove("jump");
    },500);
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if (pipePosition <= 120 && pipePosition > 0 &&marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./imagens/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = "50px";

        clearInterval(loop);

        clearTimeout(pontuacaoLoop);

        setTimeout("gameOver()", 100);

    }

}, 10);

function pontuacao (pontos) {
    pontos = pontos + 1;
    
    pontuacaoLoop = setTimeout("pontuacao("+pontos+")",50);

    timer.innerHTML = `Score: ${pontos}`;
}

function gameOver() {
    alert(`Você perdeu!!! sua pontuação foi de : ${timer.innerHTML.replace('Score:', '')}`);
}


