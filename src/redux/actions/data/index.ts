import { Dispatch } from 'redux';
import fetchInfo from '../../../requests/seemetrix';
import { SET_IDS, SET_ID, SET_INFO } from '../../types';

function setInfo(payload: any) {
	return {
		type: SET_INFO,
		payload,
	};
}

export function setIds(payload: string[]) {
	return {
		type: SET_IDS,
		payload,
	};
}

export function setId(payload: string) {
	return {
		type: SET_ID,
		payload,
	};
}

export function getInfo() {
	return (dispatch: Dispatch) => {
		fetchInfo().then(response => {
			response?.json().then(info => {
				dispatch(setInfo(info.data.o));
				dispatch(setIds(info.data.o.map((item: { n: any }) => item.n)));
			});
		});
	};
}
