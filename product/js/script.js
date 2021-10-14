$().ready(function () {
  $('a[data-toggle="collapse"]').click(function () {
    var check = $(this).children("svg");
    if (check.attr("data-icon") == "angle-up") {
      check.attr("data-icon", "angle-down");
    } else {
      check.attr("data-icon", "angle-up");
    }
  });
  $(function () {
    $("#commentForm").validate();
  });
});
function playPause() {
  var myVideo = document.getElementById("video1");

  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}
