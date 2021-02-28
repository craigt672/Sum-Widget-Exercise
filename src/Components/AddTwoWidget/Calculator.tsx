import React from "react";
import styled from 'styled-components';
import Input, { InputProps } from '../Input';

import { inputValue } from '../../types';

interface WidgetCalculatorProps {
  inputOneRef?: React.ForwardedRef<HTMLInputElement>
  inputTwoRef?: React.ForwardedRef<HTMLInputElement>
  outputRef?: React.ForwardedRef<HTMLInputElement>
  inputOne: inputValue;
  inputTwo: inputValue;
  inputPlaceHolderText?: string;
  inputOneChange: (event: any) => void;
  inputTwoChange: (event: any) => void;
  output: inputValue;
}

interface OutputProps extends InputProps {
  fref?: React.ForwardedRef<HTMLInputElement> | undefined,
}

const getValue = (value: inputValue) => value === null ? "" : value;
const Output = ({ value, fref }: OutputProps) => <Input ref={fref} value={value} isDisabled={true} />

const WidgetCalculator = ({
  inputOneRef,
  inputTwoRef,
  outputRef,
  inputOne,
  inputTwo,
  output = 0,
  inputPlaceHolderText = "0",
  inputOneChange,
  inputTwoChange
}: WidgetCalculatorProps) => {
  const placeHoldereValue = React.useMemo(() => inputPlaceHolderText, [inputPlaceHolderText]);
  const inputOneValue = React.useMemo(() => getValue(inputOne), [inputOne]);
  const inputTwoValue = React.useMemo(() => getValue(inputTwo), [inputTwo]);
  const outputValue = React.useMemo(() => getValue(output), [output]);

  return (
    <InputFlexContainer>
      <Input ref={inputOneRef} placeHolder={placeHoldereValue} value={inputOneValue} onChange={inputOneChange} />
      <span>+</span>
      <Input ref={inputTwoRef} placeHolder={placeHoldereValue} value={inputTwoValue} onChange={inputTwoChange} />
      <span>=</span>
      <Output fref={outputRef} value={outputValue} />
    </InputFlexContainer>
  )
}

export default WidgetCalculator;

const InputFlexContainer = styled.div`
  display: flex;
  padding: 75px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > span {
    color: #010101;
    font-size: 38px;
  }
`;
