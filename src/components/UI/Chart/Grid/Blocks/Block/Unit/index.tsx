import * as React from 'react';
import { useEffect, useState } from 'react';
import { IAgeInfo } from '../../../../index';

interface IUnit {
	unitValue: IAgeInfo;
	pxSize: number;
}

const Unit = ({ unitValue, pxSize }: IUnit) => {
	const [height, setHeight] = useState('');

	useEffect(() => {
		setHeight(`${pxSize * unitValue.value}px`);
	}, [unitValue]);

	return <div className="block_unit" style={{ backgroundColor: unitValue.color, height }} />;
};

export default Unit;
