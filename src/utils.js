const months = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getDay = date => {
	return months[new Date(date).getDay()];
};

export const getPosition = date => {
	return new Date(date).getDay();
};

const getAgePosition = group => {
	switch (group) {
		case 'undefined':
			return 0;
		case 'kid':
			return 1;
		case 'young':
			return 2;
		case 'adult':
			return 3;
		case 'old':
			return 4;
		default:
			console.log('unknown group');
			return 0;
	}
};

const getColor = group => {
	switch (group) {
		case 'undefined':
			return '#999999';
		case 'kid':
			return '#109618';
		case 'young':
			return '#3399ff';
		case 'adult':
			return '#3366cc';
		case 'old':
			return '#dc3912';
		default:
			console.log('unknown group');
			return 0;
	}
};

const groupByProp = (data, prop) => {
	return data.reduce((groups, item) => {
		const val = item[prop];
		// eslint-disable-next-line no-param-reassign
		groups[val] = groups[val] || [];
		groups[val].push(item);
		return groups;
	}, {});
};

const getIndex = (obj1, obj2, prop1, prop2) => {
	let index = -1;
	obj1.blockValues.forEach(function (groupObj, i) {
		if (groupObj[prop1] === obj2[prop2]) index = i;
	});
	return index;
};

const createNewItem = obj => {
	const newItemObj = {};
	newItemObj.x = getDay(obj.n);
	newItemObj.position = getPosition(obj.n);
	const ageArray = [];
	obj.o.forEach(function (ageInfo) {
		const newAgeInfo = {};
		newAgeInfo.group = ageInfo.n;
		newAgeInfo.value = ageInfo.v;
		newAgeInfo.position = getAgePosition(ageInfo.n);
		newAgeInfo.color = getColor(ageInfo.n);
		ageArray.push(newAgeInfo);
	});
	newItemObj.blockValues = ageArray;
	return newItemObj;
};

const groupResData = dataArray => {
	const resultData = [];
	Object.values(groupByProp(dataArray, 'x')).forEach(function (arrayItem) {
		let newItem = {};
		arrayItem.forEach(function (item) {
			if (Object.keys(newItem).length === 0) {
				newItem = item;
			} else {
				item.blockValues.forEach(function (ageInfo) {
					newItem.blockValues[getIndex(newItem, ageInfo, 'group', 'group')].value += ageInfo.value;
				});
			}
		});
		resultData.push(newItem);
	});
	return resultData;
};

const createSuitableArray = data => {
	const dataArray = [];
	const rawData = groupByProp(data, 'n');
	Object.values(rawData).forEach(function (arrayItem) {
		let newItem = {};
		arrayItem.forEach(function (item) {
			if (Object.keys(newItem).length === 0) {
				newItem = createNewItem(item);
			} else {
				item.o.forEach(function (ageInfo) {
					newItem.blockValues[getIndex(newItem, ageInfo, 'group', 'n')].value += ageInfo.v;
				});
			}
		});
		dataArray.push(newItem);
	});
	return dataArray;
};

const comparator = (a, b) => (a.position > b.position ? 1 : -1);

const sortData = arr => {
	arr.sort(comparator);
	arr.forEach(item => {
		// eslint-disable-next-line no-param-reassign
		delete item.position;
		item.blockValues.sort(comparator);
	});
	return arr;
};

export const parseDataForChart = data => {
	const dataArray = createSuitableArray(data);
	let resultData = groupResData(dataArray);
	resultData = sortData(resultData);
	console.log(resultData);
	return resultData;
};
