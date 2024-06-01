// 1-misol
// function qosh(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(qosh([5, 3, 9, 8, 6, 2]));

// 2-misol

// function katta(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// console.log(katta([5, 3, 9, 8, 6, 2]));

// 3-misol

// function kichik(array) {
//   let min = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return min;
// }

// console.log(kichik([5, 3, 9, 8, 6, 2, 1]));

// 4-misol
// function manfiy(array) {
//   for (let i = 0; i < array.length; i++) {
//     let a = 0;
//     if (array[i] < 0) {
//       a = array[i];
//       array[i] = array[i] * array[i];
//       array[i] = array[i] / a;
//     }
//   }
//   return array;
// }
// console.log(manfiy([-5, 3, -9, 8, -6, 2]));
// chiqmadi

// 5-misol

// function kvadrat(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * 2;
//   }
//   return array;
// }

// console.log(kvadrat([5, 3, 9, 8, 6, 2]));

// 6-misol

// function removeEvenNumbers(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       array.splice(i, 1);
//       i--;
//     }
//   }
//   return array;
// }

// console.log(removeEvenNumbers([5, 3, 9, 8, 6, 2]));

// 7-misol

// function removeEvenNumbers(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       array.splice(i, 1);
//       i--;
//     }
//   }
//   return array;
// }

// console.log(removeEvenNumbers([5, 3, 9, 8, 6, 2]));

// 8-masal

// savoliga chunmadim

// 9-masala
// function tekari(array) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
//   }
// }

// console.log(tekari([5, 3, 9, 8, 6, 2]));

// 10-masala

// function hisobla(array) {
//   let a = 0;
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 5) {
//       a++;
//       sum += array[i];
//     }
//   }

//   console.log(`5 dan katta sonlar ${a} ta va ularni qo'shilsa ${sum}`);
//   return sum;
// }

// console.log(hisobla([5, 3, 9, 8, 6, 2, 7]));

// 11-masala

// function qosh_1(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i]++;
//   }
//   return array;
// }

// console.log(qosh_1([5, 3, 9, 8, 6, 2, 7]));

// 12-masala

// function index(arr) {
//   let indexes = [];
//   for (let i = 0; i < arr.length; i++) {
//     indexes.push[arr[i]] = i;
//   }
//   return indexes;
// }

// console.log(index([5, 3, 9, 8, 6, 2, 7]));
// chiqara olmadim

// 13-masala
// chunmadim

// 14-masala
// function filtr(massiv) {
//   let yangi = [];
//   for (let i = 0; i < massiv.length; i++) {
//     if (massiv[i] > 0) {
//       yangi.push(massiv[i]);
//     }
//   }
//   return yangi;
// }

// console.log(filtr([1, -3, 4, 0, -2, 7, -5, 9]));

// 15- masala

// function filtr_2(massiv) {
//     let yangi = [];
//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] < 0) {
//             yangi.push(massiv[i]);
//         }
//     }
//     return yangi;
// }

// console.log(filtr_2([1, -3, 4, 0, -2, 7, -5, 9]));

// 16-masala

// function str(massiv) {
//     let yangi = [];
//     for (let i = 0; i < massiv.length; i++) {
//         yangi.push(String(massiv[i]));
//     }
//     return yangi;
// }

// console.log(str([1, -3, 4, 0, -2, 7, -5, 9]));

// 17-masala

// function kv(massiv) {
//   let yangi = [];
//   for (let i = 0; i < massiv.length; i++) {
//     yangi.push(massiv[i] * massiv[i]);
//   }
//   return yangi;
// }

// console.log(kv([1, -3, 4, 0, -2, 7, -5, 9]));

// 18-masala

// function nusxa(massiv) {
//     let yangi = [];
//     for (let i = 0; i < massiv.length; i++) {
//         yangi.push(massiv[i]);
//     }
//     return yangi;
// }

// console.log(nusxa([1, -3, 4, 0, -2, 7, -5, 9]));

// 19-masala

// function orta_arif(massiv) {
//   let yangi = 0;
//   for (let i = 0; i < massiv.length; i++) {
//     yangi += massiv[i];
//   }

//   let arif = yangi / massiv.length;

//   return arif;
// }

// console.log(orta_arif([1, 3, 4, 8, 2, 7, 5, 9]));

// 20-masala

// chiqara olmadim
