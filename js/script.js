const mario = document.querySelector(".mario");

window.addEventListener("keypress", (e) => {
    e.preventDefault();
    if(e.code === 'Space') {
        mario.classList.add("jump");
    }

    setTimeout(() => {
        mario.classList.remove("jump");
    },500);
})