let pontuacaoLoop;
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const timer = document.querySelector(".timer");
const game_over = document.querySelector(".gameOver");
const gameOverh1 = document.querySelector(".gameOverh1");
const gameOverP = document.querySelector(".gameOverP");
const scoreP = document.querySelector(".scoreP");
const reloadGame = document.querySelector(".reloadGame");
let gameEnd = false;

pontuacao(1);

window.addEventListener("keypress", (e)=> {
    e.preventDefault();
    if(e.code === "KeyR" && gameEnd) {
        window.location.reload();
    }
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
    // alert(`Você perdeu!!! sua pontuação foi de : ${timer.innerHTML.replace('Score:', '')}`);
    game_over.style.visibility = "visible";
    gameOverP.style.visibility = "visible";
    gameOverh1.innerHTML = `Game Over`;
    scoreP.innerHTML = `Seu Score foi de: ${timer.innerHTML.replace('Score:', '')}`
    gameEnd = true;
}


