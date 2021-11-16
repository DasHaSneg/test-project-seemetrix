// eslint-disable-next-line import/extensions
import { parseDataForChart } from '../../utils.js';

const selectData = (state: any) => state.data;

export const selectDataByDeviceId = (state: any, id: string) => {
	return selectData(state).filter((item: { n: string }) => item.n === id)[0];
};

export const selectDataByDeviceIds = (state: any, ids: string[]) => {
	return ids.map(id => selectDataByDeviceId(state, id));
};

export const selectDateInfoByDeviceIds = (state: any, ids: string[]) => {
	return (<any>selectDataByDeviceIds(state, ids)).map((item: any) => item?.o);
};

export const selectChartInfoByDeviceIds = (state: any, ids: string[]) => {
	let dataArray: any[] = [];
	const data = selectDateInfoByDeviceIds(state, ids);
	data.forEach(function (item: any[]) {
		dataArray = dataArray.concat(item);
	});
	if (dataArray.length !== 0 && typeof dataArray[0] !== 'undefined') return parseDataForChart(dataArray);
	return [];
};

export const selectDevicesId = (state: any) => {
	return selectData(state).map((item: { n: any }) => item.n);
};
