//Constants
const SIN_LENGTH = 9;
const SUCCESS_MESSAGE = 'SIN number is valid!'
const FAIL_MESSAGE = 'SIN number is not valid.'

//Helpers
const isEven = (num) => num % 2 !== 0;

// DOM Elements
const sinForm = document.querySelector('#sinForm');
const sinInput = document.querySelector('#sinInput');
const validateButton = document.querySelector('#validateSinButton');
const validationResult = document.querySelector('#validationResult');

//Listener
sinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const sinValue = sinInput.value;

  const isSinValid = validateSin(sinValue);
  showResult(isSinValid);
  
  console.log(validateSin(sinValue));
});

//Validation Rules
const isLengthValid = (stringToCheck, desiredLength) => {
  if (stringToCheck.length === desiredLength) {
    return true;
  }

  return false;
};

const isMultiplyRuleValid = (sin) => {
  // Convert sin string to array and multiply every 2nd digit by 2 
  const multipliedSinArr = sin.split('').map((elem, ind) => {
     if (isEven(ind)) {
      return (Number(elem) * 2).toString();
    }
    return elem;
  });

  multipliedSinArr.forEach((elem, ind) => {
    if (elem.length > 1) {
      multipliedSinArr.splice(ind, 1, ...elem.split(''));
    }
  })
  
  const multipliedSinSum = multipliedSinArr.reduce((acc, curr) => {
    acc += Number(curr);
    return acc;
  }, 0);
  
  const isSumDevidableByTen = multipliedSinSum % 10 === 0;
  return isSumDevidableByTen;
};

//Validate
const validateSin = (sinNumber) => {
  let isValid = true;

  if (!isLengthValid(sinNumber, SIN_LENGTH)) {
    isValid = false;
  }
  if (!isMultiplyRuleValid(sinNumber)) {
    isValid = false;
  }

  return isValid;
}

//Print Result
const showResult = (isValid) => {
  validationResult.classList.remove('success', 'error');

  if (isValid) {
    validationResult.textContent = SUCCESS_MESSAGE;
    validationResult.classList.add('success');
  } else {
    validationResult.textContent = FAIL_MESSAGE;
    validationResult.classList.add('error');
  }

  validationResult.classList.remove('hidden');
}
