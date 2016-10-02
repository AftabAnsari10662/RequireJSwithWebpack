define(["./utils", "underscore", "angularuiRouter"],
    function (utils, _, angularuiRouter) {


        var friends = ["Anshul", "Rohit", "Remmie", "Gaurish"];
        var friendStartsWithR = _.find(friends, f=>f.charAt(0) == 'R');
        console.log(friendStartsWithR);
        console.log("login functionality is working!");
    })