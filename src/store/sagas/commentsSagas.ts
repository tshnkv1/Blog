import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../api/index';
import * as actions from '../actions/action';
import {
  IComment,
  GetSelectedPostRequest,
} from '../../types/index';

// worker
function* getComments(action: GetSelectedPostRequest) {
  try {
    const result: IComment[] = yield call(api.getCommentsApi, action.postId);
    yield put(actions.getCommentsSuccess(result));
  } catch(e) {
    yield put(actions.getCommentsFailure());
  }
};

// watcher
function* watchGetCommentsRequest() {
  yield takeEvery(actions.Types.GET_COMMENTS_REQUEST, getComments);
};

function* commentsSagas() {
  yield all([watchGetCommentsRequest()]);
};

export default commentsSagas;
