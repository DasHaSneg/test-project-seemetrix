import * as React from 'react';

interface IDataSelector {
	options: string[] | number[];
	selectedIds: string[];
	handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DataSelector = ({ options, selectedIds, handleSelect }: IDataSelector) => {
	return (
		<div className="selector_wrapper">
			<select id="lang" value={selectedIds} multiple onChange={e => handleSelect(e)}>
				{options.map(option => {
					return <option value={option}>{option}</option>;
				})}
			</select>
		</div>
	);
};

export default DataSelector;
