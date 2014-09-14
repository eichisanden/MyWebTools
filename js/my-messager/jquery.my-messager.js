(function($) {

    /**
      my-messager

      @param {Object} options
          {String} type メッセージタイプ（inro/warn/error）
          {Number} showtime メッセージが消えるまでの時間（ミリ秒）
          {String} message メッセージ内容
    */
    $.fn.messager = function(options) {

        // オプションにデフォルト値を設定
        var defaults = {
                type: 'info',
                showtime: 3000,
                message: 'Default Message'
            },
            settings = $.extend({}, defaults, options);

        return this.each(function() {
            var $this = $(this);

            // 指定されたメッセージとタイプを設定する
            $this.addClass(settings.type);
            $this.text(settings.message);

            // 非表示の場合は表示する
            if ($this.is(':hidden')) {
                // 上からスライドして表示
                $this.slideDown();
                // 指定した秒数後に消えるようにタイマーに仕掛ける
                setTimeout(function() {
                        $this.text('時間が来たので消えます、さようなら...');
                        // ふわっと消える
                        $this.fadeOut();
                    }, settings.showtime);
            }

            // クリックされた場合も閉じる
            $this.on('click.messager', function() {
                // サクッと消える
                $this.hide('fast');
            });
        });
    };

})(jQuery);
