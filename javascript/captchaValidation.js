
var randomNumber1;
var randomNumber2;
var switchCase;
var actualAnswer;
function captchaDriver()    //function for generating random numbers and operators
{
    document.getElementById("captchaResponse").value="";
    document.getElementById("displayMessage1").textContent=" ";
    document.getElementById("displayMessage3").textContent=" ";
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
    
    switchCase= Math.floor(Math.random() * 4) + 1;
    switch(switchCase){
    case 1: document.getElementById("displayMessage2").innerHTML=randomNumber1 + "+" + randomNumber2 +"= ";
            return 0;
    case 2: document.getElementById("displayMessage2").innerHTML=randomNumber1 + "-" + randomNumber2 +"= ";
            return 0;
    case 3: document.getElementById("displayMessage2").innerHTML=randomNumber1 + "*" + randomNumber2 +"= ";
            return 0;
    case 4: tempRandomNumber1= Math.floor(Math.random()*10)+1;
            tempRandomNumber2= Math.floor(Math.random()*10)+1;
            randomNumber1=tempRandomNumber1;
            randomNumber2=tempRandomNumber2;
            document.getElementById("displayMessage2").innerHTML=tempRandomNumber1*tempRandomNumber2 + "/" + tempRandomNumber2 +"= ";
            return 0;
    default:
            return 0;
        }



}


function captchaEvaluation()  // function for evaluating the captcha response if the user
{
   
    var ans= document.getElementById("captchaResponse").value;
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
        document.getElementById("displayMessage3").textContent="Successfully verified"; 
        document.getElementById("displayMessage1").textContent=" ";
        document.getElementById("registrationButton").style.display="block";
        var btn = document.createElement("BUTTON");   
        btn.innerHTML = "Register";
        document.getElementById("registrationButton").appendChild(btn);  
        btn.addEventListener("click",validFunction);
        return false;
    }
        document.getElementById("displayMessage3").textContent=""; 
        document.getElementById("displayMessage1").textContent="Incorrect Answer! Please try again!";
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
