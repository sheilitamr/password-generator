const passwordCharacters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';
const passwordGeneratedElement = document.getElementById('password-generated');
const formPassword = document.getElementById('password-generator-options');
const passwordGeneratorLengthNumberElement = document.getElementById(
  'password-generator-length-number'
);
const passwordGeneratorRangeElement = document.getElementById(
  'password-generator-range'
);

const strengthValue = document.getElementById('strength-value');

const buttonGenerateElement = document.getElementById('button-generate');

const strength = ['TOO SHORT', 'WEAK', 'MEDIUM', 'STRENGTH'];
let passwordLength = 0;
let newPassword = '';

const randomNumber = () => {
  return Math.floor(Math.random() * passwordCharacters.length);
};
const generatePassword = () => {
  newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    newPassword += passwordCharacters.charAt(randomNumber());
  }
  passwordGeneratedElement.value = newPassword;
  console.log(newPassword);
};
generatePassword();

const passwordRange = () => {
  passwordGeneratorLengthNumberElement.textContent = passwordLength;
};

const lengthCharacter = e => {
  passwordLength = e.target.value;
  changeStrengthText();
  passwordRange();
};

const changeStrengthText = () => {
  if (passwordLength < 5) {
    strengthValue.textContent = strength[0];
    buttonGenerateElement.disabled = true;
  } else if (passwordLength >= 5 && passwordLength < 10) {
    strengthValue.textContent = strength[1];
    buttonGenerateElement.disabled = false;
  } else if (passwordLength >= 10 && passwordLength < 15) {
    strengthValue.textContent = strength[2];
    buttonGenerateElement.disabled = false;
  } else if (passwordLength >= 15) {
    strengthValue.textContent = strength[3];
    buttonGenerateElement.disabled = false;
  }
};

strengthValue.textContent = strength[0];
passwordGeneratorRangeElement.addEventListener('input', lengthCharacter);
buttonGenerateElement.addEventListener('click', generatePassword);
formPassword.addEventListener('submit', e => {
  e.preventDefault();
});
