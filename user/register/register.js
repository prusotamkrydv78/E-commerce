let allUserDetails = [];
let allExistingUserDetails =
  JSON.parse(localStorage.getItem("allUserDetails")) || [];
console.log(allExistingUserDetails);
let register = document.getElementById("register");

let inputField = document.querySelectorAll("input");

let fullName = document.getElementById("fullname");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

register.addEventListener("click", (e) => {
  e.preventDefault();
  for (input of inputField) {
    if (input.value.length <= 0) {
      alert(`fill the ${input.name}`);
      return;
    }
  }
  let fullNameValue = fullName.value;
  let emailValue = email.value;
  let passwordValue = password.value;
  let confirmPasswordValue = confirmPassword.value;
  let userNameValue = userName.value;

  let userDetails = {
    fullName: fullNameValue,
    email: emailValue,
    password: passwordValue,
    confirmPassword: confirmPasswordValue,
    username: userNameValue, 
    addtocartproducts:[]
  };

  let isUserExist = allExistingUserDetails.find((userDetails) => {
    return userDetails.email === emailValue && userDetails.username === userNameValue;
  });

  if (fullNameValue.length < 5) {
    alert("Full Name should be at least 5 characters");
    return;
  } else if (passwordValue != confirmPasswordValue) {
    alert("Password does not match to confirm password");
    return;
  } else if (isUserExist) {
    alert("user with this email already exists");
    return;
  } else {
    allUserDetails.push(userDetails);
    allExistingUserDetails = allExistingUserDetails.concat(allUserDetails);
    function getUniqueElements(arr) {
      let uniqueSet = new Set(arr);
      let uniqueArray = Array.from(uniqueSet);
      return uniqueArray;
    }
    let uniqueUsers = getUniqueElements(allExistingUserDetails) 
    localStorage.setItem(
      "allUserDetails",
      JSON.stringify(uniqueUsers)
    );

    clearInput();
    // Simulate a mouse click:
    window.location.href = "http://127.0.0.1:5500/user/login/login.html";
  }
});

function clearInput() {
  fullName.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
  userName.value = "";
}

// Original data structure
