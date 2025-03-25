document.getElementById("add-money-btn").addEventListener("click", function () {
  const mainBalance = parseFloat(
    document.getElementById("main-balance").innerText
  );
  const ammount = parseFloat(document.getElementById("ammount").value);

  const updatedMainBalance = mainBalance + ammount;
  document.getElementById("main-balance").innerText = updatedMainBalance;

  const transactionContainer = document.getElementById("transaction-section");
  const p = document.createElement("p");
  p.innerText = `Added ${ammount} to account.`;
  p.classList.add("bg-gray-200", "rounded", "border-1","p-2","mb-2","font-bold");
  transactionContainer.appendChild(p);
});
