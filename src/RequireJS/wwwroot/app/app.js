
define(["./Employee"], function (Employee) {


    console.log("using requirejs with amd!!!");

    var e1 = new Employee({ id: 1, name: "Aftab" });
    var e2 = new Employee({ id: 2, name: "Ansari" });
    console.log(e1);
    console.log(e2);
})