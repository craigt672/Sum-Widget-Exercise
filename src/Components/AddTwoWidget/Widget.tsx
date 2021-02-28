import React from "react";
import styled from 'styled-components';

import WidgetCalculator from './Calculator';
import WidgetActions from './Actions';

import { inputValue } from '../../types';
import { getInputValue, isEmptyInput } from "../../helpers";

export interface WidgetProps {
  inputOne: inputValue;
  inputTwo: inputValue;
  sumTotal: inputValue;
  inputOneChange: (event: any) => void;
  inputTwoChange: (event: any) => void;
  onReset: () => void;
  onSubmit: () => void;
}

const isInputsEmpty = (valOne: any, valTwo: any) => isEmptyInput(valOne) && isEmptyInput(valTwo);
const isAnyInputsEmpty = (valOne: any, valTwo: any) => isEmptyInput(valOne) || isEmptyInput(valTwo);

const focusInput = (inputRef: React.MutableRefObject<HTMLInputElement>) => inputRef.current.focus();

export default function AddTwoWidget({
  inputOne,
  inputTwo,
  sumTotal,
  inputOneChange,
  inputTwoChange,
  onReset,
  onSubmit
}: WidgetProps) {
  const inputOneRef: React.ForwardedRef<any> = React.createRef();
  const inputTwoRef: React.ForwardedRef<any> = React.createRef();
  const outputRef: React.ForwardedRef<any> = React.createRef();

  const isResetDisabled = React.useMemo(() => isInputsEmpty(inputOne, inputTwo), [inputOne, inputTwo]);
  const isSubmitDisabled = React.useMemo(() => isAnyInputsEmpty(inputOne, inputTwo), [inputOne, inputTwo]);

  const resetHandler = () => {
    onReset();
    if (isResetDisabled) return focusInput(inputOneRef);
  };

  const submitHandler = () => {
    onSubmit();
    if (getInputValue(sumTotal) > 0) return focusInput(outputRef);
  };

  return (
    <WidgetContainer>
      <WidgetCalculator
        inputOneRef={inputOneRef}
        inputTwoRef={inputTwoRef}
        outputRef={outputRef}
        inputOne={inputOne}
        inputTwo={inputTwo}
        output={sumTotal}
        inputOneChange={inputOneChange}
        inputTwoChange={inputTwoChange}
      />
      <WidgetActions
        resetTitle="Clear"
        submitTitle="Add"
        resetDisabled={isResetDisabled}
        submitDisabled={isSubmitDisabled}
        onReset={resetHandler}
        onSubmit={submitHandler}
      />
    </WidgetContainer>
  )
}

const WidgetContainer = styled.div`
  background-color: white;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);
  padding: 50px;
  min-width: 600px;
  min-height:30%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
