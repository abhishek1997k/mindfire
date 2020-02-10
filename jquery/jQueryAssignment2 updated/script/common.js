$(document).ready(function(){

    // address field and contact field Binding code
    var contactField='<div id="newContactDiv"><input type="text" class="txtContact" placeholder="Enter Contact" name="contact"><button class="contactRemoveButton">-</button><p class="txtContactError"></p></div>';
    var addressField=$('#addressBlock').html();

    $('#contactAddButton').click(function(){
        $('.container').append(contactField);
        return false;
    });

    $('.container').on("click",".contactRemoveButton",function(){ 
        $(this).parents("#newContactDiv").remove();
        return false;
    });

    $('#addressAddButton').click(function(){
        $('#fieldAddressBlock').append(addressField);
        var divCounter=$('.addressDivNew').length;
        $('.addressDivNew').eq(divCounter-1).append('<div id="removal"><button class="addressRemoveButton">Remove field</button></div>');
        return false;

    });

    $("#fieldAddressBlock").on("click",".addressRemoveButton",function(){ 
        $(this).parents(".addressDivNew").remove();
        return false;
    });
    
    $('#fieldAddressBlock').on("change",".selectCountryNew",function(){ 
        var country=$(this).val();
        var state=$(this).siblings('.selectStateNew');
        var IndianState = ["jharkhand","odisha","kerla","punjab","Gujrat"];
        var UsaState = ["California","florida","Texas","Hawaii","Virginia"];
        var chinaState = ["Fujijan","Yunnan","Hunan","Shanghai"];
        state.val('2');
        state.children('.india').remove();
        state.children('.china').remove();
        state.children('.usa').remove();
        
        if(country === "India"){
            for(i = 0; i < IndianState.length; i++){
                state.append('<option value="'+ IndianState[i] +'" class="india">' +IndianState[i] + '</option>');
            }
        }
        if(country === "USA"){
            for(i = 0 ;i < UsaState.length; i++){
                state.append('<option value="'+ UsaState[i] +'" class="usa">' + UsaState[i] + '</option>');
            }
        }
        if(country === "China"){
            for(i = 0;i < chinaState.length; i++){
                    state.append('<option value="'+ chinaState[i] +'" class="china">' + chinaState[i] + '</option>');
            }
        }
    });
    
    // address and contact binding code ends here.
    // validation code
    $('#submitButton').click(function(){
    var status= true ;
    var letters = /^[A-Za-z]+$/;
    var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var panRegx = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    var numbers=/^[0-9]*$/;
    var letterNumber = /^(?!\s*$).+/;
    for(var i = 0;i < $('.txtAddressNew').length;i++){
        
        status = inputRegxValidator($('.txtZipcode').eq(i),$('.txtZipcode').eq(i).siblings(".txtZipcodeError"),numbers,6 ,status);
        status = inputRegxValidator($('.txtCity').eq(i),$('.txtCity').eq(i).siblings(".txtCityError") ,letters,0 ,status);
        status = inputRegxValidator( $('.selectStateNew').eq(i), $('.selectStateNew').eq(i).siblings('.selectStateError') , letters, 0 ,status);
        status = inputRegxValidator( $('.selectCountryNew').eq(i), $('.selectCountryNew').eq(i).siblings('.selectCountryError') , letters, 0 ,status);
        status = inputRegxValidator($('.txtAddressNew').eq(i),$('.txtAddressNew').eq(i).siblings(".txtAddressError"),letterNumber,0 ,status);
    }
    $('.txtContact').each(function(){
        var contactID=$(this);
        status = inputRegxValidator(contactID,contactID.siblings(".txtContactError"),numbers,10 ,status);
    });
    status = inputRegxValidator($('#txtAdhar'),$('.txtAdharError'),numbers,12 ,status);
    status = inputRegxValidator($('#txtPan'),$('.txtPanError'),panRegx,0 ,status);
    status = inputRegxValidator($('#txtEmail'),$('.txtEmailError'),filter,0 ,status);
    status = inputRegxValidator($('#txtLastName'), $('.txtLastNameError'),letters,0,status);
    var middleNameVar=$('#txtMiddleName').val();
    $('.txtMiddleNameError').text("");
    if(middleNameVar!==""){
        status = inputRegxValidator($('#txtMiddleName'), $('.txtMiddleNameError'),letters,0 ,status);
    }
    status = inputRegxValidator($('#txtFirstName'), $('.txtFirstNameError'),letters,0 ,status);
    
    var img=$(".file-upload-input").val();
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    if(!allowedExtensions.exec(img)){
        
        $('#imageError').text("Please upload a image");
        removeUpload();
        $("#imageValid").val("");
        $(".file-upload-input").focus();
        status = false;
    }
    if(status !== true){
        captchaEvaluation();
        $('#captchaSubmit').prop("disabled", false);
        $('#captchaResponse').prop("disabled", false);
        $('#captchaRefresh').show();
        $('#captchaRefresh').click();
        return false;
    }
    if(status === true && captchaEvaluation()!== false){
        $("#myBtn").click();
        return false;
    }
    return false;

});

$('#resetButton').click(function(){  //reset button code
    removeUpload();
    $("#imageValid").val("");
    $( "p").text( "" );
    $('#captchaRefresh').click();
});
//Final preview page code starts here
var btn = $("#myBtn"); 
btn.hide();
btn.click(function(){
    $("#Info").css("display","block");
    $("#formContainer").hide();
    if($('#txtMiddleName').val() !== ""){
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
    for( var i = 0;i < AddressCounter; i++)
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

$( ".image-upload-wrap" ).on("change","#imageValid",function() {
    var x = this;
    readURL(this);
});
// image field code
function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
    };
        reader.readAsDataURL(input.files[0]);
    } 
    else {
      removeUpload();
    }
}
  
function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
// image field code ends.
function inputRegxValidator(inputId, inputErrorId, regx, limit, state){  //for validating the input
    
    var inputVal= inputId.val();
    inputErrorId.text("");
    if(limit === 0){
        if(!regx.test(inputVal)) {
            inputErrorId.text("Incorrect Field.");
            inputId.focus();
            return false;
        }
    }
    else{
        if(!regx.test(inputVal) || inputVal.length !== limit ) {
            inputErrorId.text("Incorrect Field.");
            inputId.focus();
            return false;
        }
    }
    return state;
}