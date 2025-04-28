type role = "trainer" | "student" | number;

interface Profile{
    personName:string;
    id:number;
    category:role;
}

const profile1:Profile= {
    personName : "hai",
    id: 1,
    category: "trainer"
}

const profile2:Profile={
    personName: "hello",
    id: 2,
    category: "student"
}

class ProfileViewer implements Profile{
        personName:string;
        id:number;
        category:role;

        constructor(personName:string,id:number,category:role){
            this.personName=personName;
            this.id=id;
            this.category=category;
        }    
}

function main1(){
    const a:Profile = new ProfileViewer("Srinivas",3,"student");
    const b:Profile = new ProfileViewer("Salaar",3,69); 

    console.log(a.id+" "+a.category);
    console.log(b.personName+" "+b.category);
    console.log(profile1.category);    
}

main1();

const arrayOfProfiles :Profile[]=[profile1,profile2];

function sortingarray():Profile[]{
    return arrayOfProfiles.sort((a,b)=>a.id>b.id?-1:1);
}

sortingarray().forEach(e=>console.log(e.id +" "+e.personName));
