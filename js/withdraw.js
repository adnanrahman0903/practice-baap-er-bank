document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawInputString = withdrawAmount.value;
    const withdrawFieldValue = parseFloat(withdrawInputString);
    withdrawAmount.value = '';

    if (isNaN(withdrawFieldValue)) {
        alert('Please enter an amount')
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const withdrawValue = parseFloat(withdrawTotalString);

    const balanceTotal = document.getElementById('balance-total');
    const balanceInputString = balanceTotal.innerText;
    const balanceValue = parseFloat(balanceInputString);

    if (withdrawFieldValue > balanceValue) {
        alert('you cannot withdraw more than your balance');
        return;
    }

    const newWithdrawAmount = withdrawFieldValue + withdrawValue;
    withdrawTotal.innerText = newWithdrawAmount;

    const newBalance = balanceValue - withdrawFieldValue;
    balanceTotal.innerText = newBalance;
})