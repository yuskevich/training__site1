        $(document).ready(function(){

            // show search form
            $('.js-button-show-search').on('click', function(){
                $(this).siblings('form').toggleClass('active');
            });

            // show menu
            $('.js-button-show-menu').on('click', function(){
                $(this).siblings('.js-menu-list').toggleClass('active');
            });

            $(document).mouseup(function (e){ // событие клика по веб-документу
                var menu = $(".js-menu-list");
                var buttonShowMenu = $('.js-button-show-menu');
                var buttonShowMSearch = $('.js-button-show-search');
                var form = buttonShowMSearch.siblings('form');
                if (!menu.is(e.target) // если клик был не по нашему блоку
                && menu.has(e.target).length === 0
                && !buttonShowMenu.is(e.target) && buttonShowMenu.has(e.target).length === 0) { // и не по его дочерним элементам
                    menu.removeClass('active');
                }
                if (!form.is(e.target) && form.has(e.target).length === 0
                && !buttonShowMSearch.is(e.target) && buttonShowMSearch.has(e.target).length === 0) { // и не по его дочерним элементам
                    form.removeClass('active');
                }
            });
            // project slider
            // new version

            $.each($('.js-slider'), function(i,slider){
                var slidesQuantity= $(slider).children('div').length;
                var sliderIndicators = $(slider).parent().siblings('ul').children('li');
                var sliderIndicatorsQuantity = sliderIndicators.length;
                var statusSlider = 0;
                var statusSliderIndicators = 0;

                function sliderStep(){
                    $(slider).css('left','-'+(statusSlider*100)+'%');
                    sliderIndicators.removeClass('active').eq(statusSliderIndicators).addClass('active');
                }

                $(slider).width((slidesQuantity*100)+'%');          

                $(slider).siblings('.js-slider-button-prev').on('click', function(){
                    if (statusSlider === 0) {statusSlider = (slidesQuantity-1)}
                    else statusSlider--;
                    if (statusSliderIndicators === 0) {statusSliderIndicators = (sliderIndicatorsQuantity-1)}
                    else statusSliderIndicators--;
                    sliderStep();
                });

                $(slider).siblings('.js-slider-button-next').on('click', function(){
                    if (statusSlider === (slidesQuantity-1)) {statusSlider = 0}
                    else statusSlider++;
                    if (statusSliderIndicators === (sliderIndicatorsQuantity-1)) {statusSliderIndicators = 0}
                    else statusSliderIndicators++;
                    sliderStep();
                });

                sliderIndicators.on('click', function(){
                    statusSlider = $(this).index();
                    statusSliderIndicators = $(this).index();
                    sliderStep();
                });
            });

            
            // accordion
            //new version
            $('.js-accordion > dt').on('click', function(){
                var accordionButton = $(this).find("i");
                var accordionContent = $(this).next("dd").children('p');

                if (accordionContent.css("display") === "block") {
                    accordionButton.removeClass("fa fa-minus-circle").addClass("fa fa-plus-circle");
                    accordionContent.css("display","none");
                    accordionStatus = false;
                }
                else {
                    accordionButton.removeClass("fa fa-plus-circle").addClass("fa fa-minus-circle");
                    accordionContent.css("display","block");
                    accordionStatus = true;
                }
            });
      
            
            //tab
            // new version

            $('.js-tabs > ul').on('click','li:not(.active)',function(){
                $(this).addClass('active').siblings().removeClass('active').closest('.js-tabs').find('div').removeClass('active').eq($(this).index()).addClass('active');
            });

            // gallery bottom
            $('.bottom-gallery-hover-block-eye').on('click',function(){
                $(this).closest('li').find('.gallery-modal-block').css('display','flex');
            });

            $('.gallery-modal-block').on('click',function(){
                $(this).css('display','none');
            });

        });
