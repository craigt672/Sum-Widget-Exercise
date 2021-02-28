import { WidgetActionTypes } from './AddTwoWidget/Actions';
import { INITIAL_STATE } from './AddTwoWidget/InitialState';
import Reducer from './AddTwoWidget/Reducers';
import * as Middleware from './AddTwoWidget/Middleware';
const InitialState = INITIAL_STATE;
const Actions = WidgetActionTypes;

const actionDispatcher = (dispacther: React.Dispatch<any>, type: string, payload?: any) => dispacther({ type, payload });

export {
  actionDispatcher,
  InitialState,
  Actions,
  Middleware,
  Reducer
}
