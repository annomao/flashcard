
jQuery(document).ready(function($) {
  $('h3').click(function() {
    var index = $('h3').index(this);
    $("p").eq(index).show();
    $("h3").eq(index).hide();
  });
  $('p').click(function() {
    var index = $('p').index(this);
    $("h3").eq(index).show();
    $("p").eq(index).hide();
  });
});
