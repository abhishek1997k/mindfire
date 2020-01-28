$(function(){

    $(".usa").hide();
    $(".china").hide();
    $(".india").hide();
    $(".jharkhand").hide();
    $(".odisha").hide();
    $(".california").hide();
    $(".florida").hide();
    $(".yunnan").hide();
    $(".bejeing").hide();
   


    $("#selectCountry").change(function(){
    var country= $("#selectCountry").val();
    if(country =="India"){
        $("#selectState").val('2');
        $("#selectCity").val('3');
        $(".india").show();
        $(".usa").hide();
        $(".china").hide();
    }
    if(country == "USA"){
        $("#selectState").val('2');
        $("#selectCity").val('3');
        $(".usa").show();
        $(".india").hide();
        $(".china").hide();
    }
    if(country == "China"){
        $("#selectState").val('2');
        $("#selectCity").val('3');
        $(".china").show();

        $(".india").hide();
        $(".usa").hide();
    }
    });

    $("#selectState").change(function(){
        var state= $("#selectState").val();

        $(".jharkhand").hide();
        $(".odisha").hide();
        $(".california").hide();
        $(".florida").hide();
        $(".yunnan").hide();
        $(".bejeing").hide();

        if(state== "Jharkhand")
        {
            $("#selectCity").val('3');
            $(".jharkhand").show();
            $(".odisha").hide();
            $(".california").hide();
            $(".florida").hide();
            $(".yunnan").hide();
            $(".bejeing").hide();

        }

        if(state== "Odisha")
        {
            $("#selectCity").val('3');
            $(".jharkhand").hide();
            $(".odisha").show();
            $(".california").hide();
            $(".florida").hide();
            $(".yunnan").hide();
            $(".bejeing").hide();
        }

        if(state== "California")
        {
            $("#selectCity").val('3');
            $(".jharkhand").hide();
            $(".odisha").hide();
            $(".california").show();
            $(".florida").hide();
            $(".yunnan").hide();
            $(".bejeing").hide();

        }

        if(state== "Florida")
        {
            $("#selectCity").val('3');
            $(".jharkhand").hide();
            $(".odisha").hide();
            $(".california").hide();
            $(".florida").show();
            $(".yunnan").hide();
            $(".bejeing").hide();

        }

        if(state== "Yunnan")
        {
            $("#selectCity").val('3');
            $(".jharkhand").hide();
            $(".odisha").hide();
            $(".california").hide();
            $(".florida").hide();
            $(".yunnan").show();
            $(".bejeing").hide();
        }

        if(state== "Bejeing")
        {
            $("#selectCity").val('3');
            $(".jharkhand").hide();
            $(".odisha").hide();
            $(".california").hide();
            $(".florida").hide();
            $(".yunnan").hide();
            $(".bejeing").show();

        }

    });


});