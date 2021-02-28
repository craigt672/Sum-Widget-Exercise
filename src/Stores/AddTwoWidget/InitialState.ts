import { inputValue } from '../../types';

export interface WidgetState {
  inputOne: inputValue;
  inputTwo: inputValue;
  calculatedValue: inputValue;
}

export const INITIAL_STATE: WidgetState = {
  inputOne: "",
  inputTwo: "",
  calculatedValue: 0
}
