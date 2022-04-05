import {
  IPost,
  IComment,
  ActionRequest,
  GetPostsSuccess,
  GetSelectedPostRequest,
  SetSelectedPost,
  GetCommentsSuccess,
} from "../../types/index";

export const Types = {
  GET_POSTS_REQUEST: 'GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_FAILURE: 'GET_POSTS_FAILURE',
  GET_SELECTED_POST_REQUEST: 'GET_SELECTED_POST_REQUEST',
  SET_SELECTED_POST: 'SET_SELECTED_POST',
  GET_SELECTED_POST_FAILURE: 'GET_SELECTED_POST_FAILURE',
  GET_COMMENTS_REQUEST: 'GET_COMMENTS_REQUEST',
  GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
  GET_COMMENTS_FAILURE: 'GET_COMMENTS_FAILURE',
};
  
// Posts
export const getPostsRequest = (): ActionRequest => ({
  type: Types.GET_POSTS_REQUEST,
});

export const getPostsSuccess = (posts: IPost[]):GetPostsSuccess => ({
  type: Types.GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = (): ActionRequest => ({
  type: Types.GET_POSTS_FAILURE,
});

export const getSelectedPostRequest = (id: number): GetSelectedPostRequest => ({
  type: Types.GET_SELECTED_POST_REQUEST,
  postId: id,
});

export const setSelectedPost = (post: IPost[]): SetSelectedPost => ({
  type: Types.SET_SELECTED_POST,
  payload: post,
});

export const getSelectedPostFailure = (): ActionRequest => ({
  type: Types.GET_SELECTED_POST_FAILURE,
});

// Comments

export const getCommentsRequest = (id: number): GetSelectedPostRequest => ({
  type: Types.GET_COMMENTS_REQUEST,
  postId: id,
});

export const getCommentsSuccess = (comments: IComment[]): GetCommentsSuccess => ({
  type: Types.GET_COMMENTS_SUCCESS,
  payload: comments,
});

export const getCommentsFailure = (): ActionRequest => ({
  type: Types.GET_COMMENTS_FAILURE,
});

