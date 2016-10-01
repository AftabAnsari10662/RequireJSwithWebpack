define(["jquery"], function ($) {

    var clickHandler = function () {

        alert("Who clicked me? dont disturb me!")
    }

    $("button").click(clickHandler);

})