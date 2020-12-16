import * as axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as fromActions from './actions';

const SPACE_DATA_ENDPOINT = 'https://api.spacexdata.com/v3/launches?limit=100';

export function* watchLaunchPrograms() {
    yield takeLatest(fromActions.LAUNCH_PROGRAMS_REQUEST, getLaunchPrograms)
}

function* getLaunchPrograms() {
    try {
        const lauchPrograms = yield call(axios, SPACE_DATA_ENDPOINT);
        yield put(fromActions.launchProgramSuccess(lauchPrograms.data))
    } catch (err) {
        yield put(fromActions.launchProgramFail(err))
    }
}

export function* watchLaunchProgramsFilters() {
    yield takeLatest(fromActions.LAUNCH_PROGRAMS_FILTERS, getLaunchProgramsFilters)
}

function* getLaunchProgramsFilters({ payload }) {
    try {
        const filteredData = yield call(axios, { url: SPACE_DATA_ENDPOINT, params: payload });
        yield put(fromActions.launchProgramSuccess(filteredData.data))
    } catch (err) {
        yield put(fromActions.launchProgramFail(err))
    }
}
