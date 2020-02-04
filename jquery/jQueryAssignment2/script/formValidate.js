$(document).ready(function(){

    $('#submitButton').click(function(){

    var letters = /^[A-Za-z]+$/;
    var status= true ;

    var counter=$('.txtCity').length;
    var flag=0;
    $('.txtCity').each(function(){  
        $(this).siblings("#txtCityError").text("");
        var letters = /^[A-Za-z]+$/;
        if(flag<counter-1){
        if(!letters.test($(this).val()))
        { 
                $(this).siblings("#txtCityError").text("Incorrect field");
                status=false;

        
        } 
        flag++;
    }
    });

    var counter=$('.txtAddressNew').length;
    var flag=0;
    $('.txtAddressNew').each(function(){  
        $(this).siblings("#txtAddressError").text("");
        var letterNumber = /^.*[a-zA-Z0-9][^a-zA-Z0-9]*$/;
        if(flag<counter-1){
        if(!letterNumber.test($( this ).val()))
        { 
                $(this).siblings("#txtAddressError").text("Incorrect field");
                status=false;
        
        } 
        flag++;
    }
    });


    $('.txtContact').each(function(){ 
        
        $(this).siblings("#txtContactError").text("");
         var numbers=/^[0-9]*$/;
         var inputNumber= $( this ).val();
        if(!numbers.test($(this).val()) || !(inputNumber.length==10))
        { 
                $(this).siblings("#txtContactError").text("Incorrect Field");
                $(this).focus();
                status=false;
        } 
        
    });

    var aadharVar=$('#txtAdhar').val();
    $('#txtAdharError').text("");
    var numbers=/^[0-9]*$/;
    if(!numbers.test(aadharVar) || !(aadharVar.length===12)){
        $('#txtAdharError').text("Incorrect field");
        $("#txtAdhar").focus();
        status=false;
    }


    var pan=$("#txtPan").val();
    if(pan!==""){
        var filter = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        $("#txtPanError").text("");
        
        if (!filter.test(pan)) {
            $("#txtPanError").text("Incorrect Field(Pan is case sensetive)");
            $("#txtPan").focus();
            status=false;
            
        }
        
    }
    if(pan==""){
        $("#txtPanError").text("Incorrect Field");
        $("#txtPan").focus();
        status=false;
    } 


    var email=$("#txtEmail").val();
    $("#txtEmailError").text("");
    if(email!==""){
        var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (!filter.test(email)) 
        {
            $("#txtEmailError").text("Incorrect field");
            $("#txtEmail").focus();
            status=false;
            
            
         }
        
    }
    if(email==""){
        $("#txtEmailError").text("Incorrect field");
        $("#txtEmail").focus();
        status=false;
       
        

    }

    var lastNameVar=$('#txtLastName').val();
    $('#txtLastNameError').text("");
    if(!letters.test(lastNameVar)){
        $('#txtLastNameError').text("Incorrect Field.");
        $("#txtLastName").focus();
        status=false;
       
    }

    var middleNameVar=$('#txtMiddleName').val();
    $('#txtMiddleNameError').text("");
    if(middleNameVar!=""){
    if(!letters.test(middleNameVar)){
        $('#txtMiddleNameError').text("Incorrect Field.");
        $("#txtMiddleName").focus();
        status=false;
    }
    }


    var nameVar=$('#txtFirstName').val();
    $('#txtFirstNameError').text("");
    if(!letters.test(nameVar)){
        $('#txtFirstNameError').text("Incorrect Field");
        $("#txtFirstName").focus();
        status=false;
        
    }
    

    

    var counter=$('.txtZipcode').length;
    var flag=0;
    $('.txtZipcode').each(function(){  
        $(this).siblings("#txtZipcodeError").text("");
        if(flag<counter-1){
            var zip=$( this ).val();
            var numbers=/^[0-9]*$/;
            
        if(!numbers.test(zip)||zip.length!==6){ 
                $(this).siblings("#txtZipcodeError").text("Incorrect field");
                status=false;
        
        } 
        flag++;
    }
    });

    
    var counter=$('.selectCountryNew').length;
    var flag=0;

    $('.selectCountryNew').each(function(){  
        $(this).siblings("#selectCountryError").text("");
        if(flag<counter-1){
        if($( this ).val()=="1")
        { 
                $(this).siblings("#selectCountryError").text("Empty");
                status=false;
        
        } 
        flag++;
    }
    });


    var counter=$('.selectStateNew').length;
    var flag=0;
    $('.selectStateNew').each(function(){  
        $(this).siblings("#selectStateError").text("");
        if(flag<counter-1){
        if($( this ).val()=="2")
        { 
                $(this).siblings("#selectStateError").text("Empty");
                status=false;
       
        } 
        flag++;
    }
    });

    var img=$('#imageValid').val();
    if(img==""){
        $('#imageError').text("Please upload a image");

        status=false;

    }



    if(status === false){
      
        captchaEvaluation();
        $('#captchaSubmit').prop("disabled", false);
        $('#captchaResponse').prop("disabled", false);
        $('#captchaRefresh').show();
        $('#captchaRefresh').click();
        return false;

    }

    if(status==true && captchaEvaluation()!=false){
       
        $("#myBtn").click();
        return false;

    }

    return false;

});

var btn = $("#myBtn");
btn.hide();

btn.click(function(){
    $("#Info").css("display","block");
    $("#formContainer").hide();
    if($('#txtMiddleName').val()!=""){

        $('#nameInfo').append("Name: "+$("#txtFirstName").val()+ "  " +$("#txtMiddleName").val() + "  " +$("#txtLastName").val() +"<br>");

    }
    else{
            $('#nameInfo').append("Name: "+$("#txtFirstName").val()+ "  " +$("#txtLastName").val() +"<br>");
        }
    $('#nameInfo').append("Email: "+$("#txtEmail").val() + "<br>");
    $('#nameInfo').append("Pan number: "+$("#txtPan").val() + "<br>");
    $('#nameInfo').append("Aadhar Number: "+$("#txtAdhar").val() + "<br><br>");
    $('.txtContact').each(function(){  
        
    $('#contactInfo').append("Contact Number: "+$(this).val() + "<br>");
    });
        var addressBlock=$('.txtAddressNew');
        var AddressCounter= (addressBlock).length;
    for(i=0;i<AddressCounter-1;i++)
    {
        $('#contactInfo').append("<br>Address Details "+ (i+1) +":<br>")
        $('#contactInfo').append("<br>Address: "+$('.txtAddressNew').eq(i).val() + "<br>");
        $('#contactInfo').append("Country: "+$('.selectCountryNew').eq(i).val() + "<br>");
        $('#contactInfo').append("State: "+$('.selectStateNew').eq(i).val() + "<br>");
        $('#contactInfo').append("City: "+$('.txtCity').eq(i).val() + "<br>");
        $('#contactInfo').append("Zip Code: "+$('.txtZipcode').eq(i).val() + "<br>");

    }
    });




});


function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
          $('.image-upload-wrap').addClass('image-dropping');
      });
      $('.image-upload-wrap').bind('dragleave', function () {
          $('.image-upload-wrap').removeClass('image-dropping');
  });