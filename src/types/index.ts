export interface IPost {
  id: number,
  title: string,
  body: string
};

export interface IComment {
  id: number,
  name: string,
  body: string,
};

// --- Api --- //

export type ApiRequest = IPost[] | IComment[];

// Actions

export interface ActionRequest {
  type: string,
};

// Posts
export interface GetPostsSuccess {
  type: string,
  payload: IPost[],
};

export interface GetSelectedPostRequest {
  type: string,
  postId: number,
};

export interface SetSelectedPost {
  type: string,
  payload: IPost[],
};

// Comments
export interface GetCommentsSuccess {
  type: string,
  payload: IComment[],
};

// Reducers

// Posts
export interface PostsState {
  pending: boolean,
  posts: IPost[],
  selectedPost: IPost[],
  error: boolean,
};

export interface PostsAction {
  type: string,
  payload: PostsState,
};

// Comments
export interface CommentsState {
  pending: boolean,
  comments: IComment[],
  selectedComment: IComment[],
  error: boolean,
};

export interface CommentsAction {
  type: string,
  payload: CommentsState,
};