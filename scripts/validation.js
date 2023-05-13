import { SIN_LENGTH } from "./constants.js";
import { isEven } from "./helpers.js";

// Double-check that all the characters of the input are digits.
const isNumber = (char) => isNaN(char) === false;

// Validation Rules
const isLengthValid = (stringToCheck, desiredLength) => {
  if (stringToCheck.length === desiredLength) {
    return true;
  }

  return false;
};

const isMultiplyRuleValid = (sinStr) => {
  // convert sin string to array and multiply every 2nd digit by 2 
  const multipliedSinArr = sinStr.split('').map((elem, ind) => {
     if (isEven(ind)) {
      return (Number(elem) * 2).toString();
    }
    return elem;
  });

  // split numbers in the array into digits if necessary
  multipliedSinArr.forEach((elem, ind) => {
    if (elem.length > 1) {
      multipliedSinArr.splice(ind, 1, ...elem.split(''));
    }
  })
  
  // calculate sum of the array elements
  const multipliedSinSum = multipliedSinArr.reduce((acc, curr) => {
    acc += Number(curr);
    return acc;
  }, 0);
  
  const isSumDevidableByTen = multipliedSinSum % 10 === 0;
  return isSumDevidableByTen;
};

// Validate
export const validateSin = (sinNumber) => {
  let isValid = true;

  // check with as many validation rules as needed
  if (!isNumber(sinNumber)) {
    isValid = false;
  }
  if (!isLengthValid(sinNumber, SIN_LENGTH)) {
    isValid = false;
  }
  if (!isMultiplyRuleValid(sinNumber)) {
    isValid = false;
  }

  return isValid;
};
