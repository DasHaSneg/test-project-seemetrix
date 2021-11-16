import * as React from 'react';
import Block from './Block';
import { IChartGridData } from '../index';

const Blocks = ({ data }: IChartGridData) => {
	return (
		<div className="chart_blocks">
			{data.map((dataItem, index) => {
				// eslint-disable-next-line react/no-array-index-key
				return <Block key={index} blockValues={dataItem.blockValues} />;
			})}
		</div>
	);
};

export default Blocks;
