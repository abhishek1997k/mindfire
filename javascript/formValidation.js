
//Function for validating the form 
function validFunction()
{
    var counter=5;

    // Evaluating name input
    var name_var=document.forms["myform"]["name"].value;
    document.getElementById("nameError").textContent="";
    if(name_var=="")
    {
        document.getElementById("nameError").textContent=" Name field is empty.";
        counter=counter-1;
        
    }

    // Evaluating contact input
    var contact_var=document.forms["myform"]["contact"].value;
    document.getElementById("contactError").textContent="";
    if(contact_var=="" || contact_var>9999999999 || contact_var<600000000)
    {
        document.getElementById("contactError").textContent="The field is empty or wrong number is entered";
        counter=counter-1;
       
    }

    // Evaluating email input
    var email=document.forms["myform"]["email"].value;
    document.getElementById("emailError").textContent="";
    if(email!=="")
    {
        var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (!filter.test(email)) 
        {
            document.getElementById("emailError").textContent="Please provide a valid email address";
            counter=counter-1;
            
         }
        
    }
    if(email=="")
    {
        document.getElementById("emailError").textContent="Please provide a valid email address";
        counter=counter-1;

    }
    
    // Evaluating date of birth input
    var dob_var=document.forms["myform"]["dob"].value;
    document.getElementById("dateError").textContent="";
    if(dob_var=="")
    {
        document.getElementById("dateError").textContent="Enter your date of Birth";
        counter=counter-1;
      
    }

    //Evaluating addressd input
    var address_var=document.getElementById("address").value;
    document.getElementById("addressError").textContent="";
    if(address_var=="")
    {
        document.getElementById("addressError").textContent="Enter your current address";
        counter=counter-1;
        
    }

    // alert if all the fields are correctly filled
    if(counter==5)
    {
        alert("Thanks for Registering! Form successfully submitted")
        return true;
    }



}
