(function(){
    "use strict";
    console.log('reading js');

    const notepad = document.querySelector('#notepad');
    const scene = document.querySelector('#scene');
    let rebuildScene;

    notepad.addEventListener('submit', function(event){
        event.preventDefault();

        const q1 = document.querySelector('#q1').value;
        const q2 = document.querySelector('#q2').value;
        const q3 = document.querySelector('#q3').value;
        const q4 = document.querySelector('#q4').value;
        const q5 = document.querySelector('#q5').value;
        const q6 = document.querySelector('#q6').value;
        const q7 = document.querySelector('#q7').value;
        const q8 = document.querySelector('#q8').value;
        const q9 = document.querySelector('#q9').value;
        const q10 = document.querySelector('#q10').value;
        const q11 = document.querySelector('#q11').value;

        if(q1 == ''){
            alert('Please fill in the form');
            document.querySelector('#q1').focus();
        }



    });

})();