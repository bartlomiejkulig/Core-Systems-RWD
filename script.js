// ######### Menu opening ##########
$(document).ready(function() {
  $("#menu-button").on("click", function() {
    $("header nav").toggleClass("menu-opened");
    $(".menu-button-bar1").toggleClass("animate1");
    $(".menu-button-bar2").toggleClass("animate2");
    $(".menu-button-bar3").toggleClass("animate3");
  });

  $(".menu-content li").on("click", function() {
    $("header nav").removeClass("menu-opened");
  });


// ############## Scrolling ##########


  $("a").on("click", function() {
    $("html, body").animate({
      scrollTop: $( $(this).attr("href")).offset().top
    }, 800);
  });


// #########  Shoiwng elements section 2 #######


  var $part1 = $(".section-two-part-1-content");
  var $part2 = $(".section-two-part-2-content");
  var topPosition1 = $("#section-two-part-1").offset().top;
  var topPosition2 = $("#section-two-part-2").offset().top;

  $part1.hide();
  $part2.hide();

  $(window).on("scroll resize", function() {
    var scrolling = $(document).scrollTop() + $(window).height();

    if (window.matchMedia("(max-width: 991px)").matches) {
      $part1.show();
    } else if (scrolling  > topPosition1 + 500) {
      $part1.fadeIn(1000);
    }

    if (window.matchMedia("(max-width: 991px)").matches) {
      $part2.show();
    } else if (scrolling  > topPosition2 + 500) {
      $part2.fadeIn(1000);
    }
  });
});


// ######################
