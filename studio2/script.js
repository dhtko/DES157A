(function(){
    'use strict';
    console.log('reading js');

    const nextBtn = document.querySelector('#nextBtn');
    const prevBtn = document.querySelector('#previousBtn');
    let counter = 0;

    nextBtn.addEventListener('click', function(){
        counter+=1;
        console.log(counter);
    });
    prevBtn.addEventListener('click', function(event){
        counter-=1;
        if (counter < 0){
            counter = 0;
        }
        console.log(counter);
    });
})();