import { Types } from '../actions/action';
import {
  PostsState,
  PostsAction,
} from '../../types/index';

const initialState: PostsState = {
  pending: false,
  posts: [],
  selectedPost: [],
  error: false,
};

export const postsReducer = (state = initialState, action: PostsAction) => {
  switch (action.type) {
    case Types.GET_POSTS_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case Types.GET_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload,
      };

    case Types.GET_POSTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
      };
    
    case Types.GET_SELECTED_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case Types.SET_SELECTED_POST:
      return {
        ...state,
        pending: false,
        selectedPost: action.payload,
      };

    case Types.GET_SELECTED_POST_FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
      };

    default:
      return {
        ...state,
      };
  }
};

