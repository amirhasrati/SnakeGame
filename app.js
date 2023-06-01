const snake = document.querySelector("#snake");

window.addEventListener("keydown", (e) => {
    if(e.key === 'ArrowUp' || e.key === 'w') {
        console.log(snake.style.top);
    }
})
