(function(){
    'use strict';
    console.log('reading js');

    const nextBtn = document.querySelector('#nextBtn');
    const prevBtn = document.querySelector('#previousBtn');

    const opening = document.querySelector('#opening');

    const lowestRank = document.querySelector('#private');

    const privatE = document.querySelector('#private1stClass');
    const slideNext = document.querySelector('#slideNext');
    const slidePrevious = document.querySelector('#slidePrevious');
    const slideImages = ['slideshow_1.jpg', 'slideshow_2.jpg', 'slideshow_3.jpg', 'slideshow_4.jpg', 'slideshow_5.jpg'];
    const slide = document.querySelector('#privateImage');

    const corporal = document.querySelector('#corporal');

    const sergant = document.querySelector('#sergant');
    const outer_sgt_one = document.querySelector('#outer_sgt_one');
    const outer_sgt_two = document.querySelector('#outer_sgt_two');
    const outer_sgt_three = document.querySelector('#outer_sgt_three');
    const outer_sgt_four = document.querySelector('#outer_sgt_four');
    const sgt_one = document.querySelector('#sgt_one');
    const sgt_two = document.querySelector('#sgt_two');
    const sgt_three = document.querySelector('#sgt_three');
    const sgt_four = document.querySelector('#sgt_four');
    const sgt_over_one = document.querySelector('#sgt_overlay1');
    const sgt_over_two = document.querySelector('#sgt_overlay2');
    const sgt_over_three = document.querySelector('#sgt_overlay3');
    const sgt_over_four = document.querySelector('#sgt_overlay4');
    const sgt_btn_one = document.querySelector('#sgt_overlay1_btn');
    const sgt_btn_two = document.querySelector('#sgt_overlay2_btn');
    const sgt_btn_three = document.querySelector('#sgt_overlay3_btn');
    const sgt_btn_four = document.querySelector('#sgt_overlay4_btn');
    
    const closing = document.querySelector('#closing');

    let counter = 0;

    nextBtn.addEventListener('click', function(){
        counter++;
        if (counter > 5){
            counter = 5;
        }

        toggle(counter); //on/off

        if (counter == 2){
            content_two();
        }
        else if (counter == 4){
            content_four();
        }
    });
    prevBtn.addEventListener('click', function(){
        counter--;
        if (counter < 0){
            counter = 0;
        }

        toggle(counter); //on/off

        if (counter == 2){
            content_two();
        }
        else if (counter == 4){
            content_four();
        }
    });

    //switching contents
    function toggle(object){
        switch(object){
            case 1: 
                opening.className = 'content hidden';
                lowestRank.className = 'content showing';
                privatE.className = 'content hidden';
                corporal.className = 'content hidden';
                sergant.className = 'content hidden';
                closing.className = 'content hidden';
                break;
            case 2: 
                opening.className = 'content hidden';
                lowestRank.className = 'content hidden';
                privatE.className = 'content showing';
                corporal.className = 'content hidden';
                sergant.className = 'content hidden';
                closing.className = 'content hidden';
                break;
            case 3: 
                opening.className = 'content hidden';
                lowestRank.className = 'content hidden';
                privatE.className = 'content hidden';
                corporal.className = 'content showing';
                sergant.className = 'content hidden';
                closing.className = 'content hidden';
                break;
            case 4: 
                opening.className = 'content hidden';
                lowestRank.className = 'content hidden';
                privatE.className = 'content hidden';
                corporal.className = 'content hidden';
                sergant.className = 'content showing';
                closing.className = 'content hidden';
                break;
            case 5: 
                opening.className = 'content hidden';
                lowestRank.className = 'content hidden';
                privatE.className = 'content hidden';
                corporal.className = 'content hidden';
                sergant.className = 'content hidden';
                closing.className = 'content showing';
                break;
            default: 
                opening.className = 'content showing';
                lowestRank.className = 'content hidden';
                privatE.className = 'content hidden';
                corporal.className = 'content hidden';
                sergant.className = 'content hidden';
                closing.className = 'content hidden';
                break;
        }
    }


    //content
    function content_two(){
        let slideChecker = 0;

        slideNext.addEventListener('click', function(){
            slideChecker++;
            if (slideChecker > slideImages.length - 1){
                slideChecker = 0;
            }

            slide.src = `images/${slideImages[slideChecker]}`;
        });

        slidePrevious.addEventListener('click', function(){
            slideChecker--;
            if (slideChecker < 0){
                slideChecker = slideImages.length-1;
            }
            slide.src = `images/${slideImages[slideChecker]}`;
        });
    }

    function content_four(){
        outer_sgt_one.addEventListener('mouseover', function(){
            sgt_one.className = 'snapshot showing';
        });
        outer_sgt_one.addEventListener('mouseout', function(){
            sgt_one.className = 'snapshot hidden';
        });
        outer_sgt_one.addEventListener('click', function(){
            sgt_over_one.className = 'overlay showing';
        });
        sgt_btn_one.addEventListener('click', function(){
            sgt_over_one.className = 'overlay hidden';
        });

        outer_sgt_two.addEventListener('mouseover', function(){
            sgt_two.className = 'snapshot showing';
        });
        outer_sgt_two.addEventListener('mouseout', function(){
            sgt_two.className = 'snapshot hidden';
        });
        outer_sgt_two.addEventListener('click', function(){
            sgt_over_two.className = 'overlay showing';
        });
        sgt_btn_two.addEventListener('click', function(){
            sgt_over_two.className = 'overlay hidden';
        });

        outer_sgt_three.addEventListener('mouseover', function(){
            sgt_three.className = 'snapshot showing';
        });
        outer_sgt_three.addEventListener('mouseout', function(){
            sgt_three.className = 'snapshot hidden';
        });
        outer_sgt_three.addEventListener('click', function(){
            sgt_over_three.className = 'overlay showing';
        });
        sgt_btn_three.addEventListener('click', function(){
            sgt_over_three.className = 'overlay hidden';
        });

        outer_sgt_four.addEventListener('mouseover', function(){
            sgt_four.className = 'snapshot showing';
        });
        outer_sgt_four.addEventListener('mouseout', function(){
            sgt_four.className = 'snapshot hidden';
        });
        outer_sgt_four.addEventListener('click', function(){
            sgt_over_four.className = 'overlay showing';
        });
        sgt_btn_four.addEventListener('click', function(){
            sgt_over_four.className = 'overlay hidden';
        });
    }


})();