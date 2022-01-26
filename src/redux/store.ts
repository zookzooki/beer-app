import {
  applyMiddleware, combineReducers, createStore, Middleware, Dispatch, Action,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import list from './reducers/listReducer';

const middleware: Middleware = () => (next: Dispatch) => <A extends Action>(action: A): A => next(action);

const store = createStore(
  combineReducers(
    {
      list,
    },
  ),
  composeWithDevTools(applyMiddleware(thunk, middleware)),
);

store.subscribe(() => {
  window.localStorage.setItem('beer', JSON.stringify(store.getState()));
});

export default store;
