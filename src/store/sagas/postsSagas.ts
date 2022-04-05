import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../api/index';
import * as actions from '../actions/action';
import { GetSelectedPostRequest, IPost } from '../../types/index';

// worker
function* getPosts() {
  try {
    const result: IPost[] = yield call(api.getPostsApi);
    yield put(actions.getPostsSuccess(result));
  } catch(e) {
    console.error(e);
  }
};

function* getSelectedPost(action: GetSelectedPostRequest) {
  try {
    const result: IPost[] = yield call(api.getSelectedPostApi, action.postId);
    yield put(actions.setSelectedPost(result));
  } catch(e) {
    console.error(e);
    yield put(actions.getSelectedPostFailure());
  }
};

// watcher
function* watchGetPostsRequest() {
  yield takeEvery(actions.Types.GET_POSTS_REQUEST, getPosts);
};

function* watchSetSelectedPost() {
  yield takeEvery(actions.Types.GET_SELECTED_POST_REQUEST, getSelectedPost);
};

function* postsSagas() {
  yield all([watchGetPostsRequest(), watchSetSelectedPost()]);
};

export default postsSagas;
