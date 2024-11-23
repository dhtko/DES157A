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
    
    //answer for display only
    const strikeZoneNum = strikeZone.map(Number);




    //opening, closing instruction
    instruction.addEventListener('click', function(){
        overlay.className = 'showing';
    });
    close.addEventListener('click', function(){
        overlay.className = 'hidden';
    });



    //throw the ball
    windup.addEventListener('click', function(event){
        event.preventDefault();
        

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
        else if (pitching == ''){
            alert('You MUST TYPE in four-digit numbers to throw the ball');
            document.querySelector('#pitchingZone').focus();
            count -= 1;
        }
        else{ //passed through all errorchecks
            
            turnCheck();

            //update the past actions on the record display
            history.innerHTML += `${pitching}<br><br>`;
            
        }
        
    
        
        
    });

    function turnCheck(){
        if (count > 9){
            alert('You Lost!');
            strike.innerHTML = strikeZoneNum;
        }
        else{
            count += 1;
            timer.innerHTML = count;
        }
    }

    



    
})();