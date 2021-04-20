$(document).ready(function() {
  $("#top").hide();
  $('body').scroll(function () {
    if ($(window).width() < 600){
      if ($(this).scrollTop() > 150) {
        $("#top").fadeIn();
      } else {
        $("#top").fadeOut();
      }
    }
  });

  var toTopTime = 0, toTopStart;

  $('#top').on('touchstart', function(){
    var tempDate = new Date();
    toTopStart = tempDate.getTime();
  });

  $('#top').on('touchmove', function(e){
    var endX = e.touches[0].clientX;
    var endY = e.touches[0].clientY;

    var newX = $('body').width() - endX - ($(this).width()/2);
    var newY = $('body').height() - endY - ($(this).height()/2);

    if (newX >= 0 && newX <= ($('body').width() - $(this).width())) {
      $("#top").css("right", newX + "px");
      $("#toptext").css("right", newX + "px");
    }

    if (newY >= 0 && newY <= ($('body').height() - $(this).width())) {
      $("#top").css("bottom", newY + "px");
      $("#toptext").css("bottom", newY + "px");
    }
  });

  $('#top').on('touchend', function() {
    var tempDate = new Date();
    toTopTime = tempDate.getTime() - toTopStart;
    if (toTopTime < 100) {
      $('body').animate({ scrollTop: 0 }, "slow");
    }
  });

  var hold = false;

  $('#top').on('mousedown', function(){
    hold = true;
    var tempDate = new Date();
    toTopStart = tempDate.getTime();
  });

  $('body').on('mousemove', function(e){
    if (hold) {
      e.preventDefault();
      var endX = e.originalEvent.clientX;
      var endY = e.originalEvent.clientY;

      var newX = $('body').width() - endX - ($('#top').width()/2);
      var newY = $('body').height() - endY - ($('#top').height()/2);

      if (newX >= 0 && newX <= ($('body').width() - $('#top').width())) {
        $("#top").css("right", newX + "px");
        $("#toptext").css("right", newX + "px");
      }

      if (newY >= 0 && newY <= ($('body').height() - $('#top').width())) {
        $("#top").css("bottom", newY + "px");
        $("#toptext").css("bottom", newY + "px");
      }
    };
  });

  $('#top').on('mouseup', function() {
    hold = false;
    var tempDate = new Date();
    toTopTime = tempDate.getTime() - toTopStart;
    if (toTopTime < 100) {
      $('body').animate({ scrollTop: 0 }, "slow");
    }
  });

  $('body').on('dragstart', function() {
    return false;
  });
});
