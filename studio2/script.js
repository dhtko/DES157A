(function(){
    'use strict';
    console.log('reading js');

    const nextBtn = document.querySelector('#nextBtn');
    const prevBtn = document.querySelector('#previousBtn');
    const tab = document.querySelector('#tab');

    const opening = document.querySelector('#opening');
    
    const sergant = document.querySelector('#sergant');
    const outer_sgt_one = document.querySelector('#outer_sgt_one');
    const outer_sgt_two = document.querySelector('#outer_sgt_two');
    const outer_sgt_three = document.querySelector('#outer_sgt_three');
    const outer_sgt_four = document.querySelector('#outer_sgt_four');
    const outer_sgt_five = document.querySelector('#outer_sgt_five');
    const sgt_one = document.querySelector('#sgt_one');
    const sgt_two = document.querySelector('#sgt_two');
    const sgt_three = document.querySelector('#sgt_three');
    const sgt_four = document.querySelector('#sgt_four');
    const sgt_five = document.querySelector('#sgt_five');
    
    const closing = document.querySelector('#closing');

    let counter = 0;

    nextBtn.addEventListener('click', function(){
        counter++;
        if (counter > 5){
            counter = 5;
        }

        toggle(counter); //label and on/off

        switch(counter){
            case 4: content_four(); break;
        }
    });
    prevBtn.addEventListener('click', function(){
        counter--;
        if (counter < 0){
            counter = 0;
        }

        toggle(counter); //label and on/off
    });

    function toggle(object){
        switch(object){
            case 1: 
                tab.innerHTML = '1'; 
                break;
            case 2: 
                tab.innerHTML = '2'; 
                break;
            case 3: 
                tab.innerHTML = '3'; 
                break;
            case 4: 
                tab.innerHTML = 'Sergant';
                opening.className = 'content hidden';
                sergant.className = 'content showing';
                closing.className = 'content hidden';
                break;
            case 5: 
                tab.innerHTML = 'Ending'; 
                opening.className = 'content hidden';
                sergant.className = 'content hidden';
                closing.className = 'content showing';
                break;
            default: 
                tab.innerHTML = 'Opening';
                opening.className = 'content showing';
                sergant.className = 'content hidden';
                closing.className = 'content hidden';
                break;
        }
    }

    function content_four(){
        outer_sgt_one.addEventListener('mouseover', function(){
            sgt_one.className = 'snapshot showing';
        });
        outer_sgt_one.addEventListener('mouseout', function(){
            sgt_one.className = 'snapshot hidden';
        })

        outer_sgt_two.addEventListener('mouseover', function(){
            sgt_two.className = 'snapshot showing';
        });
        outer_sgt_two.addEventListener('mouseout', function(){
            sgt_two.className = 'snapshot hidden';
        })

        outer_sgt_three.addEventListener('mouseover', function(){
            sgt_three.className = 'snapshot showing';
        });
        outer_sgt_three.addEventListener('mouseout', function(){
            sgt_three.className = 'snapshot hidden';
        })

        outer_sgt_four.addEventListener('mouseover', function(){
            sgt_four.className = 'snapshot showing';
        });
        outer_sgt_four.addEventListener('mouseout', function(){
            sgt_four.className = 'snapshot hidden';
        })

        outer_sgt_five.addEventListener('mouseover', function(){
            sgt_five.className = 'snapshot showing';
        });
        outer_sgt_five.addEventListener('mouseout', function(){
            sgt_five.className = 'snapshot hidden';
        })


        
    }


})();