const months = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getDay = date => {
	return months[new Date(date).getDay()];
};

export const getPosition = date => {
	return new Date(date).getDay();
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

export const parseDataForChart = data => {
	let dataArray = [];
	const rawData = groupByProp(data, 'n');
	Object.values(rawData).forEach(function (arrayItem) {
		const newItem = {};
		arrayItem.forEach(function (item) {
			if (Object.keys(newItem).length === 0) {
				newItem.x = getDay(item.n);
				newItem.position = getPosition(item.n);
				const ageArray = [];
				item.o.forEach(function (ageInfo) {
					const newAgeInfo = {};
					newAgeInfo.group = ageInfo.n;
					newAgeInfo.value = ageInfo.v;
					ageArray.push(newAgeInfo);
				});
				newItem.blockValues = ageArray;
			} else {
				item.o.forEach(function (ageInfo) {
					let index = -1;
					newItem.blockValues.forEach(function (groupObj, i) {
						if (groupObj.group === ageInfo.n) index = i;
					});
					newItem.blockValues[index].value += ageInfo.v;
				});
			}
		});
		dataArray.push(newItem);
	});
	const resultData = [];
	Object.values(groupByProp(dataArray, 'x')).forEach(function (arrayItem) {
		let newItem = {};
		arrayItem.forEach(function (item) {
			if (Object.keys(newItem).length === 0) {
				newItem = item;
			} else {
				item.blockValues.forEach(function (ageInfo) {
					let index = -1;
					newItem.blockValues.forEach(function (groupObj, i) {
						if (groupObj.group === ageInfo.group) index = i;
					});
					newItem.blockValues[index].value += ageInfo.value;
				});
			}
		});
		resultData.push(newItem);
	});
	return resultData.sort((a, b) => (a.position > b.position ? 1 : -1));
};

// [x: 'Mon' , blocValues: [{group: yang, value: 50, color: ''}]
