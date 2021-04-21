$(document).ready(function () {

  $("#contact").on("submit", function() {
    // Assume that the form input is valid.
    var valid = true;

    // Check whether the name was provided and show an error if not.
    var name_valid = $("#name").prop("validity").valid;
    if(name_valid) {
      $("#name_error").addClass("hidden");
    } else {
      $("#name_error").removeClass("hidden");
      valid = false;
    };

    // Check whether the email is valid and show an error if not.
    var email_valid = $("#email").prop("validity").valid;
    if(email_valid) {
      $("#email_error").addClass("hidden");
    } else {
      $("#email_error").removeClass("hidden");
      valid = false;
    };

    // Check whether a message was provided and show an error if not.
    var message_valid = $("#message").prop("validity").valid;
    if(message_valid) {
      $("#message_error").addClass("hidden");
    } else {
      $("#message_error").removeClass("hidden");
      valid = false;
    };

    // Tell the browser whether it's okay to submit the form (true).
    return valid;
  });

});
