(function(){
    'use strict';
    console.log('reading js');

    const nextBtn = document.querySelector('#nextBtn');
    const prevBtn = document.querySelector('#previousBtn');
    const tab = document.querySelector('#tab');
    let counter = 0;

    nextBtn.addEventListener('click', function(){
        counter++;
        if (counter > 5){
            counter = 5;
        }
        tabLabel(counter);
            
    });
    prevBtn.addEventListener('click', function(){
        counter--;
        if (counter < 0){
            counter = 0;
        }
        tabLabel(counter);

    });

    function tabLabel(object){
        switch(object){
            case 1: tab.innerHTML = '1'; break;
            case 2: tab.innerHTML = '2'; break;
            case 3: tab.innerHTML = '3'; break;
            case 4: tab.innerHTML = '4'; break;
            case 5: tab.innerHTML = 'end'; break;
            default: tab.innerHTML = 'Opening'; break;
        }
    }
})();