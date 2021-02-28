type WidgetActionType = 'SET_INPUT_ONE' | 'SET_INPUT_TWO' | 'CLEAR_INPUTS' | 'SUM_INPUTS';

export const SET_INPUT_ONE: WidgetActionType = 'SET_INPUT_ONE';
export const SET_INPUT_TWO: WidgetActionType = 'SET_INPUT_TWO';
export const CLEAR_INPUTS: WidgetActionType = 'CLEAR_INPUTS';
export const SUM_INPUTS: WidgetActionType = 'SUM_INPUTS';

export interface WidgetAction {
  type: WidgetActionType;
  payload: number;
}

export const WidgetActionTypes = {
  SET_INPUT_ONE,
  SET_INPUT_TWO,
  CLEAR_INPUTS,
  SUM_INPUTS
}
