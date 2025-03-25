const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {
  const accountNumber = document.getElementById("account-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  if (accountNumber == "01748609307" && pinNumber == "6576") {
    window.location.href = "main.html";
  } else if (accountNumber === "" && pinNumber === "") {
    alert("Please Enter Account Number & PIN");
  } else {
    alert("Wrong Credentials !!");
  }
});
