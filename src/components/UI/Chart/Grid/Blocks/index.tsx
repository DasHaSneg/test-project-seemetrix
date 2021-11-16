import * as React from 'react';
import Block from './Block';
import { IBlockData } from '../../index';

interface IBlocks {
	data: IBlockData[];
	pxSize: number;
}

const Blocks = ({ data, pxSize }: IBlocks) => {
	return (
		<div className="chart_blocks">
			{data.map((dataItem, index) => {
				// eslint-disable-next-line react/no-array-index-key
				return <Block key={index} blockValues={dataItem.blockValues} pxSize={pxSize} />;
			})}
		</div>
	);
};

export default Blocks;
