import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from './../store/store';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { SET_POSTS, ADD_POSTS } from './../store/actions/actions';

export interface IPost {
  title: string;
  body: string;
  id: number;
  comments: IComment[];
}

export interface IPostsState {
  items: IPost[];
}

export interface IComment {
  body: string;
  id: number;
}

export interface ISetPostAction {
  type: typeof SET_POSTS;
  payload: IPost[];
}

export interface IAddPostAction {
  type: typeof ADD_POSTS;
  payload: IPost;
}

export interface IHydrateAction {
  type: typeof HYDRATE;
  payload;
}

export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type ActionTypes = ISetPostAction | IAddPostAction | IHydrateAction;
