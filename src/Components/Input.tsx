import { getInputType, getInputValue } from './../helpers';
import { inputValue } from './../types';
import React from 'react';
import styled from 'styled-components';

export interface InputProps {
  className?: string;
  isDisabled?: boolean;
  onChange?: (event: any) => void;
  value: inputValue;
  placeHolder?: string;
  maxLength?: number;
}

const Input = React.forwardRef((({ value, placeHolder, maxLength = 3, isDisabled = false, onChange, className }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const inputType = React.useMemo(() => getInputType(value), [value]);
  const inputValue = React.useMemo(() => getInputValue(value), [value]);

  return (
    <input
      ref={ref}
      placeholder={placeHolder}
      maxLength={maxLength}
      min={inputType === "number" ? "-999" : undefined}
      max={inputType === "number" ? "999" : undefined}
      step={inputType === "number" ? "1" : undefined}
      type={inputType}
      value={inputValue}
      className={className}
      readOnly={isDisabled}
      onChange={onChange}
    />
  )
}));

export default styled(Input)`
  appearance: none;
  -webkit-appearance: none;
  color: #010101;
  cursor: pointer;
  background-color: #f3f4f5;
  text-decoration: none;
  text-align: center;
  border: none;
  width: 135px;
  height: 122px;
  font-size: 38px;
  font-weight: 500;
  border-radius: 10px;
  outline: none;
  transition: 0.25s all;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type=number] {
    -moz-appearance: textfield;
  }
  &:focus {
    transform: ${props => props.isDisabled ? 'scale(1)' : 'scale(1.03)'};
    box-shadow: ${props => props.isDisabled ? 'inherit' : '3px 2px 22px 1px rgba(82, 55, 55, 0.034)'};
  }

  &::placeholder {
    color: #adadad;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
