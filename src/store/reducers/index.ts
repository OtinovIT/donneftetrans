import { combineReducers } from 'redux';
import ContentReducer from './contentReducer';

export const reducer = combineReducers({
	content: ContentReducer
});
