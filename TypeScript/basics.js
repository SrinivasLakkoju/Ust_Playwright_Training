var vendors1 = [
    { id: 3, name: "Srinivas", lname: "Kumar", productName: "Watch", price: 600 },
    { id: 1, name: "Siri", productName: "Airpods", price: 750 },
    { id: 2, name: "Ramesh", lname: "Kumar", productName: "Tv", price: 800 },
];
function sortvendors() {
    return vendors1.sort(function (a1, a2) { return a1.id > a2.id ? -1 : 1; });
}
sortvendors().forEach(function (e) {
    return console.log("Id ".concat(e.id, " name ").concat(e.name));
});
