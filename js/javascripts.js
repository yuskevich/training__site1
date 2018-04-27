        $(document).ready(function(){

            // show search form
            $('.search-button').on('click', function(){
                $(this).siblings('form').toggleClass('active');
            });

            // show menu
            $('.show-menu').on('click', function(){
                $(this).siblings('.header-menu-list').toggleClass('active');
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

            /* project slider old version 
            function Slider(block, block_status_list, block_container, block_button_prev, block_button_next){
                var lengthBlock = block.length;
                var lengthStatusList = block_status_list.length;
                var statusBlock = 0;
                var statusStatusList = 0;

                function sliderStep(){
                    block_container.css('left','-'+(statusBlock*100)+'%');
                    block_status_list.removeClass('active').eq(statusStatusList).addClass('active');
                }

                block_container.width((lengthBlock*100)+'%');          

                block_button_prev.on('click', function(){
                    if (statusBlock === 0) {statusBlock = (lengthBlock-1)}
                    else statusBlock--;
                    if (statusStatusList === 0) {statusStatusList = (lengthStatusList-1)}
                    else statusStatusList--;
                    sliderStep();
                });

                block_button_next.on('click', function(){
                    if (statusBlock === (lengthBlock-1)) {statusBlock = 0}
                    else statusBlock++;
                    if (statusStatusList === (lengthStatusList-1)) {statusStatusList = 0}
                    else statusStatusList++;
                    sliderStep();
                });

                block_status_list.on('click', function(){
                    statusBlock = $(this).index();
                    statusStatusList = $(this).index();
                    sliderStep();
                });
            }

            Slider($('.project-block'), $('.project-block-status-list li'), $('.project-block-container'), $('.project-block-button-prev'), $('.project-block-button-next'));
            Slider($('.blog-page-block'), $('.blog-page-block-status-list li'), $('.blog-page'), $('.blog-page-block-button-prev'), $('.blog-page-block-button-next'));
            Slider($('.sidebar-slide-block'), $('.sidebar-slide-block-status-list li'), $('.sidebar-slide'), $('.sidebar-slide-block-button-prev'), $('.sidebar-slide-block-button-next'));
            */

            // accordion
            //new version
            $.each($('.js-accordion > dt'), function(i,accordionBlock){
                var accordionStatus = false;
                var accordionButton = $(accordionBlock).find("i");
                var accordionContent = $(accordionBlock).next("dd").children('p');
                $(accordionBlock).on('click', function(){
                    if (accordionStatus) {
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
            });

            /*old version
            for (var i = 0; i < $('.accordion-block').length; i++) {
                Accoridon($('.accordion-block').eq(i));
            }

            function Accoridon(accordion_block_item){
                var accordionStatus = false;
                var accordionButton = accordion_block_item.find("i");
                var accordionContent = accordion_block_item.find("p");
                accordionButton.on('click', function(){
                    if (accordionStatus) {
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
            }*/
            
            //tab
            // new version
            $.each($('.js-tabs > ul'), function(i,tab){
                $(tab).on('click','li:not(.active)',function(){
                    $(this).addClass('active').siblings().removeClass('active').closest('.js-tabs').find('div').removeClass('active').eq($(this).index()).addClass('active');
                });
            });

            /* new version 2
            $.each($('.tab-container'), function(i,tab){
                $(tab).find(".tab-caption").on('click','li:not(.active)',function(){
                    $(this).addClass('active').siblings().removeClass('active').closest('.tab-container').find('.tab-content').removeClass('active').eq($(this).index()).addClass('active');
                });
            });*/

            /* old version
            for (var i = 0; i < $('.tab-container').length; i++) {
                Tab($('.tab-container').eq(i));
            }

            function Tab(tab_container_item){
                tab_container_item.find(".tab-caption").on('click','li:not(.active)',function(){
                    $(this).addClass('active').siblings().removeClass('active').closest('.tab-container').find('.tab-content').removeClass('active').eq($(this).index()).addClass('active');
                });
            }
            */

            // gallery bottom
            $('.bottom-gallery-hover-block-eye').on('click',function(){
                $(this).closest('li').find('.gallery-modal-block').css('display','flex');
            });

            $('.gallery-modal-block').on('click',function(){
                $(this).css('display','none');
            });

        });
