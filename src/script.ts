//Encapsulation....
//Access modifiers : public,privet,protected,readonly
class User{
   public name: string;
   public age: number;
    constructor(n:string,a:number) {
        this.name=n;
        this.age=a;
    }
    disPlay(): void{
        console.log(`name ${this.name} age ${this.age}`);
    }
}
class Students extends User{
   private id: number;
    constructor(n:string,a:number,id:number) {
        super(n,a);
        this.id=id;
    }
    disPlay(): void{
        console.log(`name ${this.name} age ${this.age} id: ${this.id}`);
    }
    setId(id: number): void{
        this.id=id;
    }
    getId(): number{
        return this.id;
    }
}
// const  user1 = new User("rafiul", 24)
// user1.name='asfia'
// console.log(user1)


const Student1 = new Students('Rafiul',24,1814029)
const Student2 = new Students('Asfia',22,2011137)
Student1.disPlay();
Student1.setId(123)
console.log(Student1.getId())
