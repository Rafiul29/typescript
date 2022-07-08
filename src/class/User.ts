import {isUser} from '../interface/isUser'
export class User implements isUser{
    public name: string;
    private age: number;
    constructor(n:string,a:number) {
        this.name=n;
        this.age=a;
    }
    // make privet property access
    getAge(){
      return this.age
    }
    disPlay(): void{
        console.log(`name ${this.name} age ${this.age}`);
    }
}