import * as React from 'react';
import { IAgeInfo, IBlockData } from '../index';
import { ROW_NUM } from '../../../../constants';
import Blocks from './Blocks';

export interface IChartGridData {
	data: IBlockData[];
}

const ChartGrid = ({ data }: IChartGridData) => {
	const getGridX = (): string[] => {
		return data.map(item => item.x);
	};

	const getMaxValue = (): number => {
		let maxObj: IAgeInfo;
		let totalMaxVal = -1;
		data.forEach(dataItem => {
			maxObj = dataItem.blockValues.reduce((acc, curr) => (acc.value > curr.value ? acc : curr));
			if (maxObj.value > totalMaxVal) totalMaxVal = maxObj.value;
		});
		return totalMaxVal;
	};

	const getYValues = () => {
		const size = Math.floor(getMaxValue() / ROW_NUM);
		return [...Array.from({ length: ROW_NUM }, (v, k) => (k as number) + size).reverse(), 0];
	};

	return (
		<>
			<Blocks data={data} />
			<div className="chart_y">
				{getYValues().map(value => {
					return (
						<div className="chart_y_item" key={value}>
							{value}
						</div>
					);
				})}
			</div>
			<div className="chart_white_block" />
			<div className="chart_grid">
				{Array.from({ length: 40 }).map(() => {
					return <div />;
				})}
			</div>
			<div className="chart_x">
				{() =>
					getGridX().map(x => {
						return (
							<div className="chart_x_item" key={x}>
								{x}
							</div>
						);
					})
				}
			</div>
		</>
	);
};

export default ChartGrid;
