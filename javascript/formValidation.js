
//Function for validating the form 
function validFunction()
{
    var state=true;
 
    //country select
    var country_var=document.getElementById("selectCountry").value;
    document.getElementById("selectCountryError").textContent="";
    if(country_var=="")
    {
        document.getElementById("selectCountryError").textContent="Please select your Country";
        
        state=false;
       
      
    }


    //city select
    var city_var=document.getElementById("selectCity").value;
    document.getElementById("selectCityError").textContent="";
    if(city_var=="")
    {
        document.getElementById("selectCityError").textContent="Please select your City";
       
        state=false;
       
      
    }



    // state selection
    var state_var=document.getElementById("selectState").value;
    document.getElementById("selectStateError").textContent="";
    if(state_var=="")
    {
        document.getElementById("selectStateError").textContent="Please select your State";
        state=false;
       
      
    }

    //Evaluating address input
    var address_var=document.getElementById("txtAddress").value;
    document.getElementById("txtAddressError").textContent="";
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if(!letterNumber.test(address_var))
    {
        document.getElementById("txtAddressError").textContent="Enter your current address";
        document.getElementById("txtAddress").focus();
        state=false;
      
        
    }

    // Evaluating date of birth input
   
    var dob_var=document.getElementById("dateDob").value;
    document.getElementById("dateDobError").textContent="";
    if(dob_var=="")
    {
        document.getElementById("dateDobError").textContent="Enter your date of Birth";
        document.getElementById("dateDob").focus();
        state=false;
       
      
    }

   // gender validation

    var gender=document.querySelector('input[name="gender"]:checked');

    document.getElementById("radioGenderError").textContent="";
    if(gender==null)
    {
        document.getElementById("radioGenderError").textContent="Please select your Gender";
        
        state=false;
      
      
    }

    //password validation

    var password_var=document.getElementById("idPassword").value;
    var letters = /^[A-Za-z]+$/;

    document.getElementById("idPasswordError").textContent="";
    if(!letters.test(password_var))
    {
        document.getElementById("idPasswordError").textContent="Enter Password";
        document.getElementById("idPassword").focus();
        state=false;
       
      
    }
    var confirmPassword_var=document.getElementById("confirmPassword").value;
    document.getElementById("confirmPasswordError").textContent="";
    if(password_var!=confirmPassword_var)
    {
        document.getElementById("confirmPasswordError").textContent="Please enter the correct password";
        document.getElementById("confirmPassword").focus();
        state=false;
    
      
    }

     // Evaluating email input
    
    var email=document.getElementById("txtEmail").value;
    document.getElementById("txtEmailError").textContent="";
    if(email!=="")
    {
        var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (!filter.test(email)) 
        {
            document.getElementById("txtEmailError").textContent="Please provide a valid email address";
            document.getElementById("txtEmail").focus();
            state=false;
           
            
         }
        
    }
    if(email=="")
    {
        document.getElementById("txtEmailError").textContent="Please provide a valid email address";
        document.getElementById("txtEmail").focus();
        state=false;
        

    }

     // Evaluating contact input
    

    var contact_var=document.getElementById("numberContact").value;
    var alterContact_var=document.getElementById("numberAlternativeContact").value;

    document.getElementById("numberContactError").textContent="";
    document.getElementById("numberAlternativeContactError").textContent="";
    if(alterContact_var!=""){
    if(alterContact_var>9999999999 || alterContact_var<600000000)
    {
        document.getElementById("numberAlternativeContactError").textContent="The field is empty or wrong number is entered";
        document.getElementById("numberAlternativeContact").focus();
        
        state=false;
        
    }
    }


   
    if(contact_var=="" || contact_var>9999999999 || contact_var<600000000)
    {
        document.getElementById("numberContactError").textContent="The field is empty or wrong number is entered";
        document.getElementById("numberContact").focus();
        
        state=false;
       
    }

    // Evaluating name input
    
    var name_var=document.getElementById("txtFirstName").value;
    var namemiddle_var=document.getElementById("txtMiddleName").value;
    var namelast_var=document.getElementById("txtLastName").value;
    document.getElementById("firstNameError").textContent="";
    document.getElementById("middleNameError").textContent="";
    document.getElementById("lastNameError").textContent="";
    var letters = /^[A-Za-z]+$/;
    if(!letters.test(namelast_var))
    {
        document.getElementById("lastNameError").textContent=" Name field is empty or incorrect.";
        document.getElementById("txtLastName").focus();
        
        state=false;
     
    }
    if(!letters.test(namemiddle_var))
    {
        document.getElementById("middleNameError").textContent=" Name field is empty or incorrect.";
        document.getElementById("txtMiddleName").focus();
        
        state=false;
        
        
    }
    if(!letters.test(name_var))
    {
        document.getElementById("firstNameError").textContent=" Name field is empty or incorrect.";
        document.getElementById("txtFirstName").focus();
        
        state=false;
       
        
    }


    // alert if all the fields are correctly filled
    if(state==true)
    {
        alert("Thanks for Registering! Form Successfully Submitted");
        return true;
    }



}
