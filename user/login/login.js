let allUserDetails = JSON.parse(localStorage.getItem("allUserDetails"));

console.log(allUserDetails);
let loginButton = document.getElementById("login");

let userName = document.getElementById("username");
 
let password = document.getElementById("password");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  let userNameValue = userName.value;
  let passwordValue = password.value; 
  let validUser = allUserDetails.find((user) => {
  
    return user.username === userNameValue && user.password === passwordValue;
  });
  if (!validUser) {
    console.log(validUser)
    alert("Invalid email or password");
    return;
  } else {
    console.log(validUser);
    localStorage.setItem("loginedUser", JSON.stringify(validUser));
    userName.value = "";
    password.value = "";
    window.location.href = "http://127.0.0.1:5500/pages/index.html";
  }
});
console.log(loginButton);
