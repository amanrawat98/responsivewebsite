$(document).ready(function () {
  console.log("document is loaded");

  $(window).resize(function () {
    controlNavigation();
  });

  function controlNavigation () {
    if ($(window).width() >= 414) {
      $(".header-menuBar, .header-navlinks ul, .header-navlinks-button").show();
      $(".fa-bars, .fa-circle-xmark").hide();
    } else {
      $(".header-menuBar, .header-navlinks ul, .header-navlinks-button").hide();
      $(".fa-bars").show();
      $(".fa-circle-xmark").hide();
    }
  }

  controlNavigation();


  $(".fa-circle-xmark").click(function () {
    console.log("clicked");

    $(".header-menuBar, .header-navlinks ul, .header-navlinks-button").hide();
  });

  $(".fa-bars").click(function () {
    console.log("clicked");

    $(".header-menuBar, .header-navlinks ul, .header-navlinks-button").show();
    $(".fa-circle-xmark").show();
  });
});
