import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { IAgeInfo } from '../../../index';

const MAX_HEIGHT = 143;

interface IBlock {
	blockValues: IAgeInfo[];
}

const Block = ({ blockValues }: IBlock) => {
	const [height, setHeight] = useState('');

	const setMaxValue = () => {
		console.log(height);
		console.log(`${Math.floor(MAX_HEIGHT / blockValues.reduce((acc, curr) => (acc.value > curr.value ? acc : curr)).value)}px`);
		setHeight(`${Math.floor(MAX_HEIGHT / blockValues.reduce((acc, curr) => (acc.value > curr.value ? acc : curr)).value)}px`);
	};

	useEffect(() => {
		// eslint-disable-next-line no-unused-expressions
		setMaxValue();
	}, [blockValues]);

	return <div className="chart_block" style={{ height }} />;
};

export default Block;
