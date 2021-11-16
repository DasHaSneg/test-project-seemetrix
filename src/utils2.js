function groupArr(arr, ...props) {
	return arr.reduce(function (groups, item) {
		const key = props.map(k => item[k]).join('|');
		// eslint-disable-next-line no-param-reassign
		groups[key] = groups[key] || [];
		groups[key].push(item);
		return groups;
	}, {});
}
const array = [
	{ date: '2018-01-01', website: 'example.com', revenue: 100 },
	{ date: '2018-01-01', website: 'example2.com', revenue: 200 },
	{ date: '2018-01-02', website: 'example.com', revenue: 300 },
	{ date: '2018-01-01', website: 'example.com', revenue: 340 },
];
const grouped = groupArr(array, 'date');

console.log(grouped);
