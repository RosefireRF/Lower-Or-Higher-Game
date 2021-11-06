let numberToGuess = Math.floor(Math.random() * 100);

function guessNumber(){
    let holder = document.getElementById('red');
    let holderHolder = document.getElementById('shower');
    guessedNumber = document.getElementById("numberHolder").value;
    holderHolder.removeChild(holder);
    holderHolder.appendChild(holder);
    document.documentElement.style.setProperty('--red', 0 + "%")
    if (guessedNumber == numberToGuess){
        console.log("Congratulations!");
    }
    //Treba da ide na više (Crveno od dole na gore)
    else if (guessedNumber < numberToGuess){
        holder.classList.add("botTo");
        document.documentElement.style.setProperty('--red', guessedNumber + "%")
        console.log("Go higher!");
    }
    //Treba da ide niže (Crveno da ide na dole)
    else if (guessedNumber > numberToGuess){
        holder.classList.add("topTo");
        document.documentElement.style.setProperty('--red', 100 - guessedNumber + "%")
        console.log("Go lower");
    }

}