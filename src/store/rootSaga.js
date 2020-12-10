import { all } from 'redux-saga/effects';
import { watchLaunchPrograms, watchLaunchProgramsFilters } from './launch-programs/saga';

export default function* rootSaga() {
    yield all([watchLaunchPrograms(),
    watchLaunchProgramsFilters()]);
}