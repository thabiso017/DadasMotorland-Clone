// Function to validate the textboxes
function Validate(strName, intContact, strEmail, strMessage){
    if (strName==""){
        alert("Please fill in your name!");
    }

    else if(intContact==""){
        alert("Please fill in your contact number!");
        document.getElementById("contact").value="";
    }

    else if(isNaN(intContact) || (intContact.length !==10)) {
        alert("Contact number is invalid");
        document.getElementById("contact").value="";
    }

    else if(strEmail ==""){
        alert("Please fill in your email adress")
        document.getElementById("email").value="";
    }

    else if (strMessage == ""){
        alert("Please fill in your message");
    }

    else{
        document.getElementById("display").innerHTML = "Good Day " + strName + " Your enquiry has been sent successfully.";
    }
}

// Function to validate the checkboxes
function validateCheckbox(blnContact, blnEmail){
    if (blnContact.checked == false || blnEmail == false) {
        alert("Please select preferred contact method");
        return false;
    }

    else{
        return true;
    }
}

// Function for iteration
function iteration() {
    var strNames;

    for (let i = 1; i <= 3; i++){
        strNames= prompt("Enter name");
       
        document.write(strNames + "<br>");
    }
}

// Function to calculate Total Amount
function computeTotalPrice(){
    var Price;
    
    if (document.getElementById("DBS").onclick){
       Price = parseInt( 7995000); 
    }
    else if (document.getElementById("continentalGT").onclick){
      Price = parseInt(8995000);
    }  
    else if (document.getElementById("812").onclick){
        Price = parseInt(9090000);
    }
    else if (document.getElementById("911").onclick){
        Price = parseInt(4109000);
    }
    else if (document.getElementById("Wraith").onclick){
        Price = parseInt(8999000);
    }


    else if (document.getElementById("DBX707").onclick){
        Price = parseInt(6500000);
    }
    else if (document.getElementById("X6 M").onclick){
        Price = parseInt(2999000);
    }
    else if (document.getElementById("Purosangue").onclick){
        Price = parseInt(9000000);
    }
    else if (document.getElementById("Urus").onclick){
        Price = parseInt(6450000);
    }
    else if (document.getElementById("Cayenne").onclick){
        Price = parseInt(4350000);
    }


    else if (document.getElementById("Bentayga").onclick){
        Price = parseInt(6450000);
    }
    else if (document.getElementById("Range Rover").onclick){
        Price = parseInt(3920000);
    }
    else if (document.getElementById("Range Rover Sport").onclick){
        Price = parseInt(2831000);
    }
    else if (document.getElementById("G63").onclick){
        Price = parseInt(4299000);
    }
    else if (document.getElementById("Cullinan").onclick){
        Price = parseInt(15000000);
    }
    
  return parseInt(Price);
}

// Function to calculate Deposit Amount
function computeDepositAmt(){
    var decDeposit;
    decDeposit = (computeTotalPrice() * 0.1);
    return (decDeposit); 
}

// Function to calculate Tax Amount
function computeTaxAmt(){
    var TaxAmt;
    TaxAmt = (computeTotalPrice() * 0.15);
    return (TaxAmt);
}

// Function to calculate Total Amount Due & Monthly Payments
function computeTotalDue(){
    var TotalAmt;

    let Rands = Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR"
    })

    TotalAmt = ( computeTotalPrice()- computeDepositAmt() + computeTaxAmt());
    alert("Total Amount is: " + Rands.format(TotalAmt) + " and monthly repayment is " + Rands.format(TotalAmt/60));
}
