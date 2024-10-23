(function(){
    "use strict";
    console.log('reading js');

    const notepad = document.querySelector('#notepad');
    const scene = document.querySelector('#scene');
    const close = document.querySelector('#close');

    let rebuildScene;

    notepad.addEventListener('submit', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';

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
        else if(q2 == ''){
            alert('Please fill in the form');
            document.querySelector('#q2').focus();
        }
        else if(q3 == ''){
            alert('Please fill in the form');
            document.querySelector('#q3').focus();
        }
        else if(q4 == ''){
            alert('Please fill in the form');
            document.querySelector('#q4').focus();
        }
        else if(q5 == ''){
            alert('Please fill in the form');
            document.querySelector('#q5').focus();
        }
        else if(q6 == ''){
            alert('Please fill in the form');
            document.querySelector('#q6').focus();
        }
        else if(q7 == ''){
            alert('Please fill in the form');
            document.querySelector('#q7').focus();
        }
        else if(q8 == ''){
            alert('Please fill in the form');
            document.querySelector('#q8').focus();
        }
        else if(q9 == ''){
            alert('Please fill in the form');
            document.querySelector('#q9').focus();
        }
        else if(q10 == ''){
            alert('Please fill in the form');
            document.querySelector('#q10').focus();
        }
        else if(q11 == ''){
            alert('Please fill in the form');
            document.querySelector('#q11').focus();
        }
        else{
            rebuildScene = `<p>I'm <em>${q1}</em>..... I'm <em>${q1}</em>..... <br>
            <br>Today, I am gonna kill Mr. and Mrs. <em>${q2}</em>.<br>
            <br>Knock. Knock.<br>
            <br>Oh, what a lovely couple. The couple welcomed me to their <em>${q3}</em>.<br>
            <br>Mr. <em>${q2}</em> on his <em>${q4}</em> and I sat on the guest <em>${q4}</em>.<br>
            <br>Wait, I do not see Mrs. <em>${q2}</em>. Right, she is preparing <em>${q5}</em>. Of course, she will not gonna finish her prep as she will end up dead.<br>
            <br>It's time to move.<br>
            <br>I pulled a/an <em>${q6}</em> from my <em>${q7}</em>, and <em>${q8}</em> it to Mr. <em>${q2}</em>.<br>
            <br>Oh, I missed it. I did it again with caution this time... Come on! I missed it again?<br>
            <br>Mr. <em>${q2}</em> called his wife. However, she did not respond to her husband's scream since her <em>${q9}</em> has gone low. Mr. Thomas ran away until he reached <em>${q10}</em>.<br>
            <br>Ha, I got you! Now, die!<br>
            <br>No. I was not able to finish him. I am currently <em>${q11}</em> meters away from the actual crime scene. Why? What holds me back from killing him?<br>
            <br>What a mystery.....</p>`

            scene.innerHTML = rebuildScene;

            document.querySelector('#q1').value = '';
            document.querySelector('#q2').value = '';
            document.querySelector('#q3').value = '';
            document.querySelector('#q4').value = '';
            document.querySelector('#q5').value = '';
            document.querySelector('#q6').value = '';
            document.querySelector('#q7').value = '';
            document.querySelector('#q8').value = '';
            document.querySelector('#q9').value = '';
            document.querySelector('#q10').value = '';
            document.querySelector('#q11').value = '';
        }
    });

    close.addEventListener('click', function(event){
        event.preventDefault();

        document.getElementById('overlay').className = 'hidden';
    });


})();