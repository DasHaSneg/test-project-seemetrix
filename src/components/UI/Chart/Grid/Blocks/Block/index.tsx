import * as React from 'react';
import { useEffect, useState } from 'react';
import { IAgeInfo } from '../../../index';
import Unit from './Unit';

interface IBlock {
	blockValues: IAgeInfo[];
	pxSize: number;
}

const Block = ({ blockValues, pxSize }: IBlock) => {
	const [height, setHeight] = useState('');

	const getMaxValue = () => {
		return blockValues.reduce((acc, curr) => (acc.value > curr.value ? acc : curr)).value * pxSize;
	};

	useEffect(() => {
		setHeight(`${getMaxValue()}px`);
	}, [blockValues]);

	return (
		<div className="chart_block" style={{ height }}>
			{blockValues &&
				blockValues.reverse().map(unitValue => {
					return <Unit key={unitValue.group} unitValue={unitValue} pxSize={pxSize} />;
				})}
		</div>
	);
};

export default Block;
