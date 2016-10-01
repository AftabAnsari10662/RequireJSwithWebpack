define(["./person"], function (Person) {


    var p1 = new Person();
    var Greeter = function () {

        var self = this;
        self.sayHello = function () {

            console.log(`${p1.firstName} ${p1.lastName} Says Hello!`);
        };

        self.sayGoodBye = function () {
            console.log(`${p1.firstName} ${p1.lastName} says GoodBye!`);
        };

    };

    return Greeter;

})