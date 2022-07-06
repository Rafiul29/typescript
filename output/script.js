"use strict";
// Enum -store constant ,duplicate value is not allows
// enum types : numeric, string, hetergemous
//numeric enum
var numericType;
(function (numericType) {
    numericType[numericType["GetData"] = 0] = "GetData";
    numericType[numericType["saveData"] = 1] = "saveData";
    numericType[numericType["ReadData"] = 2] = "ReadData";
})(numericType || (numericType = {}));
console.log(numericType["ReadData"]);
//String enum
var stringType;
(function (stringType) {
    stringType["GetData"] = "GateData";
    stringType["saveData"] = "SaveData";
    stringType["ReadData"] = "ReadDatas";
})(stringType || (stringType = {}));
console.log(stringType.GetData);
console.log(stringType.saveData);
console.log(stringType["ReadData"]);
//heterogenous types
var users;
(function (users) {
    users[users["id"] = 12] = "id";
    users["name"] = "rafiul";
})(users || (users = {}));
console.log(users);
