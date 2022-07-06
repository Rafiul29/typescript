
class User{
    name: string;
    age: number;
    constructor(n:string,a:number) {
        this.name=n;
        this.age=a;
    }
    disPlay(): void{
        console.log(`name ${this.name} age ${this.age}`);
    }
}

const User1 = new User("Rafiul",24);
User1.disPlay();

const User2 = new User("Asfia Hossen",21);
User2.disPlay();