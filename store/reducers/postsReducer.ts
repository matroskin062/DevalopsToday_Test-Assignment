import { HYDRATE } from 'next-redux-wrapper';
import { SET_POSTS, ADD_POSTS } from './../actions/actions';
import { IPostsState, ActionTypes } from './../../interfaces/interfaces';
import { AnyAction } from 'redux';
const initialState: IPostsState = { items: [] };

const posts = (state = initialState, action: ActionTypes): IPostsState => {
  switch (action.type) {
    case SET_POSTS:
      return {
        items: action.payload,
      };
    case ADD_POSTS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case HYDRATE: {
      return { ...state, ...action.payload.posts };
    }
    default:
      return state;
  }
};

export default posts;
