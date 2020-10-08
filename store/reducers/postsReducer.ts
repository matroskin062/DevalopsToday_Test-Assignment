import { SET_POSTS, ADD_POSTS } from './../actions/actions';
import { IPostsState, ActionTypes } from './../../interfaces/interfaces';
const initialState: IPostsState = {
  posts: [],
};

export const postsReducer = (
  state = initialState,
  action: ActionTypes
): IPostsState => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
