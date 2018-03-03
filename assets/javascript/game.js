
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = []; 
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
    
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
        guessesSoFar.push(userGuess); 
        if (userGuess == computerGuess) {
            wins++;
            alert('Excellent! You guessesed it correctly. You Won!');
            guessesLeft = 9; 
            guessesSoFar.length = 0; 
        }
        else if (guessesLeft == 0){
            losses++;
            alert('You did not guess the correct letter. You lost. Try again.');
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }
        else if (userGuess !== computerGuess){
            guessesLeft--;
        }  
            
        var html = "<h1>The Psychic Game</h1>" + 
        "<h2>Try to guess what letter I'm thinking of! I dare you!!</h2>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSoFar +
        "</p>"
        ;
        
        document.querySelector('#game').innerHTML = html;
    }
