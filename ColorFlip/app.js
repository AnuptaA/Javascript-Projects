const colors = ["green", "red", "rgba(133,122,200)", "f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number i in 0 - 3 inclusive to choose colors[i]
    const randNumber = 2;
    document.body.style.backgroundColor = colors[randNumber];
    color.textContent = colors[randNumber];
})