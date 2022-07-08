export class User{
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