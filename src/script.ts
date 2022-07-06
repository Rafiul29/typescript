// Enum -store constant ,duplicate value is not allows
// enum types : numeric, string, hetergemous

//numeric enum
enum numericType{
    GetData,
    saveData,
    ReadData,
}
console.log(numericType["ReadData"])
//String enum

enum stringType{
    GetData='GateData',
    saveData='SaveData',
    ReadData='ReadDatas',
}
console.log(stringType.GetData)
console.log(stringType.saveData)
console.log(stringType["ReadData"])

//heterogenous types

enum users {
    id=12,
    name='rafiul',
}
console.log(users);