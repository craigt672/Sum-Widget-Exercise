import { inputValue } from './types';

export const isValidNumber = (val: any) => !isNaN(val);
export const isEmptyInput = (val: any) => val.length === 0;
export const isInvalidChar = (val: string) => val.includes('.');
export const inMaxAndMinRange = (val: number, min: number, max: number) => val >= min && val <= max;

export function getInputType(value: inputValue) {
  switch (typeof value) {
    case 'number':
      return 'number'
    default:
      return 'text';
  }
}

export function getInputValue(value: inputValue) {
  switch (typeof value) {
    case 'number':
      return value;
    default:
      return "";
  }
}
