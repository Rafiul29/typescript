import {isUser} from './interface/isUser'
import {User} from  './class/User.js'


const  user1 = new User("rafiul", 24)
console.log(user1)
user1.disPlay();

let person1: isUser;
person1 = new User("dsefewf", 24)
person1.disPlay()
interface  RectangleOption{
    width: number;
    length: number
}
function drawRectangle(options: RectangleOption){
    let width= options.width;
    let length = options.length;
}
let threeOptions={
    width: 20,
    length: 30,
    height: 40
}
drawRectangle(threeOptions)