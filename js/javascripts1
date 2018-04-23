(function($, undefined) 
    {
        $(function() 
        {
            
            // project slider
            var lengthProjectBlock = $('.project-block').length;
            var lengthStatusList = $('.project-block-status-list li').length;
            var statusProjectBlock = 0;
            var statusStatusList = 0;
            $('.project-block-container').width((lengthProjectBlock*100)+'%');          

            $('.project-block-button-prev').on('click', function(){
                if (statusProjectBlock === 0) {statusProjectBlock = (lengthProjectBlock-1)}
                    else statusProjectBlock--;
                if (statusStatusList === 0) {statusStatusList = (lengthStatusList-1)}
                    else statusStatusList--;
                $('.project-block-container').css('left','-'+(statusProjectBlock*100)+'%');
                $('.project-block-status-list li').removeClass('active').eq(statusStatusList).addClass('active');
            });

            $('.project-block-button-next').on('click', function(){
                if (statusProjectBlock === (lengthProjectBlock-1)) {statusProjectBlock = 0}
                    else statusProjectBlock++;
                if (statusStatusList === (lengthStatusList-1)) {statusStatusList = 0}
                    else statusStatusList++;
                $('.project-block-container').css('left','-'+(statusProjectBlock*100)+'%');
                $('.project-block-status-list li').removeClass('active').eq(statusStatusList).addClass('active');
            });

            $('.project-block-status-list li').on('click', function(){
                statusProjectBlock = $(this).index();
                statusStatusList = $(this).index();
                $('.project-block-container').css('left','-'+(statusProjectBlock*100)+'%');
                $('.project-block-status-list li').removeClass('active').eq(statusStatusList).addClass('active');
            });


            // blog-page slider
            var lengthProjectBlock = $('.project-block').length;
            var lengthStatusList = $('.project-block-status-list li').length;
            var statusProjectBlock = 0;
            var statusStatusList = 0;
            $('.project-block-container').width((lengthProjectBlock*100)+'%');          

            $('.project-block-button-prev').on('click', function(){
                if (statusProjectBlock === 0) {statusProjectBlock = (lengthProjectBlock-1)}
                    else statusProjectBlock--;
                if (statusStatusList === 0) {statusStatusList = (lengthStatusList-1)}
                    else statusStatusList--;
                $('.project-block-container').css('left','-'+(statusProjectBlock*100)+'%');
                $('.project-block-status-list li').removeClass('active').eq(statusStatusList).addClass('active');
            });

            $('.project-block-button-next').on('click', function(){
                if (statusProjectBlock === (lengthProjectBlock-1)) {statusProjectBlock = 0}
                    else statusProjectBlock++;
                if (statusStatusList === (lengthStatusList-1)) {statusStatusList = 0}
                    else statusStatusList++;
                $('.project-block-container').css('left','-'+(statusProjectBlock*100)+'%');
                $('.project-block-status-list li').removeClass('active').eq(statusStatusList).addClass('active');
            });

            $('.project-block-status-list li').on('click', function(){
                statusProjectBlock = $(this).index();
                statusStatusList = $(this).index();
                $('.project-block-container').css('left','-'+(statusProjectBlock*100)+'%');
                $('.project-block-status-list li').removeClass('active').eq(statusStatusList).addClass('active');
            });
            /*// show account menu
            $('.header__top__account').on('click', function() 
                {
                    $('.header__top__acc-menu').toggleClass('active');
                });

            // show category list menu
            $('.header__bottom__form__select > a').on('click', function() 
                {
                    $('.header__bottom__form__select__cats').toggleClass('active');
                });

            // slider for products
            $('.shop__product__turn.turn1').on('click', function() 
                {
                    $('.shop__product .products .product').toggleClass('active');
                });


            $('.shop__product__turn.turn2').on('click', function() 
                {
                    $('.shop__product .products .product').toggleClass('active');
                });

            // product-info tab
            $('.product-info__caption').on('click','li:not(.active)', function() 
                {
                    $(this).addClass('active').siblings().removeClass('active').closest('div.product-info-container').find('div.product-info__content').removeClass('active').eq($(this).index()).addClass('active');
                });

            // rating review stars
            $('.review-stars').on('click','li:not(.star-active)', function() 
                {
                    $(this).addClass('star-active').prevAll('li').addClass('star-active');
                });

            $('.review-stars').on('click','li.star-active', function() 
                {
                    $(this).removeClass('star-active').nextAll('li').removeClass('star-active');
                });

            //related product show button


            $('.related-product-container').on('mouseover', function() 
                {
                    $(this).children('.related-product__hidden-buttons').addClass('active');
                });

            $('.related-product-container').on('mouseout', function() 
                {
                    $(this).children('.related-product__hidden-buttons').removeClass('active');
                });*/
            
        });
    })(jQuery);
