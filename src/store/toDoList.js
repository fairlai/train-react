import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import toDoListReducer from '../reducer/toDoListReducer';

const reducer = combineReducers({
  toDoListReducer,
});

const middleware = [thunkMiddleware];

const initState = {
  toDoListReducer: {
    list: [{id: 0, content: 'hehe', finish: true}],
    value: '',
    status:'all',
    searchValue:'',
    id:0
  },
};
export default createStore(reducer, initState, applyMiddleware(...middleware))
