function btnClick(){
    alert('alert from JS')
}

let obj = {
    name:"Nani",
    role:"CEO",
    exp:9,
    lang:["Java","Python","C","Node","JS"]
}

console.log(obj);
console.log([...obj.lang,"playwright"]);
console.log(obj.lang);

function add(a,b){
    console.log(a+b);
}
add(10,5);

function add1(a,b=10){
    console.log(a+b);
}
add1(11);


function rec(a){
    if(a<10){
        rec(a+1);
        console.log(a);
    }
}
rec(1);

let arr = ["Aaryan", "Arush", true, 23, 45, 0, "Kirti"];
// console.log(arr);
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}
for (const name in arr) {
console.log(arr[name]);
}
for (const name of arr) {
console.log(name);
}