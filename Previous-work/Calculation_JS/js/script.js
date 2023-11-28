
    function total(){
    var priceValue = document.getElementById("proprice").value;//to get the value from price text field
    var qtyValue = document.getElementById("proqty").value;// to get the value of product quantity
    var totalPrice = priceValue*qtyValue;// total price of the whole quantity
    
    var discountValue = document.getElementById("prodiscount").value;//to get the value of discount text field
    var discountAmount = totalPrice*(discountValue*0.01);// calculation of discounted amount.
    var totalAfterdiscount = totalPrice - discountAmount;// calculation of the total amount after discount
    
    var vatValue = document.getElementById("provat").value;// to get the value of VAT text field
    var percentageofVAT = vatValue*0.01;// calculation to get value after VAT percentage
    
    var vatAmount = totalAfterdiscount * percentageofVAT;//calculation to get the total VAT amount
    var grandTotal = totalAfterdiscount + vatAmount;// calculation for get the total price after put VAT

    document.getElementById("totalprice").value = grandTotal; // to connect grandTotal value and insert that value to grandTotal text field
    document.getElementById("show-result").style.display='block';// to display the result box once the Get total button clicked
    //as I have hidden that result box hidden

    document.getElementById("show-result").innerHTML = "<h1>RESULT</h1><Br><br>Total Price:" 
    + totalPrice + "<br><br> Discount Amount:" + discountAmount + " <br><br>Total After Discount:" 
    + totalAfterdiscount + "<br><br> VAT Amount:" + vatAmount +"<br><br> Grand Total:" + grandTotal;
    }
     

    

