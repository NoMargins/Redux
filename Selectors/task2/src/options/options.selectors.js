import { createSelector } from 'reselect';

const optionsListSelector = (state) => {
	return state.options.optionsList;
};

const selectedIdsSelector = (state) => {
	return state.options.selected;
};

export const selectedOptionsSelector = (state) => {
	const allAvailableOptions = optionsListSelector(state);
	const selectedIds = selectedIdsSelector(state);

	return allAvailableOptions.filter((option) =>
		selectedIds.includes(option.id)
	);
};

export const availableOptionsSelector = (state) => {
	const allAvailableOptions = optionsListSelector(state);
	const selectedIds = selectedIdsSelector(state);

	return allAvailableOptions.filter(
		(option) => !selectedIds.includes(option.id)
	);
};

// export const availableOptionsSelector = createSelector(
// 	[optionsListSelector, selectedIdsSelector],
// 	(allOptionsList, selectedIds) => {
// 		return allOptionsList.filter((option) => !selectedIds.includes(option.id));
// 	}
// );

// export const selectedOptionsSelector = createSelector(
// 	[optionsListSelector, selectedIdsSelector],
// 	(allOptionsList, selectedIds) => {
// 		return allOptionsList.filter((option) => selectedIds.includes(option.id));
// 	}
// );
