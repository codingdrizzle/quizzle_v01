import { combineReducers } from "redux";
import isLoadedReducer from "./loaded-reducer";

export const allReducers = combineReducers({
    loaded: isLoadedReducer,
})