
var randomNumber1;
var randomNumber2;
var switchCase;
var actualAnswer;
var status;
$(document).ready(function(){ 
        captchaDriver();
        // $('#imageValid').click();
        $('#captchaSubmit').click(captchaEvaluation);
        $('#captchaRefresh').click(captchaDriver);
      
});







function captchaDriver()    //function for generating random numbers and operators
{
    $("#captchaResponse").val("");
    $("#displayMessage1").text(" ");
    $("#displayMessage3").text(" ");
    var tempRandomNumber1= Math.floor(Math.random()*100);
    var tempRandomNumber2= Math.floor(Math.random()*100);
    if(tempRandomNumber2>tempRandomNumber1)
    {
        randomNumber2=tempRandomNumber1;
        randomNumber1=tempRandomNumber2;
    }
    else
    {
        randomNumber1=tempRandomNumber1;
        randomNumber2=tempRandomNumber2;
    }

    $("#displayMessage2").css('background-image','url("image/captchaBackground.jpg")' ); 
    $("#displayMessage2").css('height','40px');
    $("#displayMessage2").css('width','28%');
    $("#displayMessage2").css('margin-left','36%');
    $("#displayMessage2").css('text-align','center');
    $("#displayMessage2").css('font-size','x-large');
    $("#displayMessage2").css('padding-top','10px');
    
    switchCase= Math.floor(Math.random() * 4) + 1;
    switch(switchCase){
    case 1: $("#displayMessage2").html(randomNumber1 + " + " + randomNumber2 );   
            return 0;
    case 2: $("#displayMessage2").html(randomNumber1 + " - " + randomNumber2);
            return 0;
    case 3: $("#displayMessage2").html(randomNumber1 + " * " + randomNumber2);
            return 0;
    case 4: tempRandomNumber1= Math.floor(Math.random()*10)+1;
            tempRandomNumber2= Math.floor(Math.random()*10)+1;
            randomNumber1=tempRandomNumber1;
            randomNumber2=tempRandomNumber2;
            $("#displayMessage2").html(tempRandomNumber1*tempRandomNumber2 + " / " + tempRandomNumber2);
            return 0;
    default:
            return 0;
        }



}


function captchaEvaluation()  // function for evaluating the captcha response if the user
{
   
    var ans= $("#captchaResponse").val();
    switch(switchCase){
        case 1: actualAnswer=add(randomNumber1,randomNumber2); 
                break;
        case 2: actualAnswer=sub(randomNumber1,randomNumber2);
                break;
        case 3: actualAnswer=multiply(randomNumber1,randomNumber2);
                break;
        case 4: actualAnswer=divide(randomNumber1,randomNumber2);
                break;
        default:
                return 0;
    }
    
    if(actualAnswer == ans ){
        $("#displayMessage3").text("Successfully verified"); 
        $("#displayMessage4").text(" ");
        $("#registrationButton").show();
        $('#captchaSubmit').prop("disabled", true);
        $('#captchaResponse').prop("disabled", true);
        $('#captchaRefresh').hide();
        status = true;
       
        return true;
    }
        $("#displayMessage3").text(""); 
        $("#displayMessage4").text("Incorrect Answer! Please try again!");
        captchaDriver();
        return false;

}


//function for performing the operations in the random number generated


function add( number1, number2) 
{
   
    var evaluatedAnswer=number1+number2;
    
    return evaluatedAnswer;
}

function sub( number1, number2){
   
    var evaluatedAnswer=number1-number2;
    return evaluatedAnswer;
}

function multiply( number1, number2){
   
    var evaluatedAnswer=number1*number2;
    return evaluatedAnswer;
}

function divide( number1, number2){
   
        return number1;
}
