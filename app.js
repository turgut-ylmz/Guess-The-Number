let btn = document.getElementById('btn');
let output = document.getElementById('outputText');

let number = (Math.floor(Math.random()*100))

btn.addEventListener('click',function(){
    let input = document.getElementById('userInput').value;
    if(input == number){
        output.innerHTML = `You guessed right, your number was ${number}`
    }else if(input < number) {
        output.innerHTML = "You guessed to low!"
    };
    if(input>number){
        output.innerHTML ="You gussed to high!"
    }

});
