function dis1() {
    var name = "Srinivas";
    console.log(name);
}
function dis2() {
    var age = 3456;
    console.log(age);
}
dis1();
dis2();
var user1 = {
    user_id: 2,
    name: "nani",
    role: "EC"
};
var user2 = {
    user_id: 2,
    name: "nani"
};
console.log(user1);
console.log(user2);
var compnay1 = /** @class */ (function () {
    function compnay1(user_id, name, role) {
        this.user_id = user_id;
        this.name = name;
        this.role = this.role;
    }
    return compnay1;
}());
function showcompany1() {
    var emp1 = new compnay1(1, "salaar", "trainer");
    console.log(emp1);
}
function showcompany2() {
    var emp2 = new compnay1(10, "virat", "employee");
    console.log(emp2);
}
showcompany1();
showcompany2();
var database1 = [
    new compnay1(2, "user1", "dep1"),
    new compnay1(2, "user1", "dep1"),
    new compnay1(2, "user1", "dep1")
];
var sort1 = database1.sort(function (e1, e2) { return e1.user_id > e2.user_id ? -1 : 0; });
for (var _i = 0, sort1_1 = sort1; _i < sort1_1.length; _i++) {
    var vendor = sort1_1[_i];
    console.log("ID: ".concat(vendor.user_id, ", Name: ").concat(vendor.name, ", Role: ").concat(vendor.role != undefined ? vendor.name + " " : vendor.name));
}
