import { IPost, IPostState, ActionTypes } from './../../types/types';
import { Types } from './../../types/constants';
import { HYDRATE } from 'next-redux-wrapper';
const initialState: IPostState = {
  post: null,
};

export const currentPostReducer = (
  state = initialState,
  action: ActionTypes
): IPostState => {
  switch (action.type) {
    case Types.SET_POST:
      return {
        post: action.payload,
      };
    case Types.SET_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload],
        },
      };
    case HYDRATE:
      return { ...state, ...action.payload.curPost };
    default:
      return state;
  }
};

export default currentPostReducer;
