type Vendor1 = {
    id: number;
    name: string;
    lname?: string; 
    productName: any; 
    price: number;
  };
 
  const vendors1: Vendor1[] = [
    { id: 3, name: "Srinivas", lname: "Kumar", productName: "Watch", price: 600 },
    { id: 1, name: "Siri", productName: "Airpods", price: 750 },
    { id: 2, name: "Ramesh", lname: "Kumar", productName: "Tv", price: 800 },
  ];
 
  function sortvendors(): Vendor1[]{
    return vendors1.sort((a1,a2) => a1.id>a2.id ? -1 : 1)
  }
 
  sortvendors().forEach((e)=>
    console.log(`Id ${e.id} name ${e.name}`));
 
 
