import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rooteReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rooteReducer;
