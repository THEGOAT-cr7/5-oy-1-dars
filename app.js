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

// 2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const result = animals.reduce((obj, animal) => {
//     obj[animal] = (obj[animal] || 0) + 1;
//     return obj;
//   }, {});

//   console.log(result);

// 3. sonni kvadrati

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(numbers => numbers * numbers);

// console.log(squares);

// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const positiveSum = numbers
//   .filter((num) => num > 0)
//   .reduce((sum, num) => sum + num, 0);

// console.log(positiveSum);
