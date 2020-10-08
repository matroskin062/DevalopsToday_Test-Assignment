import { Types } from './../../types/constants';
import { HYDRATE } from 'next-redux-wrapper';
import { IPostsState, ActionTypes } from '../../types/types';

const initialState: IPostsState = { items: [] };

const posts = (state = initialState, action: ActionTypes): IPostsState => {
  switch (action.type) {
    case Types.SET_POSTS:
      return {
        items: action.payload,
      };
    case Types.ADD_POSTS:
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
