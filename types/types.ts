import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../store/store';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Types } from './constants';

export interface IPost {
  title: string;
  body: string;
  id: number;
  comments: IComment[];
}

export interface IPostState {
  post: IPost;
}

export interface IPostsState {
  items: IPost[];
}

export interface IComment {
  body: string;
  id?: number;
  postId: number;
}

export interface ISetPostsAction {
  type: typeof Types.SET_POSTS;
  payload: IPost[];
}

export interface IAddPostAction {
  type: typeof Types.ADD_POSTS;
  payload: IPost;
}

export interface IHydrateAction {
  type: typeof HYDRATE;
  payload: any;
}

export interface ISetPostAction {
  type: typeof Types.SET_POST;
  payload: IPost;
}

export interface ISetCommentAction {
  type: typeof Types.SET_COMMENT;
  payload: IComment;
}

export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type ActionTypes =
  | ISetPostAction
  | IAddPostAction
  | IHydrateAction
  | ISetPostsAction
  | ISetCommentAction;
