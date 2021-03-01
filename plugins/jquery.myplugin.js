(function($){
  $.fn.getDetail = function(action){
    if(action == "id"){
      this.each(function(){
        $(this).append("<p class='details'>The id of this element is " + $(this).attr("id") + "</p>");
        $(".details").slideUp(5000);
      });
      return this;
    } else if (action =="element"){
      this.each(function(){
        $(this).map(function(){
          alert("This is a/an " + $(this).prop("tagName").toLowerCase() + " element.");
        });
      });
      return this;
    }
  };
})(jQuery);