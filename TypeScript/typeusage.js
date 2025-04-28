var profile1 = {
    personName: "hai",
    id: 1,
    category: "trainer"
};
var profile2 = {
    personName: "hello",
    id: 2,
    category: "student"
};
var ProfileViewer = /** @class */ (function () {
    function ProfileViewer(personName, id, category) {
        this.personName = personName;
        this.id = id;
        this.category = category;
    }
    return ProfileViewer;
}());
function main1() {
    var a = new ProfileViewer("Srinivas", 3, "student");
    var b = new ProfileViewer("Salaar", 3, 69);
    console.log(a.id + " " + a.category);
    console.log(b.personName + " " + b.category);
    console.log(profile1.category);
}
main1();
var arrayOfProfiles = [profile1, profile2];
function sortingarray() {
    return arrayOfProfiles.sort(function (a, b) { return a.id > b.id ? -1 : 1; });
}
sortingarray().forEach(function (e) { return console.log(e.id + " " + e.personName); });
