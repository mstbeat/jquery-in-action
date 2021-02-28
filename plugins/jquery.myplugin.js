$.fn.getDetail = function(){
  return this.attr("id");
}
$.fn.getElement = function(){
  alert("You click on " + this.prop("tagName").toLowerCase() + " element.");
}