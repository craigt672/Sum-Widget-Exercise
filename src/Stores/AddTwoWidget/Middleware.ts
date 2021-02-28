import {
  isValidNumber,
  isEmptyInput,
  isInvalidChar,
  inMaxAndMinRange,
} from '../../helpers';

import {
  inputValue,
  numCallBackProp,
  resetCallBackProp
} from '../../types';

export const validateNumberInput = (numberCallBack: numCallBackProp) => (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.currentTarget.value;
  const numberVal = Number(inputValue);

  const maxNumber = 999;
  const minNumber = -999;

  if (inputValue.length === 0) {
    numberCallBack("");
    return;
  }

  if (
    isValidNumber(numberVal) &&
    inMaxAndMinRange(numberVal, minNumber, maxNumber) &&
    !isInvalidChar(inputValue)
  ) {
    numberCallBack(numberVal);
  }
}

export const calculateSumTotal = (valOne: inputValue, valTwo: inputValue, sumCallBack: numCallBackProp) => () => {
  const isValidInputs = isValidNumber(valOne) && isValidNumber(valTwo);

  if (isEmptyInput(valOne) || isEmptyInput(valTwo)) return
  const total = Number(valOne) + Number(valTwo);
  if (isValidInputs) return sumCallBack(total);
}

export const resetInputs = (resetCallBack: resetCallBackProp) => () => {
  console.log('onReset Click');
  resetCallBack();
}
