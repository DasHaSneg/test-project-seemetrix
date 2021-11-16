import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DataSelector from '../../UI/DataSelector';
import Chart from '../../UI/Chart';
import { getInfo, setIds, setId } from '../../../redux/actions/data';
import { selectChartInfoByDeviceIds, selectDevicesId } from '../../../redux/selectors';
import { rootState } from '../../../redux/rootReducer';

const ChartPage = () => {
	const ids = useSelector((state: rootState) => selectDevicesId(state.dataReducer));
	const selectedIds = useSelector((state: rootState) => state.dataReducer.selectedIds);
	const chartData = useSelector((state: rootState) => selectChartInfoByDeviceIds(state.dataReducer, selectedIds));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getInfo());
	}, []);

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		console.log(selectedIds.indexOf(value) !== -1);
		if (selectedIds.indexOf(value) === -1) dispatch(setId(value));
		else {
			dispatch(setIds(selectedIds.filter((id: string) => id !== value)));
		}
	};

	return (
		<div className="wrapper">
			<DataSelector options={ids} handleSelect={handleSelect} selectedIds={selectedIds} />
			<Chart name="Total Views: Age (by day of week)" data={chartData} />
		</div>
	);
};

export default ChartPage;
