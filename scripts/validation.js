import { isEven } from "./helpers.js";

// Double-check that all the characters of the input are digits.
const containsOnlyDigits = (str) => {
  return /^[0-9]+$/.test(str);
};

// Validation Rules
const isLengthValid = (stringToCheck) => {
  const desiredLength = 9;

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

// Add all desired validation rules to the array
export const validationRules = [containsOnlyDigits, isLengthValid, isMultiplyRuleValid];

// Validate
export const validateSin = (sinString, rules) => {
  // check if all the validation rules return true
  return rules.every((rule) => rule(sinString) === true);
};
