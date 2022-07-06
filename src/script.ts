// abstraction helps us to hide the implementation of something
//
// class declared with abstract keyword
//
// object can not be created from abstract class
//
// if a class extends abstract class; it must inherit all the abstract methods

abstract class User{
    name: string;
    age: number;
    protected constructor(n:string, a:number) {
        this.name=n;
        this.age=a;
    }
   abstract disPlay(): void
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