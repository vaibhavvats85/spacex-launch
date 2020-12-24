import * as fromActions from './actions';

export const filterState = {
    launch_year: '',
    land_success: true,
    launch_success: true
};

export const launchProgramsInitialState = {
    data: [],
    hasError: false,
    loading: true,
    errorCode: 0,
    filters: filterState
}

export function launchProgramsreducer(state = launchProgramsInitialState, action = fromActions.launchProgramsActions) {
    switch (action.type) {
        case fromActions.LAUNCH_PROGRAMS_REQUEST:
            return {
                ...state,
                loading: true,
                data: []
            }
        case fromActions.LAUNCH_PROGRAMS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case fromActions.LAUNCH_PROGRAMS_FAIL:
            return {
                ...state,
                hasError: true,
                loading: false,
                errorCode: action.payload
            }
        default:
            return state;
    }
};