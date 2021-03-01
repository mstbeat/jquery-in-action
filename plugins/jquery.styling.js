(function($){
  $.fn.colorText = function(options){
    var settings = $.extend({
      color:"red",
      background:null
    },options);
    return this.each(function(){
      $(this).css({
        color:settings.color,
        backgroundColor:settings.background
      });
    });
  };
})(jQuery);
