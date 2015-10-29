$(document).ready(function() {
  $("#main-body .btn").click(function() {
      var $btn = $(this);

      $btn.button('loading');
      $btn.addClass('loading');
      // reset the button state using
      setTimeout(function () {
          $btn.button('reset');
          $btn.removeClass('loading')
      }, 1000);
  });

  $("#login-form").validate({
      //set this to false if you don't what to set focus on the first invalid input
      focusInvalid: false,
      //by default validation will run on input keyup and focusout
      //set this to false to validate on submit only
      onkeyup: false,
      onfocusout: false,
      //by default the error elements is a <label>
      errorElement: "span",
      //place all errors in a <div id="errors"> element
      errorPlacement: function(error, element) {
          error.appendTo("span#form-message");
          $("#form-message").addClass("has-error");
      },
      rules: {
          "username": {
              required: true,
              minlength: 5
          },
          "password": {
              required: true,
              minlength: 6
          }
      },
      messages: {
          "username": {
              required: "El nombre de Usuario no existe",
              minlength: "Usuario must be at least 5 characters"
          },
          "password": {
              required: "El nombre de Usuario no existe",
              minlength: "Usuario must be at least 6 characters"
          }
      }
    });


});
