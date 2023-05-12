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

const validateSin = (sinNumber) => {
  let isValid = true;

  if (!isLengthValid(sinNumber, SIN_LENGTH)) {
    isValid = false;
  }

  return isValid;
}

//Validation Rules
const isLengthValid = (stringToCheck, desiredLength) => {
  if (stringToCheck.length === desiredLength) {
    return true;
  }

  return false;
};

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
