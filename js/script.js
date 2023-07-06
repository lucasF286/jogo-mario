const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

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
    
    if (pipePosition <= 120) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }

}, 10);