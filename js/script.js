$(document).ready(function() {
  $("#js").click(function() {
    $("#js-def").show();
    $("#js").hide();
  });

  $("#js-def").click(function() {
    $("#js").show();
    $("#js-def").hide();
  });
});
