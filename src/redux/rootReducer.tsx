import { combineReducers, AnyAction } from "redux";
import { AuthReducer, AuthActionType } from "./Ducks/UserDuck"
const rootReducer = combineReducers({
  auth: AuthReducer,
});
import { ReducerState } from "react";

export default (state: ReducerState<any>, action: AnyAction) => rootReducer(action.type === AuthActionType.LOGOUT ? undefined : state, action) 