var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, role) {
        this.name = name;
        this.id = id;
        this.role = role;
    }
    return UserAccount;
}());
function main() {
    var user = new UserAccount("Aaryan", 1, "Trainer");
    var user2 = new UserAccount("Kirti", 2, "Tester");
    console.log(user.role, user2.role);
}
function sum(num) {
    if (Array.isArray(num)) {
        var sum_1 = 0;
        num.forEach(function (e) { return sum_1 += e; });
        return sum_1;
    }
    return num;
}
console.log(sum(5));
