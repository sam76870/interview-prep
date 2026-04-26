const p1={
    fName: "Shubham",
    lName : "Pathak",
    getFullName(){
        return `${this.fName} + ${this.lName}`;
    }
}

console.log(p1)
// p2 is created as a new empty object whose prototype points to p1.
// In simple terms: p2.__proto__ === p1
let p2 = Object.create(p1);
// p2 does not have its own fName, so JavaScript looks up p2.__proto__, which is p1.
console.log(p2.fName)
// Here p2.__proto__ is the same object as p1.
// So p2.__proto__.fName = "John" means we are directly changing p1.fName.
// We are not creating p2's own fName property here.
let firstNameChaneged = p2.__proto__.fName = "John"
// The assignment expression returns the assigned value, so firstNameChaneged becomes "John".
console.log(firstNameChaneged);
// Proof:
// p1.fName is now "John" because we changed the prototype object itself.
// p2.fName is also "John" because p2 still reads fName from p2.__proto__, which is p1.
console.log(p1.fName);
console.log(p2.fName);
