// 1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)

// function getNamesByGrade(students, grade) {
//   return students
//     .map((student) => {
//       let g = 0;
//       if (student.percent >= 85) g = 5;
//       else if (student.percent >= 70) g = 4;
//       else if (student.percent >= 60) g = 3;
//       return { ...student, grade: g };
//     })
//     .filter((student) => student.grade === grade)
//     .map((student) => student.name);
// }

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// console.log(getNamesByGrade(students, 3));

// 2

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const result = animals.reduce((obj, animal) => {
//     obj[animal] = (obj[animal] || 0) + 1;
//     return obj;
//   }, {});

//   console.log(result);

// 3

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(numbers => numbers * numbers);

// console.log(squares);

// 4

// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const positiveSum = numbers
//   .filter((num) => num > 0)
//   .reduce((sum, num) => sum + num, 0);

// console.log(positiveSum);

// 5
// let fullName = "George Raymond Richard Martin";
// let words = fullName.split(" ");
// let shortName = words.map(w => w[0]).join("");
// console.log(shortName);

// 6
// let people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];

//   people.sort((a, b) => a.age - b.age);
//   let diff = people[people.length-1].age - people[0].age;
//   console.log(diff);

// 7
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let evens = numbers.filter(num => num % 2 === 0);
// let odds = numbers.filter(n => n % 2 !== 0);

// console.log("Juftlar: ", evens);
// console.log("Toqlar: ", odds);

// 8
// let arr = [1, 2, 3, 2, 4, 1, 5];

// let uniq = arr.reduce((acc, val) => {
//   if (!acc.includes(val)) {
//     acc.push(val);
//   }
//   return acc;
// }, []);

// console.log(uniq);

// 9
// let sortedByPrice = products.sort((a, b) => a.price - b.price);
// console.log(sortedByPrice);

// 10
// let topProduct = [...products].sort((a, b) => b.rating - a.rating [0]);
// console.log(topProduct);

// 11
// let cheapest = [...products].sort((a, b) => a.price - b.price)[0];
// console.log(cheapest);

// 12
// let totalPrice = products.reduce((sum, p) => sum + p.price, 0);
// console.log(totalPrice);

// 13
// let names = products.map(item => item.name);
// console.log(names);

// 14
// let found = products.find(p => p.id === 5);
// console.log(found.name);

// 15
// let withoutId4 = products.filter(p => p.id !== 4);
// console.log(withoutId4);

// 16
// let str = "Men John";
// let lettersOnly = str.split("").every(ch => isNaN(ch) && ch.toLowerCase() !== ch.toUpperCase());
// console.log(lettersOnly);

// 17
// function getTruthyFalsy(arr) {
//     let truthy = arr.filter(val => Boolean(val));
//     let falsy = arr.filter(val => !val);
//     return {
//       truthy: truthy,
//       falsy: falsy
//     }
//   }

//   let result = getTruthyFalsy([false, 1, 10, "", null, "John", 1.13, 0]);
//   console.log(result);

// 18
// let text = "Men John Programmerman";
// let lengths = text.split(" ").map(word => word.length);
// console.log(lengths);

// 19
// let str2 = "Men John Programmerman";
// let hasSpace = str2.split("").some(ch => ch === " ");
// console.log(hasSpace);

// 20
// let obj = {a: 2, b: 5, c: 7};
// let combo = Object.entries(obj).map(pair => pair.join(""));
// console.log(combo);

// 21
// function digitSum(n) {
//     if(n < 10) return n;
//     return n % 10 + digitSum(Math.floor(n / 10));
//   }

//   console.log(digitSum(123)); 

// 22
// let total = pupils.reduce((sum, pupil) => sum + pupil.protcent, 0);
// let average = total / pupils.length;
// console.log("O‘rtacha: ", average);

// 23
// let withGrades = pupils.map(p => {
//     let grade;
//     if(p.protcent >= 90) grade = 5;
//     else if(p.protcent >= 80) grade = 4;
//     else if(p.protcent >= 70) grade = 3;
//     else grade = 2;
  
//     return {...p, grade: grade};
//   });
  
//   console.log(withGrades);
  

// 24
// let passedStatus = withGrades.map(pupil => {
//     return {...pupil, isPassed: pupil.protcent >= 70};
//   });
  
//   console.log(passedStatus);
  
// 25
// let stats = passedStatus.reduce((res, p) => {
//     if(p.isPassed) res.passed += 1;
//     else res.failed += 1;
//     return res;
//   }, {passed: 0, failed: 0});
  
//   console.log(stats);  