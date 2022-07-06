"use strict";
// Array types
var userName;
userName = ['rafi', 'rakib'];
console.log(userName[0]);
var multipleTypes;
multipleTypes = ['hjs', 34];
//Dynamic Types
var a = [];
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
var users;
users = {
    'id': 1,
    name: 'jnjndjn'
};
//object array declaration
var person;
person = [{
        'id': 1,
        'name': "rafiul"
    },
    {
        'id': 2,
        'name': 'rakibul'
    }
];
var person1;
person1 = { 'id': 3, 'name': "shamim" };
person.push(person1);
var person2;
person2 = { 'id': 2011137, 'name': 'Asfia' };
person.push(person2);
for (var key in person) {
    console.log(person[key]);
}
var friends;
friends = [];
var friend1;
friend1 = { 'id': 212, 'name': 'Rafi' };
friends.push(friend1);
var friend2;
friend2 = { 'id': 2011137, 'name': 'Asfia Hossen Mohona' };
friends.push(friend2);
console.log(friends);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
