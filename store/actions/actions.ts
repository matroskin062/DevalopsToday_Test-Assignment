import { addPost, getAllPosts } from './../../api/api';
import {
  IAddPostAction,
  IPost,
  ISetPostAction,
  Thunk,
} from '../../types/types';
import { Types } from '../../types/constants';

export const setPosts = (payload: IPost[]): ISetPostAction => ({
  type: Types.SET_POSTS,
  payload,
});

export const setNewPost = (payload: IPost): IAddPostAction => ({
  type: Types.ADD_POSTS,
  payload,
});

export const getPosts = (): Thunk => async (dispatch) => {
  const posts = await getAllPosts();
  dispatch(setPosts(posts));
};

export const addNewPost = (post: IPost): Thunk => async (dispatch) => {
  const newPost = await addPost(post);
  dispatch(setNewPost(newPost));
};
