// Import stylesheets
// maximo 4 digitos
// no todos repetidos
// maximo dos countConsecutivos
// los cuatro no pueden ser consecutivos

import "./style.css";

const testArray1 = [1, 2, 3, 9];
const testArray2 = [4, 4, 4, 4];
const testArray3 = [4, 4, 4, 4];

let maxConsecutives = false;

const checkConsecutivos = array => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] + 1 === array[i + 1] && array[i + 1] + 1 === array[i + 2]) {
      maxConsecutives = true;
    }
  }
  return maxConsecutives;
};

const checkEqual = array => {
  let suma = array.reduce((acc, cur) => acc + cur);
  let allEqual = true;

  array.map(number => {
    if (number != suma / array.length) {
      allEqual = false;
    }
  });

  return allEqual;
};

const ArraysEqual = (array1, array2) => {
  return JSON.stringify(array1) === JSON.stringify(array2) ? true : false;
};

const maxLength = array => (array.length > 4 ? true : false);

console.warn("tiene mas de 2 numeros consecutivos");
console.warn(checkConsecutivos(testArray1));
console.warn("tiene todos los numeros iguales");
console.warn(checkEqual(testArray2));
console.warn("tiene mas de 4 elementos");
console.warn(maxLength(testArray3));
console.warn("los dos array son iguales");
console.warn(ArraysEqual(testArray2, testArray3));
