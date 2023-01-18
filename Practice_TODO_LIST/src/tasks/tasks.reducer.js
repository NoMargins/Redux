import { GET_TASKS } from './tasks.actions';

const initialData = {
	tasksList: [],
};

const tasksReducer = (state = initialData, action) => {
	switch (action.type) {
		case GET_TASKS:
			const orderedList = action.payload.tasks.sort((a, b) => a.done - b.done);
			return {
				...state,
				tasksList: orderedList,
			};

		default:
			return state;
	}
};

export default tasksReducer;
