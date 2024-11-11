(function(){
    'use strict';
    console.log('reading js');

    const nextBtn = document.querySelector('#nextBtn');
    const prevBtn = document.querySelector('#previousBtn');
    const tab = document.querySelector('#tab');

    const opening = document.querySelector('#opening');
    const closing = document.querySelector('#closing');

    let counter = 0;

    nextBtn.addEventListener('click', function(){
        counter++;
        if (counter > 5){
            counter = 5;
        }

        toggle(counter);
    });
    prevBtn.addEventListener('click', function(){
        counter--;
        if (counter < 0){
            counter = 0;
        }

        toggle(counter);
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
                break;
            case 5: 
                tab.innerHTML = 'Ending'; 
                opening.className = 'content hidden'
                closing.className = 'content showing';
                break;
            default: 
                tab.innerHTML = 'Opening';
                opening.className = 'content showing';
                closing.className = 'content hidden';
                break;
        }
    }
})();