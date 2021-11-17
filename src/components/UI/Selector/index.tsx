import * as React from 'react';
import SelectItem from './Item';

interface IDataSelector {
	options: string[];
	selectedIds: string[];
	handleSelect: (index: number) => void;
}

const Selector = ({ options, selectedIds, handleSelect }: IDataSelector) => {
	const getActualOptionsInfo = () => {
		const actualOptions: { option: string; isSelected: boolean }[] = [];
		options.forEach(option => {
			actualOptions.push({ option, isSelected: selectedIds.indexOf(option) !== -1 });
		});
		return actualOptions;
	};

	return (
		<div className="selector_wrapper">
			<div className="select_list">
				{getActualOptionsInfo().map((optionInfo, index) => {
					return <SelectItem key={optionInfo.option} option={optionInfo.option} isSelected={optionInfo.isSelected} handleSelect={handleSelect} index={index} />;
				})}
			</div>
		</div>
	);
};

export default Selector;
