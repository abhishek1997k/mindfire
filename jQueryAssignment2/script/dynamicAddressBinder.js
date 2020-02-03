
$(document).ready(function(){
    
    var contactField='<div id="newContactDiv"><input type="text" class="txtContact" placeholder="Enter Contact" name="contact"><button class="contactRemoveButton">-</button><p id="txtContactError"></p></div>';
    var addressField=$('#newAddressBlock').html();
    

    $('#contactAddButton').click(function(){
        $('#container').append(contactField);
        return false;
    });

    $(document).on("click",".contactRemoveButton",function(){ 
        
         $(this).parents("#newContactDiv").remove();
         return false;
    });

    $('#addressAddButton').click(function(){

        $('#addressBlock').append(addressField);
        return false;

    });

    $(document).on("click",".addressRemoveButton",function(){ 
        
        $(this).parents(".addressDivNew").remove();
        return false;
   });


$(document).on("change",".selectCountryNew",function(){ 
    var country=$(this).val();
    var state=$(this).siblings('.selectStateNew');
    var IndianState = ["jharkhand","odisha","kerla","punjab","Gujrat"];
    var UsaState = ["California","florida","Texas","Hawaii","Virginia"];
    var chinaState = ["Fujijan","Yunnan","Hunan","Shanghai"];

    state.val('2');
    state.children('.india').remove();
    state.children('.china').remove();
    state.children('.usa').remove();
    
    if(country == "India"){

        for(i=0;i<IndianState.length;i++){

            state.append('<option value="'+ IndianState[i] +'" class="india">' +IndianState[i] + '</option>');

        }
        
    }

    if(country == "USA"){
        
       
        
        for(i=0;i<UsaState.length;i++){
            state.append('<option value="'+ UsaState[i] +'" class="usa">' + UsaState[i] + '</option>');
        }
    }

    if(country == "China"){
        
        for(i=0;i<chinaState.length;i++){
                state.append('<option value="'+ chinaState[i] +'" class="china">' + chinaState[i] + '</option>');
        }
    }
    

    
});

});