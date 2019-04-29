$(document).ready(function() {
  //Username, Password, Security answer and button saved a vars
  var username = $("input[type=text]");
  var password = $("input[type=password]");
  var security = $("#securityForm");
  var securityInput = $("#securityInput");
  button = $("button");
  security.hide();
  //saves the text in the object as a variable
  var usernameTxt = $("input[type=text]").val();
  var passwordTxt = $("input[type=password]").val();
  var securityTxt = $("#securityInput").val();
  //calls the toggle button funct.
  toggleButton();
  //adds events for the username password and security question fields
  username.keypress(toggleButton).keyup(toggleButton);
  password.keypress(toggleButton).keyup(toggleButton);
  securityInput.keypress(toggleButton).keyup(toggleButton);
  //the toggle function determines if there is text
  //in the username password fields and if yes, the sign in button is actived.
  function toggleButton() {
    usrLen = username.val().length;
    pwdLen = password.val().length;
    secLen = securityInput.val().length;
    if (usrLen != 0 && pwdLen != 0) {
      //show security question
      security.show();
      if (secLen != 0) {
        //activatebutton
        button.removeAttr("disabled").addClass("activeButton");
      }
    } else {
      //disabled button
      button.attr("disabled", "disabled");
      button.removeClass("activeButton");
    }
  }
});