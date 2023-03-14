document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const depositValueString = depositField.value;
    const depositValue = parseFloat(depositValueString);
    depositField.value = '';

    if (isNaN(depositValue)) {
        alert('Please enter an amount')
        return;
    }

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalString = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalString);

    const newTotalDeposit = depositValue + depositTotalAmount;
    depositTotal.innerText = newTotalDeposit;

    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceAmountString = balanceTotalAmount.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    const newBalanceAmount = balanceAmount + depositValue;
    balanceTotalAmount.innerText = newBalanceAmount;
})