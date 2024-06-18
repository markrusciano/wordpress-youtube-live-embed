jQuery(document).ready(function ($) {
  var $livestream = $('.youtube-livestream');

  $livestream.each(function () {
    var $this = $(this);
    var channelId = $this.data('channel-id');
    var autoplay = $this.data('autoplay');
    var videoWidth = $this.data('video-width');
    var videoHeight = $this.data('video-height');

    $.post(
      ajax_object.ajax_url,
      {
        action: 'yle_get_video_id',
        channel_id: channelId,
        autoplay: autoplay,
        video_width: videoWidth,
        video_height: videoHeight
      },
      function (response) {
        $this.replaceWith(response);
      }
    );
  });
});
