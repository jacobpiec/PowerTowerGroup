$(document).ready(function () {
  /* Makes the rest of the page appear when see more is clicked */
  $("#down").on("click", function () {
    $("#rest").removeClass("invisible");
  });
});
