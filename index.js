let numberToGuess = Math.floor(Math.random() * 100);
console.log(numberToGuess);

function guessNumber(){
    let holder = document.getElementById('shower');
    guessedNumber = document.getElementById("numberHolder").value;
    holder.className = "";
    document.documentElement.style.setProperty('--red', 0 + "%")
    document.documentElement.style.setProperty('--green', 100 + "%")
    if (guessedNumber == numberToGuess){
        console.log("Congratulations!");
    }
     //Treba da ide na više (Crveno od dole na gore)
    else if (guessedNumber < numberToGuess){
        holder.className = "bottomTo";
        document.documentElement.style.setProperty('--green', 100 - guessedNumber + "%")
        console.log("Go higher!");
    }
    //Treba da ide niže (Crveno da ide na dole)
    else if (guessedNumber > numberToGuess){
        holder.className = "topTo";
        document.documentElement.style.setProperty('--red', 100 - guessedNumber + "%")
        console.log("Go lower");
    }

}