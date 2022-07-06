"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(n, a, id) {
        var _this = _super.call(this, n, a) || this;
        _this.id = id;
        return _this;
    }
    Students.prototype.disPlay = function () {
        console.log("name " + this.name + " age " + this.age + " id: " + this.id);
    };
    return Students;
}(User));
var Student1 = new Students('Rafiul', 24, 1814029);
var Student2 = new Students('Asfia', 22, 2011137);
Student1.disPlay();
Student2.disPlay();
