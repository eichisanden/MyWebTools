(function($) {

    $.fn.scrolltop= function(options) {

        var defaults = {
                target: 'body',
                showHeight: 100
            },
            settings = $.extend({}, defaults, options);

        return this.each(function() {
            var $this = $(this);

            $(window).scroll(function() {
                if ($(settings.target).scrollTop() < settings.showHeight) {
                    $this.hide();
                } else {
                    $this.show();
                }
            })

            $this.on('click.my-scroll-top', function() {
                $(settings.target).animate({scrollTop: 0}, 'slow', 'swing');
                return false;
            });
        });
    };

})(jQuery);
