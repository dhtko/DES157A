(function(){
    'use strict';
    console.log('reading js');

    const nextBtn = document.querySelector('#nextBtn');
    const nextBtnInstruction = document.querySelector('#nextInstruction');
    const prevBtn = document.querySelector('#previousBtn');
    const prevBtnInstruction = document.querySelector('#previousInstruction');

    const opening = document.querySelector('#opening');

    const lowestRank = document.querySelector('#private');

    const privatE = document.querySelector('#private1stClass');
    const slideNext = document.querySelector('#slideNext');
    const slidePrevious = document.querySelector('#slidePrevious');
    const slideImages = ['slideshow_1.jpg', 'slideshow_2.jpg', 'slideshow_3.jpg', 'slideshow_4.jpg', 'slideshow_5.jpg'];
    const slide = document.querySelector('#slideImage');
    const slideText = document.querySelector('#slideText');
    const slideTextBox = document.querySelector('#slideTextBox');

    const corporal = document.querySelector('#corporal');
    const cpl_photoGrid = document.querySelector('#cpl_photoGrid');
    const cpl_photos = document.querySelectorAll('.cpl_photo');

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
        else if (counter == 3){
            content_three();
        }
        else if (counter == 4){
            content_four();
        }
    });
    nextBtn.addEventListener('mouseover', function(){
        nextBtnInstruction.className = 'navigationHover showing';
    });
    nextBtn.addEventListener('mouseout', function(){
        nextBtnInstruction.className = 'navigationHover hidden';
    });
    prevBtn.addEventListener('mouseover', function(){
        prevBtnInstruction.className = 'navigationHover showing';
    });
    prevBtn.addEventListener('mouseout', function(){
        prevBtnInstruction.className = 'navigationHover hidden';
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
        else if (counter == 3){
            content_three();
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
                //show and enable the left arrow button
                prevBtn.disabled = false;
                prevBtn.className = 'arrowButton showing';
                //show and enable the left arrow button
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
                //right arrow button showing and enabled
                nextBtn.disabled = false;
                nextBtn.className = 'arrowButton showing'
                //right arrow button showing and enabled
                break;
            case 5: 
                opening.className = 'content hidden';
                lowestRank.className = 'content hidden';
                privatE.className = 'content hidden';
                corporal.className = 'content hidden';
                sergant.className = 'content hidden';
                closing.className = 'content showing';
                //right arrow button hidden and disabled
                nextBtn.disabled = true;
                nextBtn.className = 'arrowButton hidden';
                //right arrow button hidden and disabled
                break;
            default: 
                opening.className = 'content showing';
                //left arrow button hidden and disabled
                prevBtn.disabled = true;
                prevBtn.className = 'arrowButton hidden'
                //left arrow button hidden and disabled
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

            switch(slideChecker){
                case 1: slideText.innerHTML = 'testing text for section 1';
                        slideTextBox.style.top = '63.2%'; break;
                case 2: slideText.innerHTML = 'testing text for section 2';
                        slideTextBox.style.top = '63.2%'; break;
                case 3: slideText.innerHTML = 'testing text for section 3'; 
                        slideTextBox.style.top = '56.4%'; break;
                case 4: slideText.innerHTML = 'testing text for section 4'; 
                        slideTextBox.style.top = '56.4%'; break;
                default: slideText.innerHTML = 'testing text for sectiion 0';
                        slideTextBox.style.top = '63.2%'; break;
            }
        });

        slidePrevious.addEventListener('click', function(){
            slideChecker--;
            if (slideChecker < 0){
                slideChecker = slideImages.length-1;
            }
            slide.src = `images/${slideImages[slideChecker]}`;

            switch(slideChecker){
                case 1: slideText.innerHTML = 'testing text for section 1';
                        slideTextBox.style.top = '63.2%'; break;
                case 2: slideText.innerHTML = 'testing text for section 2';
                        slideTextBox.style.top = '63.2%'; break;
                case 3: slideText.innerHTML = 'testing text for section 3'; 
                        slideTextBox.style.top = '56.4%'; break;
                case 4: slideText.innerHTML = 'testing text for section 4'; 
                        slideTextBox.style.top = '56.4%'; break;
                default: slideText.innerHTML = 'testing text for sectiion 0';
                        slideTextBox.style.top = '63.2%'; break;
            }
        });

        slide.addEventListener('mouseover', function(){
            slideTextBox.className = 'showing';
        });
        slide.addEventListener('mouseout', function(){
            slideTextBox.className = 'hidden';
        });
    }

    function content_three(){
        cpl_photoGrid.addEventListener('mousemove', function(event){
            const xPos = event.clientX;
            const photoWidth = cpl_photos[0].width + 32;
            const gridHalf = (window.innerWidth) / 2;

            const thirdStart = gridHalf + 5;
            const thirdEnd = thirdStart + photoWidth;
            const fourthStart = thirdEnd + 10; 
            const fourthEnd = fourthStart + photoWidth;

            const secondEnd = gridHalf - 5;
            const secondStart = secondEnd - photoWidth;
            const firstEnd = secondStart - 10;
            const firstStart = firstEnd - photoWidth;

            let photoOpacity = 0;

            if (xPos > firstStart && xPos < firstEnd){
                photoOpacity = opacityCalculate(xPos, firstStart, firstEnd);
                cpl_photos[0].style.opacity = photoOpacity;
                cpl_photos[4].style.opacity = photoOpacity;
            }
            else if (xPos > secondStart && xPos < secondEnd){
                photoOpacity = opacityCalculate(xPos, secondStart, secondEnd);
                cpl_photos[1].style.opacity = photoOpacity;
                cpl_photos[5].style.opacity = photoOpacity;
            }
            else if (xPos > thirdStart && xPos < thirdEnd){
                photoOpacity = opacityCalculate(xPos, thirdStart, thirdEnd);
                cpl_photos[2].style.opacity = photoOpacity;
                cpl_photos[6].style.opacity = photoOpacity;
            }
            else if (xPos > fourthStart && xPos < fourthEnd){
                photoOpacity = opacityCalculate(xPos, fourthStart, fourthEnd);
                cpl_photos[3].style.opacity = photoOpacity;
                cpl_photos[7].style.opacity = photoOpacity;
            }
            else{
                for (const eachPhoto of cpl_photos){
                    eachPhoto.style.opacity = 0;
                }
            }

        });
        cpl_photoGrid.addEventListener('mouseout', function(){
            for (const eachPhoto of cpl_photos){
                eachPhoto.style.opacity = 0;
            }
        });
    }
    function opacityCalculate(pos, start, end){
        const range = end - start;
        const occupied = pos - start;
        const rawResult = occupied / range;
        const theResult = Math.round(rawResult * 100) / 100;
        return theResult;
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
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        });
        sgt_btn_one.addEventListener('click', function(){
            sgt_over_one.className = 'overlay hidden';
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        });

        outer_sgt_two.addEventListener('mouseover', function(){
            sgt_two.className = 'snapshot showing';
        });
        outer_sgt_two.addEventListener('mouseout', function(){
            sgt_two.className = 'snapshot hidden';
        });
        outer_sgt_two.addEventListener('click', function(){
            sgt_over_two.className = 'overlay showing';
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        });
        sgt_btn_two.addEventListener('click', function(){
            sgt_over_two.className = 'overlay hidden';
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        });

        outer_sgt_three.addEventListener('mouseover', function(){
            sgt_three.className = 'snapshot showing';
        });
        outer_sgt_three.addEventListener('mouseout', function(){
            sgt_three.className = 'snapshot hidden';
        });
        outer_sgt_three.addEventListener('click', function(){
            sgt_over_three.className = 'overlay showing';
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        });
        sgt_btn_three.addEventListener('click', function(){
            sgt_over_three.className = 'overlay hidden';
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        });

        outer_sgt_four.addEventListener('mouseover', function(){
            sgt_four.className = 'snapshot showing';
        });
        outer_sgt_four.addEventListener('mouseout', function(){
            sgt_four.className = 'snapshot hidden';
        });
        outer_sgt_four.addEventListener('click', function(){
            sgt_over_four.className = 'overlay showing';
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        });
        sgt_btn_four.addEventListener('click', function(){
            sgt_over_four.className = 'overlay hidden';
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        });
    }


})();