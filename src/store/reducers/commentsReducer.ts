import { Types } from '../actions/action';
import {
  CommentsState,
  CommentsAction,
} from '../../types/index';

const initialState: CommentsState = {
  pending: false,
  comments: [],
  selectedComment: [],
  error: false,
};

export const commentsReducer = (state = initialState, action: CommentsAction) => {
  switch (action.type) {
    case Types.GET_COMMENTS_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case Types.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        comments: action.payload,
      };

    case Types.GET_COMMENTS_FAILURE:
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

