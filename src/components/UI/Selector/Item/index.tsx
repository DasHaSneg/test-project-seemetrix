import * as React from 'react';

interface ISelectItem {
	index: number;
	option: string;
	isSelected: boolean;
	handleSelect: (index: number) => void;
}

const SelectItem = ({ option, index, isSelected, handleSelect }: ISelectItem) => {
	return (
		<button type="button" className={isSelected ? 'selected_item' : 'item'} onClick={() => handleSelect(index)}>
			{option}
		</button>
	);
};

export default SelectItem;
