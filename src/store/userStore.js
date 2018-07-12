import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import authenReducer from '../reducers/authen';
import navigationReducer from '../reducers/navigation';
import { middleware } from '../StackNavigator';

const root = combineReducers({ user: authenReducer, nav: navigationReducer })

export const store = createStore(root, applyMiddleware(ReduxThunk, middleware));