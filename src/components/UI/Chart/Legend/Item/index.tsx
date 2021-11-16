import * as React from 'react';

interface ILegendItem {
	name: string;
}

export const LegendItem = ({ name }: ILegendItem) => {
	return (
		<div className="chart_legend_item">
			<div className="chart_legend_item_block" />
			<div className="chart_legend_item_text">{`${name[0].toUpperCase()}${name.slice(1)}`}</div>
		</div>
	);
};

export default LegendItem;
