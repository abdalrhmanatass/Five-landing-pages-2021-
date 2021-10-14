$().ready(function () {
  $("a.scroll").on("click", function (event) {
    var hash = this.hash;
    $("html, body").animate(
      { scrollTop: $(hash).offset().top },
      800,
      function () {}
    );
  });
});

var isLoaded = false;
$(window).scroll(function () {
  if ($(this).scrollTop() >= 200) {
    $("#navbar").addClass("noTransparrent");
  } else {
    $("#navbar").removeClass("noTransparrent");
  }

  if (!isLoaded) {
    if (checkVisible($("#statistics"))) {
      $(".circle")
        .circleProgress({
          staetAngle: -Math.PI / 2,
          fill: "#2575e6",
        })
        .on("circle-animation-progress", function (event, progress, stepValue) {
          $(this)
            .find("span")
            .html(Math.round(stepValue * 100) + "%");
        });
      isLoaded = true;
    }
  }
});
function checkVisible(elm, Eval) {
  Eval = Eval || "visible";

  var vpH = $(window).height(),
    st = $(window).scrollTop(),
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (Eval == "visible") return y < vpH + st && y > st - elementHeight;
  if (Eval == "above") return y < vpH + st;
}
