const BASE_URL = 'https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/';
const API_KEY = 'd3aa35bde5ef46899b91aca9c66e174e';
const START_DATE = '2020/03/08%2012:00:00';
const END_DATE = '2020/03/08%2012:00:00';
const TIME = '2012:00:00';
const TZO = '0';
// `${BASE_URL}?key=${API_KEY}&b=${START_DATE}%${TIME}&e=${END_DATE}$tzo=${TZO}`

const fetchInfo = () => {
	return fetch('https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0')
		.then(response => {
			return response;
		})
		.catch(error => {
			console.log(error);
		});
};

export default fetchInfo;
