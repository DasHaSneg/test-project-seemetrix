import { SET_INFO, SET_IDS, SET_ID } from '../../types';

interface IState {
	data: [];
	selectedIds: string[];
}

interface IAction {
	type: string;
	payload: any;
}

// TODO type api

const initialState: IState = {
	data: [],
	selectedIds: [],
};

const dataReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case SET_INFO:
			return { ...state, data: action.payload };
		case SET_IDS:
			return { ...state, selectedIds: action.payload };
		case SET_ID:
			return { ...state, selectedIds: [...state.selectedIds, action.payload] };
		default:
			return state;
	}
};

export default dataReducer;
