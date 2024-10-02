const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// Exercise 1

function wordOneCharacterAtTheTime(word) {
    for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
            console.log(word.charAt(i));
        }, i * 1000);
    }
}


// Exercise 2
function game() {
    let timer = setTimeout(() => {
        console.log(`Time out, you lost ! The right number was ${randomNumber}`);
        rl.close();
    }, 10000);

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let numberOfGuesses = 0;

    
    function ask() {
        rl.question("What your guess ? : ", (answer) => {
            checkAnswer(answer);
        });
    }
    function checkAnswer(answer) {
        let guess = parseInt(answer)
        if (guess === randomNumber) {
            numberOfGuesses++;
            console.log(`You win. You found the right number in ${numberOfGuesses} guesses`);
            clearTimeout(timer);
            rl.close();
        } else { 
            console.log(guess < randomNumber ? 'Too Low' : 'Too High');
            numberOfGuesses++;
            ask();
        }
    }
    ask();
}

game();
