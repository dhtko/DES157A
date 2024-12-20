(function(){
    'use strict';
    console.log('reading js');

    const backgroundMusic = new Audio('sounds/background.mp3');

    const nextBtn = document.querySelector('#nextBtn');
    const nextBtnInstruction = document.querySelector('#nextInstruction');
    const prevBtn = document.querySelector('#previousBtn');
    const prevBtnInstruction = document.querySelector('#previousInstruction');
    const btnSound = new Audio('sounds/buttonSound.mp3');

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
    //image maps
    const heepee = document.querySelector('#heepee'); //overlay1
    const heepeeID = document.querySelector('#heepeeID');
    const byungChan = document.querySelector('#byungChanFace'); //overlay2
    const byungChanSquadID = document.querySelector('#byungChanSquadID');
    const manKyu = document.querySelector('#manKyuFace');
    const manKyuSquadID = document.querySelector('#manKyuSquadID');
    const gunWuk = document.querySelector('#gunWuk'); //overlay3
    const gunWukID = document.querySelector('#gunWukID');
    const junSang = document.querySelector('#junSang');
    const junSangID = document.querySelector('#junSangID');
    const jinWoo = document.querySelector('#jinWoo');
    const jinWooID = document.querySelector('#jinWooID');
    const haeMin = document.querySelector('#haeMin');
    const haeMinID = document.querySelector('#haeMinID');
    const kyungMin2 = document.querySelector('#kyungMin2'); //overlay 4
    const kyungMinPlatoonID = document.querySelector('#kyungMinPlatoonID');
    const minSeo = document.querySelector('#minSeo');
    const minseoID = document.querySelector('#minseoID');
    const manKyu2 = document.querySelector('#manKyu2');
    const manKyuPlatoonID = document.querySelector('#manKyuPlatoonID');
    const ikJun = document.querySelector('#ikJun');
    const ikJunID = document.querySelector('#ikJunID');
    const byungChan2 = document.querySelector('#byungChan2');
    const byungChanPlatoonID = document.querySelector('#byungChanPlatoonID');
    const minHyuk = document.querySelector('#minHyuk');
    const minHyukID = document.querySelector('#minHyukID');
    const eunHyung = document.querySelector('#eunHyung');
    const eunHyungID = document.querySelector('#eunHyungID');
    const gunWuk2 = document.querySelector('#gunWuk2');
    const gunWukPlatoonID = document.querySelector('#gunWukPlatoonID');
    const namEun = document.querySelector('#namEun');
    const namEunID = document.querySelector('#namEunID');
    
    const closing = document.querySelector('#closing');

    let counter = 0;

    //background music
    backgroundMusic.volume = 0.5;
    window.addEventListener('load', startBackgroundMusic);
    function startBackgroundMusic(){
        backgroundMusic.play();
        backgroundMusic.loop = true;
    }
    document.addEventListener('keydown', function(event){
        if (event.key === 'm'){
            backgroundMusic.muted = true;
        }
        if (event.key === 'n'){
            backgroundMusic.muted = false;
        }
    });


    nextBtn.addEventListener('click', function(){
        btnSound.play();

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
        btnSound.play();

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
                case 1: slideText.innerHTML = '<p>Having a barbeque time with beer! The drink was the 1st prize for the field day with different companies (within the same battalion).</p>';
                        slideTextBox.style.top = '59%'; break;
                case 2: slideText.innerHTML = '<p>The photo was taken during another field day with all companies within the brigade. This was remarkable because it was the biggest event I experienced during my service.</p>';
                        slideTextBox.style.top = '59%'; break;
                case 3: slideText.innerHTML = '<p>The photo was taken during the field day, competing against the companies within the same battalion. The man who got the spotlight was the MVP of the day.</p>'; 
                        slideTextBox.style.top = '52.4%'; break;
                case 4: slideText.innerHTML = '<p>The photo was taken during having the mafia game. 1st platoon has a tradition of playing mafia games during Halloween night.</p>'; 
                        slideTextBox.style.top = '56.2%'; break;
                default: slideText.innerHTML = '<p>Having a barbeque time during the winter season membership training with platoon members.</p>';
                        slideTextBox.style.top = '62.8%'; break;
            }
        });

        slidePrevious.addEventListener('click', function(){
            slideChecker--;
            if (slideChecker < 0){
                slideChecker = slideImages.length-1;
            }
            slide.src = `images/${slideImages[slideChecker]}`;

            switch(slideChecker){
                case 1: slideText.innerHTML = '<p>Having a barbeque time with beer! The drink was the 1st prize for the field day with different companies (within the same battalion).</p>';
                        slideTextBox.style.top = '59%'; break;
                case 2: slideText.innerHTML = '<p>The photo was taken during another field day with all companies within the brigade. This was remarkable because it was the biggest event I experienced during my service.</p>';
                        slideTextBox.style.top = '59%'; break;
                case 3: slideText.innerHTML = '<p>The photo was taken during the field day, competing against the companies within the same battalion. The man who got the spotlight was the MVP of the day.</p>'; 
                        slideTextBox.style.top = '52.4%'; break;
                case 4: slideText.innerHTML = '<p>The photo was taken during having the mafia game. 1st platoon has a tradition of playing mafia games during Halloween night.</p>'; 
                        slideTextBox.style.top = '56.2%'; break;
                default: slideText.innerHTML = '<p>Having a barbeque time during the winter season membership training with platoon members.</p>';
                        slideTextBox.style.top = '62.8%'; break;
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

                cpl_photos[0].addEventListener('click', function(){
                    cpl_photos[0].style.transform = 'scale(1.4)';
                    cpl_photos[0].style.zIndex = '1';
                    cpl_photos[0].style.opacity = 1;
                });
                cpl_photos[4].addEventListener('click', function(){
                    cpl_photos[4].style.transform = 'scale(1.4)';
                    cpl_photos[4].style.zIndex = '1';
                    cpl_photos[4].style.opacity = 1;
                });                 
            }
            else if (xPos > secondStart && xPos < secondEnd){
                photoOpacity = opacityCalculate(xPos, secondStart, secondEnd);
                cpl_photos[1].style.opacity = photoOpacity;
                cpl_photos[5].style.opacity = photoOpacity;

                cpl_photos[1].addEventListener('click', function(){
                    cpl_photos[1].style.transform = 'scale(1.4)';
                    cpl_photos[1].style.zIndex = '1';
                    cpl_photos[1].style.opacity = 1;
                });
                cpl_photos[5].addEventListener('click', function(){
                    cpl_photos[5].style.transform = 'scale(1.4)';
                    cpl_photos[5].style.zIndex = '1';
                    cpl_photos[5].style.opacity = 1;
                }); 
            }
            else if (xPos > thirdStart && xPos < thirdEnd){
                photoOpacity = opacityCalculate(xPos, thirdStart, thirdEnd);
                cpl_photos[2].style.opacity = photoOpacity;
                cpl_photos[6].style.opacity = photoOpacity;

                cpl_photos[2].addEventListener('click', function(){
                    cpl_photos[2].style.transform = 'scale(1.4)';
                    cpl_photos[2].style.zIndex = '1';
                    cpl_photos[2].style.opacity = 1;
                });
                cpl_photos[6].addEventListener('click', function(){
                    cpl_photos[6].style.transform = 'scale(1.4)';
                    cpl_photos[6].style.zIndex = '1';
                    cpl_photos[6].style.opacity = 1;
                }); 
            }
            else if (xPos > fourthStart && xPos < fourthEnd){
                photoOpacity = opacityCalculate(xPos, fourthStart, fourthEnd);
                cpl_photos[3].style.opacity = photoOpacity;
                cpl_photos[7].style.opacity = photoOpacity;

                cpl_photos[3].addEventListener('click', function(){
                    cpl_photos[3].style.transform = 'scale(1.4)';
                    cpl_photos[3].style.zIndex = '1';
                    cpl_photos[3].style.opacity = 1;
                });
                cpl_photos[7].addEventListener('click', function(){
                    cpl_photos[7].style.transform = 'scale(1.4)';
                    cpl_photos[7].style.zIndex = '1';
                    cpl_photos[7].style.opacity = 1;
                }); 
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

        document.addEventListener('keydown', function(event){
            if (event.keyCode === 27){
                cpl_photos[0].style.transform = 'scale(1.0)';
                cpl_photos[1].style.transform = 'scale(1.0)';
                cpl_photos[2].style.transform = 'scale(1.0)';
                cpl_photos[3].style.transform = 'scale(1.0)';
                cpl_photos[4].style.transform = 'scale(1.0)';
                cpl_photos[5].style.transform = 'scale(1.0)';
                cpl_photos[6].style.transform = 'scale(1.0)';
                cpl_photos[7].style.transform = 'scale(1.0)';
            } 
            event.preventDefault();
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
            prevBtnInstruction.innerHTML = '<p>Disabled</p>';
            nextBtn.disabled = true;
            nextBtnInstruction.innerHTML = '<p>Disabled</p>';
        });
        heepee.addEventListener('mouseover', function(){
            heepeeID.className = 'sgt_id showing';
        });
        heepee.addEventListener('mouseout', function(){
            heepeeID.className = 'sgt_id hidden';
        });
        sgt_btn_one.addEventListener('click', function(){
            sgt_over_one.className = 'overlay hidden';
            
            prevBtn.disabled = false;
            prevBtnInstruction.innerHTML = '<p>Click the button to go back to previous chapter</p>';
            nextBtn.disabled = false;
            nextBtnInstruction.innerHTML = '<p>Click the button to go back to previous chapter</p>';
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
            prevBtnInstruction.innerHTML = '<p>Disabled</p>';
            nextBtn.disabled = true;
            nextBtnInstruction.innerHTML = '<p>Disabled</p>';
        });
        byungChan.addEventListener('mouseover', function(){
            byungChanSquadID.className = 'sgt_id showing';
        });
        byungChan.addEventListener('mouseout', function(){
            byungChanSquadID.className = 'sgt_id hidden';
        });

        manKyu.addEventListener('mouseover', function(){
            manKyuSquadID.className = 'sgt_id showing';
        });
        manKyu.addEventListener('mouseout', function(){
            manKyuSquadID.className = 'sgt_id hidden';
        });
        sgt_btn_two.addEventListener('click', function(){
            sgt_over_two.className = 'overlay hidden';
            
            prevBtn.disabled = false;
            prevBtnInstruction.innerHTML = '<p>Click the button to go back to previous chapter</p>';
            nextBtn.disabled = false;
            nextBtnInstruction.innerHTML = '<p>Click the button to go back to previous chapter</p>';
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
            prevBtnInstruction.innerHTML = '<p>Disabled</p>';
            nextBtn.disabled = true;
            nextBtnInstruction.innerHTML = '<p>Disabled</p>';
        });
        gunWuk.addEventListener('mouseover', function(){
            gunWukID.className = 'sgt_id showing';
        });
        gunWuk.addEventListener('mouseout', function(){
            gunWukID.className = 'sgt_id hidden';
        });
        junSang.addEventListener('mouseover', function(){
            junSangID.className = 'sgt_id showing';
        });
        junSang.addEventListener('mouseout', function(){
            junSangID.className = 'sgt_id hidden';
        });
        jinWoo.addEventListener('mouseover', function(){
            jinWooID.className = ('sgt_id showing');
        });
        jinWoo.addEventListener('mouseout', function(){
            jinWooID.className = ('sgt_id hidden');
        });
        haeMin.addEventListener('mouseover', function(){
            haeMinID.className = 'sgt_id showing';
        });
        haeMin.addEventListener('mouseout', function(){
            haeMinID.className = 'sgt_id hidden';
        });
        sgt_btn_three.addEventListener('click', function(){
            sgt_over_three.className = 'overlay hidden';
            
            prevBtn.disabled = false;
            prevBtnInstruction.innerHTML = '<p>Click the button to go back to previous chapter</p>';
            nextBtn.disabled = false;
            nextBtnInstruction.innerHTML = '<p>Click the button to go back to previous chapter</p>';
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
            prevBtnInstruction.innerHTML = '<p>Disabled</p>';
            nextBtn.disabled = true;
            nextBtnInstruction.innerHTML = '<p>Disabled</p>';
        });
        //test
        kyungMin2.addEventListener('mouseover', function(){
            kyungMinPlatoonID.className = 'sgt_id showing';
        });
        kyungMin2.addEventListener('mouseout', function(){
            kyungMinPlatoonID.className = 'sgt_id hidden';
        });
        minSeo.addEventListener('mouseover', function(){
            minseoID.className = 'sgt_id showing';
        });
        minSeo.addEventListener('mouseout', function(){
            minseoID.className = 'sgt_id hidden';
        });
        manKyu2.addEventListener('mouseover', function(){
            manKyuPlatoonID.className = 'sgt_id showing';
        });
        manKyu2.addEventListener('mouseout', function(){
            manKyuPlatoonID.className = 'sgt_id hidden';
        });
        ikJun.addEventListener('mouseover', function(){
            ikJunID.className = 'sgt_id showing';
        });
        ikJun.addEventListener('mouseout', function(){
            ikJunID.className = 'sgt_id hidden';
        });
        byungChan2.addEventListener('mouseover', function(){
            byungChanPlatoonID.className = 'sgt_id showing';
        });
        byungChan2.addEventListener('mouseout', function(){
            byungChanPlatoonID.className = 'sgt_id hidden';
        });
        minHyuk.addEventListener('mouseover', function(){
            minHyukID.className = 'sgt_id showing';
        });
        minHyuk.addEventListener('mouseout', function(){
            minHyukID.className = 'sgt_id hidden';
        });
        eunHyung.addEventListener('mouseover', function(){
            eunHyungID.className = 'sgt_id showing';
        });
        eunHyung.addEventListener('mouseout', function(){
            eunHyungID.className = 'sgt_id hidden';
        });
        gunWuk2.addEventListener('mouseover', function(){
            gunWukPlatoonID.className = 'sgt_id showing';
        });
        gunWuk2.addEventListener('mouseout', function(){
            gunWukPlatoonID.className = 'sgt_id hidden';
        });
        namEun.addEventListener('mouseover', function(){
            namEunID.className = 'sgt_id showing';
        });
        namEun.addEventListener('mouseout', function(){
            namEunID.className = 'sgt_id hidden';
        });
        sgt_btn_four.addEventListener('click', function(){
            sgt_over_four.className = 'overlay hidden';
            
            prevBtn.disabled = false;
            prevBtnInstruction.innerHTML = '<p>Click the button to go back to previous chapter</p>';
            nextBtn.disabled = false;
            nextBtnInstruction.innerHTML = '<p>Click the button to go back to previous chapter</p>';
        });
    }



})();