import React from 'react';
import styled from 'styled-components';

import AddTwoWidget from './AddTwoWidget/Widget';

import {
  actionDispatcher,
  InitialState as AppInitialState,
  Actions as AppActions,
  Reducer as AppReducer,
  Middleware as AppMiddleware,
} from '../Stores';

const {
  validateNumberInput,
  calculateSumTotal,
  resetInputs
} = AppMiddleware;

const {
  SET_INPUT_ONE,
  SET_INPUT_TWO,
  SUM_INPUTS,
  CLEAR_INPUTS
} = AppActions;

export default function App() {
  const [{
    inputOne,
    inputTwo,
    calculatedValue
  },
    widgetDispatch
  ] = React.useReducer(AppReducer, AppInitialState);

  const setInputOne = (val: number) => actionDispatcher(widgetDispatch, SET_INPUT_ONE, val);
  const setInputTwo = (val: number) => actionDispatcher(widgetDispatch, SET_INPUT_TWO, val);
  const setSum = (val: number) => actionDispatcher(widgetDispatch, SUM_INPUTS, val);
  const setReset = () => actionDispatcher(widgetDispatch, CLEAR_INPUTS);

  const handleInputOneChange = React.useCallback(validateNumberInput(setInputOne), [inputOne]);
  const handleInputTwoChange = React.useCallback(validateNumberInput(setInputTwo), [inputTwo]);
  const handleSubmit = React.useCallback(calculateSumTotal(inputOne, inputTwo, setSum), [inputOne, inputTwo]);
  const handleReset = React.useCallback(resetInputs(setReset), [inputOne, inputTwo]);

  return (
    <AppContainer>
      <AddTwoWidget
        inputOne={inputOne}
        inputTwo={inputTwo}
        sumTotal={calculatedValue}
        inputOneChange={handleInputOneChange}
        inputTwoChange={handleInputTwoChange}
        onReset={handleReset}
        onSubmit={handleSubmit}
      />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f0f0;
  flex: 1;
`;
