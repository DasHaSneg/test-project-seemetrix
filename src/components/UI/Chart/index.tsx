import * as React from 'react';
import { useEffect, useState } from 'react';
import ChartLegend from './Legend';
import ChartGrid from './Grid';

interface IChartData {
	name: string;
	data: IBlockData[];
}

export interface IBlockData {
	x: string;
	blockValues: IAgeInfo[];
}

export interface IAgeInfo {
	group: string;
	value: number;
}

// eslint-disable-next-line react/prop-types
const Chart = ({ name, data }: IChartData) => {
	const getLegendData = (): string[] => {
		if (data[0] && data[0].blockValues) return data[0].blockValues.map(item => item.group) as string[];
		return [];
	};

	return (
		<div className="chart">
			<div className="chart_name">{name}</div>
			<div className="chart_grid_wrapper2">
				<div className="chart_grid_wrapper">
					<ChartGrid data={data} />
				</div>
				<ChartLegend names={getLegendData()} />
			</div>
		</div>
	);
};

export default Chart;
