import * as React from 'react';
import { useEffect, useState } from 'react';
import { IAgeInfo } from '../../../index';
import Unit from '../Unit';

interface IBlock {
	blockValues: IAgeInfo[];
	pxSize: number;
}

const Block = ({ blockValues, pxSize }: IBlock) => {
	const [height, setHeight] = useState('');

	const getMaxValue = () => {
		let sum = 0;
		blockValues.forEach(val => {
			sum += val.value;
		});
		return sum * pxSize;
	};

	useEffect(() => {
		const mx = getMaxValue();
		console.log(mx);
		setHeight(`${mx}px`);
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
