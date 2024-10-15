// Function to validate the textboxes

// 040817536780

function Validate(strName, intContact, strEmail){
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

    else{
        document.getElementById("display").innerHTML = "Good Day " + strName + " Your enquiry has been sent successfully."
    }
}

// Function to validate the textarea of the User's message
function validateTextarea(strMessage){
    if (strMessage == ""){
        alert("Please fill in your message");
    }
}

// function iteration() {
//     loopVar = 1;    

//     while (loopVar <= 5 ){
//         document.getElementById("output").innerHTML =(" The number is " + loopVar +".");
//         document.getElementById("output").innerHTML =("<br>")
//         loopVar++;
//     }
// }


function iteration() {
    var strNames;

    for (let i = 1; i <= 3; i++){
        strNames= prompt("Enter name");
       
        document.write(strNames) 
        document.write("<br>")
    }
   
}



// Function to calculate Total Amount
function computeTotalPrice(){
    var Price;

    if (document.getElementById("DBS").innerHTML){
        Price =7995000;
    }
    else if (document.getElementById("continentalGT").innerHTML){
        Price =7500000;
    }
    else if (document.getElementById("812").innerHTML){
        Price =9090000;
    }
    else if (document.getElementById("911").innerHTML){
        Price =4109000;
    }
    else if (document.getElementById("Wraith").innerHTML){
        Price =8999000;
    }
  return Price;
    
}

// Function to calculate Deposit Amount
function computeDepositAmt(){
    var decDeposit;
    decDeposit = (computeTotalPrice() * 0.1)
    return decDeposit
}

// Function to calculate Tax Amount
function computeTaxAmt(){
    var TaxAmt;
    TaxAmt = (computeTotalPrice() * 0.15)
    return TaxAmt
}

// Function to calculate Total Amount Due & Monthly Payments
function computeTotalDue(){
    var TotalAmt;
    TotalAmt = ( computeTotalPrice()- computeDepositAmt() + computeTaxAmt())
    alert("Total Amount is: R" + TotalAmt + " and monthly repayment is R" + TotalAmt/60)
    
}

// function salaryBalance(decIncome){
//     // decIncome = prompt("Please enter your salary")
//     alert("Your monthly balance of your salary is: " + decIncome - )
// }












// function Validate(){
//     var x = document.form.fname.value;

//     if (x==""){
//         alert("Please fill in your name.");
//     }
// }