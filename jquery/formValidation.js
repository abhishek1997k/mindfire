


$(function() {
$( "#tabs" ).tabs();
});


$(function(){

    $("#tab2").hide();
    $("#tab3").hide();
    $("#successPage").hide();

$('#buttonTab1').click(function() {
   
    var letters = /^[A-Za-z]+$/;
    var statusTab1= true;


    var lastNameVar=$('#txtLastName').val();
    $('#txtLastNameError').text("");
    if(!letters.test(lastNameVar))
     {
        $('#txtLastNameError').text("Please enter the correct name.");
        statusTab1=false;
        $("#txtLastName").focus();
       
     }



    var nameVar=$('#txtFirstName').val();
    $('#txtFirstNameError').text("");
    if(!letters.test(nameVar))
    {
        $('#txtFirstNameError').text("Please enter the correct name.");
        statusTab1=false;
        $("#txtFirstName").focus();
        
    }


    var gender=document.querySelector('input[name="gender"]:checked');

    $("#radioGenderError").text("");
    if(gender==null)
    {
        $("#radioGenderError").text("Please select your Gender");
        
        statusTab1=false;
      
      
    }

    var dob_var=$("#dateDob").val();
    $("#dateDobError").text("");
    if(dob_var=="")
    {
        $("#dateDobError").text("Enter your date of Birth");
        statusTab1=false;
        
       
      
    }


    
    if(statusTab1==true){
        $("#tab2").show();
       
        $('#txtFirstName').prop("disabled", true);
        $('#txtLastName').prop("disabled", true);
        $('.form-check-input').prop("disabled", true);
        $('#dateDob').prop("disabled", true);
        $('#tab2').click();
        $("#buttonTab1").hide();

    }

   
});

});

$(function(){

$('#buttonTab2').click(function() {

    var statusTab2= true;


    //country select
    var country_var=$("#selectCountry").val();
    $("#selectCountryError").text("");
    if(country_var=="1")
    {
        $("#selectCountryError").text("Please select your Country");
        statusTab2=false;
    }

    // state selection
    var state_var=$("#selectState").val();
    $("#selectStateError").text("");
    if(state_var=="2")
    {
        $("#selectStateError").text("Please select your State");
        statusTab2=false;
       
      
    }


    //city select
    var city_var=$("#selectCity").val();
    $("#selectCityError").text("");
    if(city_var=="3")
    {
        $("#selectCityError").text("Please select your City");
       
        statusTab2=false;
       
      
    }
    
    //Evaluating address input
    var address_var=$("#txtAddress").val();
    $("#txtAddressError").text("");
    var letterNumber = /^.*[a-zA-Z0-9][^a-zA-Z0-9]*$/;
    if(!letterNumber.test(address_var))
    {
        $("#txtAddressError").text("Enter your current address");
        $("#txtAddress").focus();
        statusTab2=false;
      
        
    }

    // evaluating address ends here






    // Evaluating contact input
    

    var contact_var=$("#txtContact").val();
    

    $("#txtContactError").text("");
    


   
    if(contact_var=="" || contact_var>9999999999 || contact_var<600000000)
    {
        $("#txtContactError").text("The field is empty or wrong number is entered");
        $("#txtContact").focus();
        
        statusTab2=false;
       
    }

    //contact input verification ends

    // email verification

    var email=$("#txtEmail").val();
    $("#txtEmailError").text("");
    if(email!=="")
    {
        var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (!filter.test(email)) 
        {
            $("#txtEmailError").text("Please provide a valid email address");
            $("#txtEmail").focus();
            statusTab2=false;
           
            
         }
        
    }
    if(email=="")
    {
        $("#txtEmailError").text("Please provide a valid email address");
        $("#txtEmail").focus();
        statusTab2=false;
        

    }

    //email verification ends

    if(statusTab2==true){
        $('#txtAddress').prop("disabled", true);
        $('#txtContact').prop("disabled", true);
        $('.form-check-input').prop("disabled", true);
        $('#txtEmail').prop("disabled", true);
        $('#selectCountry').prop("disabled", true);
        $('#selectState').prop("disabled", true);
        $('#selectCity').prop("disabled", true);
        $("#tab3").show();
        $('#tab3').click();
        $('#buttonTab2').hide();

    }
   
   
});

});



$(function(){

    $('#registrationButton').click(function() {
    
    var statusTab3= true;

    var password_var=$("#txtPassword").val();
    var letters = /^[A-Za-z]+$/;

    $("#txtPasswordError").text("");
    if(!letters.test(password_var))
    {
        $("#txtPasswordError").text("Enter Password");
        $("#txtPassword").focus();
        $('#captchaSubmit').prop("disabled", false);
        $('#captchaResponse').prop("disabled", false);
        $('#captchaRefresh').show();

        $('#captchaRefresh').click();

        $('#registrationButton').hide();
        statusTab3=false;
       
      
    }
    var confirmPassword_var=$("#txtConfirmPassword").val();
    $("#txtConfirmPasswordError").text("");
    if(password_var!=confirmPassword_var)
    {
        $("#txtConfirmPasswordError").text("Please enter the correct password");
        $("#txtConfirmPassword").focus();
        $('#captchaSubmit').prop("disabled", false);
        $('#captchaResponse').prop("disabled", false);
        $('#captchaRefresh').show();
        $('#captchaRefresh').click();
        $('#registrationButton').hide();
        statusTab3=false;
    
      
    }

    if(statusTab3==true){

        $('#txtConfirmPassword').prop("disabled", true);
        $('#txtPassword').prop("disabled", true);
        $('#registrationButton').hide();
        $('#successPage').show();
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').hide();


        $('#successPage').click();

        
        
    }

});

});
