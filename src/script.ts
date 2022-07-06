
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
class Students extends User{
    id: number;
    constructor(n:string,a:number,id:number) {
        super(n,a);
        this.id=id;
    }
    disPlay(): void{
        console.log(`name ${this.name} age ${this.age} id: ${this.id}`);
    }
}
const Student1 = new Students('Rafiul',24,1814029)
const Student2 = new Students('Asfia',22,2011137)
Student1.disPlay();
Student2.disPlay()