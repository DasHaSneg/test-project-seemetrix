import * as React from 'react';
import LegendItem from './Item';

interface IChartLegend {
	names: string[];
}

const ChartLegend = ({ names }: IChartLegend) => {
	return (
		<div className="chart_legend_wrapper">
			<div className="chart_legend">
				{names.map(name => {
					return <LegendItem key={name} name={name} />;
				})}
			</div>
		</div>
	);
};

export default ChartLegend;
