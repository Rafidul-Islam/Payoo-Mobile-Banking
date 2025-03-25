document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "block";
  document.getElementById("cash-out-section").style.display = "none";
  document.getElementById("transfer-section").style.display = "none";
  document.getElementById("bonus-section").style.display = "none";
  document.getElementById("pay-bill-section").style.display = "none";
  document.getElementById("transaction-section").style.display = "none";
});
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cash-out-section").style.display = "block";
  document.getElementById("transfer-section").style.display = "none";
  document.getElementById("bonus-section").style.display = "none";
  document.getElementById("pay-bill-section").style.display = "none";
  document.getElementById("transaction-section").style.display = "none";
});
document.getElementById("transfer").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cash-out-section").style.display = "none";
  document.getElementById("transfer-section").style.display = "block";
  document.getElementById("bonus-section").style.display = "none";
  document.getElementById("pay-bill-section").style.display = "none";
  document.getElementById("transaction-section").style.display = "none";
});
document.getElementById("bonus").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cash-out-section").style.display = "none";
  document.getElementById("transfer-section").style.display = "none";
  document.getElementById("bonus-section").style.display = "block";
  document.getElementById("pay-bill-section").style.display = "none";
  document.getElementById("transaction-section").style.display = "none";
});
document.getElementById("pay-bill").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cash-out-section").style.display = "none";
  document.getElementById("transfer-section").style.display = "none";
  document.getElementById("bonus-section").style.display = "none";
  document.getElementById("pay-bill-section").style.display = "block";
  document.getElementById("transaction-section").style.display = "none";
});
document.getElementById("transactions").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cash-out-section").style.display = "none";
  document.getElementById("transfer-section").style.display = "none";
  document.getElementById("bonus-section").style.display = "none";
  document.getElementById("pay-bill-section").style.display = "none";
  document.getElementById("transaction-section").style.display = "block";
});
