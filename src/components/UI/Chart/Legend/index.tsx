import * as React from 'react';
import LegendItem from './Item';

export interface IChartLegend {
	legValue: {
		name: string;
		color: string;
	}[];
}

const ChartLegend = ({ legValue }: IChartLegend) => {
	return (
		<div className="chart_legend_wrapper">
			<div className="chart_legend">
				{legValue.map(val => {
					return <LegendItem key={val.name} name={val.name} color={val.color} />;
				})}
			</div>
		</div>
	);
};

export default ChartLegend;
