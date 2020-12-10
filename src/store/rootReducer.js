import { combineReducers } from "redux";
import { launchProgramsInitialState, launchProgramsreducer } from "./launch-programs/reducer";

export const appState = {
    launchPrograms: launchProgramsreducer
};

export const appInitialState = {
    launchPrograms: launchProgramsInitialState
};

export const rootReducer = combineReducers(appState, appInitialState);
