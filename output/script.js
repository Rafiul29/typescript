"use strict";
var User = /** @class */ (function () {
    function User(n, a) {
        this.name = n;
        this.age = a;
    }
    User.prototype.disPlay = function () {
        console.log("name " + this.name + " age " + this.age);
    };
    return User;
}());
var User1 = new User("Rafiul", 24);
User1.disPlay();
var User2 = new User("Asfia Hossen", 21);
User2.disPlay();
