import { postsReducer } from './postsReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({ posts: postsReducer });

export default reducers;
