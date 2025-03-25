document.getElementById("cash-out-btn").addEventListener("click", function () {
  const mainBalance = parseFloat(
    document.getElementById("main-balance").innerText
  );
  const cashoutAmmount = parseFloat(
    document.getElementById("cashout-ammount").value
  );

  const updatedMainBalance = mainBalance - cashoutAmmount;
  document.getElementById("main-balance").innerText = updatedMainBalance;
});
