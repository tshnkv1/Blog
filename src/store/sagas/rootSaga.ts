import { all } from "redux-saga/effects";
import postsSagas from "./postsSagas";
import commentsSagas from "./commentsSagas";

function* rootSaga() {
    yield all([postsSagas(), commentsSagas()]);
};

export default rootSaga;
