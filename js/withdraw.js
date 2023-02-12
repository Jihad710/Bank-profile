// add event handler with the withdraw button 


// step 1: 

document.getElementById('btn-withdraw').addEventListener('click',function (){
    //  step 2:L
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    
    // step :3
    const withdrawTotalElement = document.getElementById('Widraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawTotalString);

       // step 7 clear the deposit profile 

       withdrawField.value = '';
    
   

    // step5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if(newWithDrawAmount > previousBalanceTotal){
        alert('You Have No sufficient Balance')
        return;
    }
   
    // step 4: calculate total withdrw amount

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 6 : calculate balance total

    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;





    
   

})