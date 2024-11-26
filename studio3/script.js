(function(){
    'use strict';
    console.log('reading js');

    const instruction = document.querySelector('#instruction');
    const overlay = document.querySelector('#overlay');
    const close = document.querySelector('#close');

    const timer = document.querySelector('#timer');
    let count = 1;

    const strikeZone = [];

    const windup = document.querySelector('#throw');
    const strike = document.querySelector('#hiddenNumber');
    const history = document.querySelector('#history');

    const afterGame = document.querySelector('#afterGameInstruction');

    //soundFiles
    const pitchSound = new Audio('./sounds/goButton.mp3');
    const recordSound = new Audio('./sounds/updateRecord.mp3');
    const winSound = new Audio('./sounds/youWin.mp3');
    const loseSound = new Audio('./sounds/youLose.mp3');
    const beginningSound = new Audio('./sounds/playBall.mp3');


    //set up the answer (from star-trek-game)
    function setStrikeZone(){
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        mixDigits(digits);

        for (let i = 0; i < 4; i++){
            strikeZone.push(digits.shift());
        }
    }
    function mixDigits(list){
        for (let i = list.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }
    }
    setStrikeZone();
    console.log(strikeZone);
    
    //set up a copy of the answer for display
    const strikeZoneNum = strikeZone.map(Number);


    
    //opening, closing instruction
    instruction.addEventListener('click', function(){
        overlay.className = 'showing';
    });
    close.addEventListener('click', function(){
        beginningSound.play();
        overlay.className = 'hidden';
    });



    //throw the ball
    windup.addEventListener('click', function(event){
        event.preventDefault();
        pitchSound.play();
        

        //check any errors in user input
        const pitching = document.querySelector('#pitchingZone').value;
        if (isNaN(pitching)){ //if user entered string, warn without increasing the count
            alert('You must type in four-digit NUMBERS to throw the ball');
            document.querySelector('#pitchingZone').focus();
        }
        else if (pitching.length > 0 && pitching.length < 4){ //if user entered a 1 to 3 digits number , warn without increasing the count
            alert('You must type in FOUR-DIGIT numbers to throw the ball');
            document.querySelector('#pitchingZone').focus();
        }
        else if (pitching.length > 4){ //if user entered a number more than 4 digits, warn without increasing the count
            alert('You must type in FOUR-DIGIT numbers to throw the ball');
            document.querySelector('#pitchingZone').focus();
        }
        else if (pitching == ''){ //if user did not enter anything, warn them to type 4 digit number
            alert('You MUST TYPE in four-digit numbers to throw the ball');
            document.querySelector('#pitchingZone').focus();
            count -= 1;
        }
        else{ //passed through all errorchecks
            
            //manage timer, count
            turnCheck();

            //check the user input
            const [greenCount, orangeCount, redCount] = baseballCount(strikeZone, pitching);
            
            //check winning condition (if winning condition met, then the game reveals the hidden number and let user know that the game is over)
            winningCheck(orangeCount);

            //update the past actions on the record display
            recordSound.play();
            history.innerHTML += `${pitching}) ${greenCount}Ball ${orangeCount}Strike ${redCount}Out<br><br>`;

        }
        

    });

    function turnCheck(){
        if (count > 9){ //failed all attempts
            loseSound.play();
            alert('You Lost!');
            strike.innerHTML = strikeZoneNum;
            afterGame.className = 'showing';
        }
        else{
            count += 1;
            timer.innerHTML = count;
        }
    }

    function baseballCount(hiddenNum, guessingNum){
        let greenCount = 0;
        let orangeCount = 0;
        let rawRedCount = 0;
        let realRedCount = 0;

        for (let i = 0; i < guessingNum.length; i++){
            if (guessingNum[i] == hiddenNum[i]){ //checking strike condition
                orangeCount += 1; 
            }
            else{
                for (let j = 0; j < hiddenNum.length; j++){ //comparing a guessing number to all other numbers in hiddenNum
                    if (guessingNum[i] == hiddenNum[j]){ //checking ball condition
                        greenCount += 1;
                    }
                    else{
                        rawRedCount += 1; //for out condition (when a number does not match any of the guessing number), basically count all unmatched conditions divided by four since four count equals to one full out count. Then, round down the division and use it as the actual redCount
                    }
                }
            }
        }

        realRedCount = Math.floor(rawRedCount / 4); //applying out condition
        

        return [greenCount, orangeCount, realRedCount];
    }

    function winningCheck(orangeCount){
        if (orangeCount == 4){
            winSound.play();
            alert('You Won!');
            strike.innerHTML = strikeZoneNum;
            afterGame.className = 'showing';
        }
    }

})();