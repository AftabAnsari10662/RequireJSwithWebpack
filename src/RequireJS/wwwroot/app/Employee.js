define(["./person","./greeter"], function (Person, Greeter) {

    var Employee = function (data) {

        var self = this;
        self.id = data.id;
        self.name = data.name;
    }


    var p1 = new Person();
    console.info(p1);

    var greeter = new Greeter();

    greeter.sayHello();
    greeter.sayGoodBye();
    return Employee;

})