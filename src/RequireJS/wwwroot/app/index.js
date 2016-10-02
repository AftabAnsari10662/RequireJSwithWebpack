define(["jquery", "angular", "./login"], function ($, angular, login) {

    var clickHandler = function () {

        alert("Who clicked me? dont disturb me!")
    }


    $(function () {

        $("button").click(clickHandler);

    })
   
})