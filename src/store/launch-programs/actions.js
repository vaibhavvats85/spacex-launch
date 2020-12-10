export const LAUNCH_PROGRAMS_REQUEST = '[LAUNCH PROGRAMS REQUEST] Launch programs Request';
export const LAUNCH_PROGRAMS_SUCCESS = '[LAUNCH PROGRAMS SUCCESS] Launch programs Success';
export const LAUNCH_PROGRAMS_FAIL = '[LAUNCH PROGRAMS FAIL] Launch programs Fail';
export const LAUNCH_PROGRAMS_FILTERS = '[LAUNCH PROGRAMS FILTERS] Launch programs Filters';

export function launchProgramRequest() {
    return {
        type: LAUNCH_PROGRAMS_REQUEST,
    }
};

export function launchProgramFilter(payload) {
    return {
        type: LAUNCH_PROGRAMS_FILTERS,
        payload
    }
}

export function launchProgramSuccess(payload) {
    return {
        type: LAUNCH_PROGRAMS_SUCCESS,
        payload
    }
};

export function launchProgramFail(payload) {
    return {
        type: LAUNCH_PROGRAMS_FAIL,
        payload
    }
};

export const launchProgramsActions = launchProgramRequest |
    launchProgramSuccess |
    launchProgramFail |
    launchProgramFilter;