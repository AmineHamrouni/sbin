$(document).ready(function () {
  // Close button
  $(".login-pop__close").click(function () {
    $('.login-pop').hide();
  });
  // open button
  $(".top-menu__login").click(function () {
    $('.login-pop').show();
  });
  //On scroll change header background
  $(window).scroll(function () {
    //var firstSection = $(".section-about");
    //var position = firstSection.position();
    if ($(document).scrollTop() < 100) {
      $(".top-menu").css("background-color", "transparent");
    } else {
      $(".top-menu").css("background-color", "rgba(51, 157, 214, 0.8)");
    }
  });
  $('#section-hero__slider').sliderPro({
    width: 1200,
    autoplayDelay: 5000,
    autoplayDirection: 'backwards',
    rightToLeft: true
  });

});