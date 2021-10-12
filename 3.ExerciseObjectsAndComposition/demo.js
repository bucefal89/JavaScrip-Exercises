// const object = {
//   weigth: 80,
//   experience: 1,
//   levelOfHydrated: 0,
//   dizziness: true,
// };

// const result = Object.entries(object);
// console.log(result);

let obj = {
  name: "Jon",
  age: 32,
  city: "Berlin",
};

let myJSON = JSON.stringify(obj, null, 2);
console.log(myJSON);
