const loginBtn = document.getElementById("login-btn");
const enter = document.getElementById("pin-number");
loginBtn.addEventListener("click", function () {
  const accountNumber = document.getElementById("account-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  if (accountNumber == "01748609307" && pinNumber == "6576") {
    window.location.href = "main.html";
  } else if (accountNumber === "" && pinNumber === "") {
    alert("Please enter Account Number And PIN Number");
  } else if (accountNumber === "") {
    alert("Please Enter Account Number");
  } else if (pinNumber === "") {
    alert("Please Enter PIN Number");
  } else {
    alert("Wrong Credentials !!");
  }
});
enter.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if (accountNumber == "01748609307" && pinNumber == "6576") {
      window.location.href = "main.html";
    } else if (accountNumber === "" && pinNumber === "") {
      alert("Please enter Account Number And PIN Number");
    } else if (accountNumber === "") {
      alert("Please Enter Account Number");
    } else if (pinNumber === "") {
      alert("Please Enter PIN Number");
    } else {
      alert("Wrong Credentials !!");
    }
  }
});
