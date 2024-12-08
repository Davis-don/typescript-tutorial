//arrays
var names = [20, "Annisia", "benson", "kariuki"];
//to push new element in array
names.push("Daniel");
//try push value of different type u incure an error die to strict type
names.push(true);
console.log(names);
//for mixed mix up the values inputed
//objects
var student = {
    name: "Davis",
    age: 20,
    presence: false
};
//try updating the object to contain different datatypes foe a field 
student.name = 30; //try updating the object to contain different datatypes foe a field error
student.name = "anisia"; //what about correct update eg
console.log(student); //this works
student = {
    name: "Davis" //error shows that it doesnt have original structure of object
};
student = {
    name: "An",
    age: 30, //correct structure
    presence: true
};
