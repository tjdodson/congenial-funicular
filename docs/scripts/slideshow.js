$(document).ready(function() {

  // Keep track of the current slide number
  var slideIndex = 0;

  $("#prev").on('click', function() {
    // Get all the slides
    var slides = $(".featured");

    // Go to the previous slide or wrap around
    slideIndex = slideIndex - 1;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    // Hide all the slides and then show the current slide number
    slides.addClass("hidden");
    slides.eq(slideIndex).removeClass("hidden");
  });

  $("#next").on('click', function() {
    // Get all the slides
    var slides = $(".featured");

    // Go to the next slide or wrap around
    slideIndex = slideIndex + 1;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    // Hide all the slides and then show the current slide number
    slides.addClass("hidden");
    slides.eq(slideIndex).removeClass("hidden");
  });

});
