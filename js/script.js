jQuery(function($){

    // sroll onepage
    $('.navbar').onePageNav();
    $( ".navbar-brand" ).click(function() {
        $(".navbar-nav li:first").addClass("current");
    });

    // parallax
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 0
    });

    // titles animations
    function onScrollInit( items, trigger ) {
        items.each( function() {
            var bsElement = $(this),
                bsAnimationClass = bsElement.attr('data-bs-animation'),
                bsAnimationDelay = bsElement.attr('data-bs-animation-delay');

            bsElement.css({
                '-webkit-animation-delay':  bsAnimationDelay,
                '-moz-animation-delay':     bsAnimationDelay,
                'animation-delay':          bsAnimationDelay
            });

            var bsTrigger = ( trigger ) ? trigger : bsElement;

            bsTrigger.waypoint(function() {
                bsElement.addClass('animated').addClass(bsAnimationClass);
            },{
                triggerOnce: true,
                offset: '90%'
            });
        });
    }
    onScrollInit( $('.bs-animation') );
    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );

    // scroll texts
    (function() {
        function textScroll(){
            var current = 1;
            var height = $('.text-scroll').height();
            var numberDivs = $('.text-scroll').children().length;
            var first = $('.text-scroll h1:nth-child(1)');

            setInterval(function() {
                var number = current * -height;
                first.css('margin-top', number + 'px');
                if ( current === numberDivs ) {
                    first.css('margin-top', '0px');
                    current = 1;
                } else current++;
            }, 2500);
        }
        $(document).on("ready", textScroll);
    })(); // end scroll texts
});