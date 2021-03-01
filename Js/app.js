const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
let randomNumber;
btn.addEventListener('click', function(){
   
    // console.log(document.body);
    // get Random Number between 0 to 3 colors[0 to 3]
    randomNumber = getRandomNumbers();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
});

function getRandomNumbers(){
    x = Math.floor(Math.random() * colors.length);
    console.log(x);
    if(x == randomNumber)
    {
        console.log(randomNumber);
        getRandomNumbers();
    }
    return x;
}