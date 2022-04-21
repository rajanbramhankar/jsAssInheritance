console.log("working");

// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
parent = {
    name: "rajan",
    age: 22,
    city: "Rice City Gondia",
    getInfo: function () {
        console.log(this.name + " " + this.age + " " + this.city);
    }
}
parent.getInfo();

child = {
    name: "Akash",
    age: 22,
    city: "Nagpur",
}
child.__proto__ = parent;
child.getInfo();



// Write code to explain prototype chaining
let arr = ["Yogesh", "mohan", "raman"];
let obje = {
    name: "vijay",
}
console.log(arr.__proto__);//this is array of prototype
console.log(arr.__proto__.__proto__);//this is the object of prototype
console.log(obje.__proto__);//this is object of prototype
console.log(obje.__proto__.__proto__);//object of prototype of prototype is null




// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
let arrr = [1,2,3,4,5];
const object = {
    sum: function() {
        let add = arrr.reduce((acc,cur) => acc = acc + cur);
        console.log(add);
    }
}
object.sum();//15