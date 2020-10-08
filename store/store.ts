import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './reducers/postsReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({ posts: postsReducer });

export const initStore: MakeStore = () =>
  createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper(initStore);

export type RootState = ReturnType<typeof reducers>;
