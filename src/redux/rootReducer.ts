import { combineReducers } from 'redux';
import { dataReducer } from './reducers/data';

export const rootReducer = combineReducers({
	dataReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
