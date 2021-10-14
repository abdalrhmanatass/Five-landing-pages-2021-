$(window).scroll(function () {
  if ($(this).scrollTop() >= 500) {
    $("#navBar").addClass("noTransparrent");
  } else {
    $("#navBar").removeClass("noTransparrent");
  }
});
$().ready(function () {
  $("a.scroll").on("click", function () {
    var hash = this.hash;

    $("html, body").animate(
      { scrollTop: $(hash).offset().top - 290 },
      800,
      function () {}
    );
  });
  $(".timer").countTo();
  $("#commentForm").validate();
});
