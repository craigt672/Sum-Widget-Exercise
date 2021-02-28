import { WidgetAction, WidgetActionTypes } from './Actions';
import { INITIAL_STATE, WidgetState } from './InitialState';

export default function reducer(state: WidgetState, action: WidgetAction): WidgetState {
  switch (action.type) {
    case WidgetActionTypes.SET_INPUT_ONE:
      return { ...state, inputOne: action.payload };
    case WidgetActionTypes.SET_INPUT_TWO:
      return { ...state, inputTwo: action.payload };
    case WidgetActionTypes.SUM_INPUTS:
      return { ...state, calculatedValue: action.payload };
    case WidgetActionTypes.CLEAR_INPUTS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
