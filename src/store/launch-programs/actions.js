export const LAUNCH_PROGRAMS_REQUEST = '[LAUNCH PROGRAMS REQUEST] Launch programs Request';
export const LAUNCH_PROGRAMS_SUCCESS = '[LAUNCH PROGRAMS SUCCESS] Launch programs Success';
export const LAUNCH_PROGRAMS_FAIL = '[LAUNCH PROGRAMS FAIL] Launch programs Fail';

export function launchProgramRequest(payload) {
    return {
        type: LAUNCH_PROGRAMS_REQUEST,
        payload
    }
};

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
    launchProgramFail;