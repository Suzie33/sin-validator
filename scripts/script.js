import { SUCCESS_MESSAGE, FAIL_MESSAGE, SUCCESS_CSS_CLASS, FAIL_CSS_CLASS, HIDDEN_CSS_CLASS } from './constants.js';
import { validateSin, validationRules } from './validation.js';

// DOM Elements
const sinForm = document.querySelector('#sinForm');
const sinInput = document.querySelector('#sinInput');
const validationResult = document.querySelector('#validationResult');

//Listener
sinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const sinValue = sinInput.value; // get sin value from the input
  const isSinValid = validateSin(sinValue, validationRules); // check if the value is valid
  showResult(isSinValid); // show validation result
});

//Print Validation Result
const showResult = (isValid) => {
  validationResult.classList.remove(SUCCESS_CSS_CLASS, FAIL_CSS_CLASS);

  if (isValid) {
    validationResult.textContent = SUCCESS_MESSAGE;
    validationResult.classList.add(SUCCESS_CSS_CLASS);
  } else {
    validationResult.textContent = FAIL_MESSAGE;
    validationResult.classList.add(FAIL_CSS_CLASS);
  }

  validationResult.classList.remove(HIDDEN_CSS_CLASS);
};
