import * as React from 'react';
import { IBlockData } from '../index';
import { MAX_HEIGHT, ROW_NUM } from '../../../../constants';
import Blocks from './Blocks';

export interface IChartGridData {
	data: IBlockData[];
}

const ChartGrid = ({ data }: IChartGridData) => {
	const getXValues = (): string[] => {
		return data.map(item => item.x);
	};

	const getMaxValue = (): number => {
		let sum: number;
		let totalMaxVal = -1;
		data.forEach(dataItem => {
			sum = 0;
			dataItem.blockValues.forEach(val => {
				sum += val.value;
			});
			if (sum > totalMaxVal) totalMaxVal = sum;
		});
		return totalMaxVal;
	};

	const getPxSize = () => {
		const mx = getMaxValue();
		return mx !== 0 ? MAX_HEIGHT / mx : 0;
	};

	const getYValues = () => {
		const mx = getMaxValue();
		if (mx !== -1) {
			const values = [];
			const size = mx / ROW_NUM;
			for (let i = mx; i >= 0; i -= size) {
				values.push(i);
			}
			return values;
		}
		return Array(ROW_NUM + 1).fill(0);
	};

	return (
		<>
			<Blocks data={data} pxSize={getPxSize()} />
			<div className="chart_y">
				{getYValues().map(value => {
					return <div className="chart_y_item">{value}</div>;
				})}
			</div>
			<div className="chart_white_block" />
			<div className="chart_grid">
				{Array.from({ length: 40 }).map((number, index) => {
					// eslint-disable-next-line react/no-array-index-key
					return <div key={index} />;
				})}
			</div>
			<div className="chart_x">
				{getXValues().map(x => {
					return (
						<div className="chart_x_item" key={x}>
							{x}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ChartGrid;
