type roles = "Trainer" | "Developer" | "Tester";

interface User {
  name: string; 
  id: number; 
  role: roles;
}

class UserAccount {
  name: string; 
  id: number; 
  role: roles;

  constructor(name: string, id: number, role: roles) { 
    this.name = name; 
    this.id = id;
    this.role = role;
  }
}

function main() {
    const user: User = new UserAccount("Aaryan", 1, "Trainer"); 
    const user2: User = new UserAccount("Kirti", 2, "Tester");
    
    console.log(user.role, user2.role);
}

function sum(num: number | number[]) {
    if(Array.isArray(num)) { 
        let sum: number = 0;
        num.forEach(e => sum += e);
        return sum;
    }
    return num;
}

console.log(sum(5));