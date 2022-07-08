// Array types
let userName: string[];
userName=['rafi','rakib'];
console.log(userName[0])
let multipleTypes: (string | number) [];
multipleTypes= ['hjs', 34];

//Dynamic Types
let a: any[]=[]
a.push('hsjs');
a.push('566');

//Object types
// let c:{
//     name: string
//     age: number
// }
// c={
//     name: "rafiul islam",
//     age: 67
// }

// just object declaration
let users: object;
users ={
    'id': 1,
    name: 'jnjndjn'
}

//object array declaration
let person: object[];
    person=[{
        'id': 1,
        'name': "rafiul"
    },
    {
        'id': 2,
        'name': 'rakibul'
    }
]
let person1:{id: number,name: string}
person1={'id':3, 'name': "shamim"}
person.push(person1)

let person2:{id: number,name: string}
person2={'id':2011137, 'name': 'Asfia'}
person.push(person2)
for(const key in person){
    console.log(person[key]);
}


//custom type

type user= {id: number, name: string}

let friends: user[];
friends=[]
let friend1: user;
friend1={'id':212, 'name': 'Rafi' }
friends.push(friend1)
let friend2: user;
friend2={'id':2011137, 'name': 'Asfia Hossen Mohona' }
friends.push(friend2)
console.log(friends)

type RequestType ="GET" | "POST";
let getRequest: RequestType;
getRequest="GET"

function requestHandler(requestType: RequestType){
    console.log(requestType)
}
requestHandler("GET")

// types Aliases

type stringorNum = string | number;
type userType = { name: string, age: number }

const userDetails= (id: stringorNum, user: userType)=>{
    console.log(`User id is ${id} , name is ${user.name} and age is ${user.age}`)
}
const sayHello = (user: userType)=>{
    console.log(`hello ${user.age} ${user.name}`)
}