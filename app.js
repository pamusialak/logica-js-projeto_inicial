alert('Welcome to the game of Secret Number!');
let maxNumber = 50;
let secretNumber = parseInt(Math.random() * maxNumber) + 1;
console.log(secretNumber);
let guess;
let tries = 1;


while (guess != secretNumber){
    guess = prompt(`Choose a number between 1 and ${maxNumber}`);

    if(secretNumber == guess){
        break;
    } else{
        if(secretNumber > guess){
            alert('Is higher than ' + guess+ '! Please try again.')
        }else{
            alert('Is lower than '+ guess + '! Please try again!')
        }
        tries++
    }
}

let wordTry = tries > 1 ? 'tries' : 'try'
alert('Hurray!! You find out the secret number ' + secretNumber + ' in ' + tries + ' ' + wordTry);

