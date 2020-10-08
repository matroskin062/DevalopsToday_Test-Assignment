import { getAllPosts } from './../../api/api';
import {
  IAddPostAction,
  IPost,
  ISetPostAction,
  Thunk,
} from './../../interfaces/interfaces';
import axios from 'axios';
export const SET_POSTS = 'SET_POSTS';
export const ADD_POSTS = 'ADD_POSTS';

export const setPosts = (payload: IPost[]): ISetPostAction => ({
  type: SET_POSTS,
  payload,
});

export const addPost = (payload: IPost): IAddPostAction => ({
  type: ADD_POSTS,
  payload,
});

export const getPosts = (): Thunk => async (dispatch) => {
  const posts = await getAllPosts();
  dispatch(setPosts(posts));
};

export const addNewPost = (post: IPost): Thunk => async (dispatch) => {
  const { data } = await axios.post<IPost>(
    'https://simple-blog-api.crew.red/posts',
    post
  );

  dispatch(addPost(data));
};
