var observer = new IntersectionObserver(callback,options);


if($("#content").length){
    var top=$('#main').offset().top;
    var bottom=$('.other-work').offset().top + 0.4*window_height;
    if(window_top_position>=top && window_bottom_position<=bottom) {
        $("#content").css({'border-right-width':'4px'});
        var $contentTop=window_top_position + 0.1*window_height;
        var $contentBottom=window_top_position + $('#content').outerHeight() + 0.1*window_height;
        var $bump=false;
        $.each($rock,function(){
            var $element = $(this);
          var element_top_position = $element.offset().top - 10;
          var element_bottom_position = element_top_position + $element.outerHeight() + 10;
            if(($contentBottom >= element_top_position) && ($contentTop <= element_bottom_position)){
                $bump=true;$('#content li a').css('left','20em');
                return false;
            }
        })
        if(!$bump) $('#content li a').css('left','0px');
        
    }
    else {
        $("#content").css({'border-right-width':'0px'});
        $('#content li a').css('left','20em');}
}
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function element_position(element){

}
