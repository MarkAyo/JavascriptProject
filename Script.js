let userDetailDatabase = {};
function fillInDetails() {
  let userName = prompt("Enter Your Username");
  function validateUserName(userName) {
    if (userName.length > 0 && userName.length < 8) {
      return true;
    } else {
      return false;
    }
  }
  while (validateUserName(userName) == false) {
    userName = prompt("Username must be less than 8 digits");
  }
  if (userName == null) {
    return;
  }
  userDetailDatabase["Username"] = userName;

  let email = prompt("Enter your Email");
  function validateEmailAddress(email) {
    if ((email = "mark@gmail.com")) {
      return true;
    } else {
      return false;
    }
  }
  while (validateEmailAddress(email) == false) {
    email = prompt("Enter a valid email address");
  }
  if (email == null) {
    return;
  }
  userDetailDatabase["Email"] = email;

  let phoneNumber = prompt("Enter your Phone Number");
  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length < 11) {
      return false;
    } else if (phoneNumber.length == 11) {
      return true;
    }
  }
  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Phone number must be 11 digits");
  }
  if (phoneNumber == null) {
    return;
  }
  userDetailDatabase["Phone Number"] = phoneNumber;

  let password = prompt("Enter your password");
  function validatePassword(password) {
    if (password.length < 8) {
      return false;
    } else {
      return true;
    }
  }
  while (validatePassword(password) == false) {
    password = prompt("Password must be 8 digits");
  }
  if (password == null) {
    return;
  }
  userDetailDatabase["Password"] = password;

  let confirmPassword = prompt("Confirm your password");
  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }
  while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt("Password does not match, please try again!");
  }
  if (confirmPassword == null) {
    return;
  }
  userDetailDatabase["Confirm Password"] = confirmPassword;

  console.log(userDetailDatabase);
}

function getUserDetails(){
    alert(`Your Details\nUsername: ${userDetailDatabase.userName}\nPhone number: ${userDetailDatabase.phoneNumber}\nEmail: ${userDetailDatabase.email}\n`);
}

