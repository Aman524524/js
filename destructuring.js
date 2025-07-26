const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,

    address : {
      city: "New York",
      street:'123',

     }
};

// Destructuring
let {firstName, lastName, age:a, address:{city:c}} = person;
console.log(firstName, lastName, a, c); 