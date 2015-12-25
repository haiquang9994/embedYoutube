$(document).ready(function(){
    var youtube_div = $('.youtube-player');
    youtube_div.each(function(){
        LYOUTUBE.init(this);
    });
});
/*
<div class="play-button"></div>
<span class="fa fa-play"></span>
*/

LYOUTUBE = {
    init: function(obj){
        var p = document.createElement('div');
        p.className = 'thumb-lyoutube';
        p.innerHTML = '<img class="youtube-thumb" src="https://i.ytimg.com/vi/' + obj.dataset.id + '/hqdefault.jpg"><div class="play-button"></div>';
        p.onclick = LYOUTUBE.open;
        $(obj).append(p);
    },
    open: function(){
        if(!this.dataset.disabled){
            var this_ = $(this);
            var p = document.createElement('div');
            p.className = 'embed-wapper-lyoutube';
            var video = document.createElement('div');
            video.className = 'video-iframe';
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', "https://www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0");
            iframe.setAttribute('frameborder', "0");
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('width', "560");
            iframe.setAttribute('height', '315');
            video.appendChild(iframe);
            var close = document.createElement('a');
            close.className = 'close-video-iframe';
            close.onclick = function(){
                p.remove();
                this_.removeAttr('data-disabled');
            };
            video.appendChild(close);
            p.onclick = function(event){
                if(video !== event.target){
                    p.remove();
                    this_.removeAttr('data-disabled');
                }
            };
            p.appendChild(video);
            this_.parent().append(p);
            this_.attr('data-disabled', true);
            // $('body,html').addClass('overflow-hidden');
        }
    }

};
