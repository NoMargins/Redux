import { tasksListSelector } from './tasks.selectors.js';
import * as taskGateway from './tasksGateway.js';

export const GET_TASKS = 'TASKS/GET_TASKS';

const tasksListReceived = (tasks) => {
	return {
		type: GET_TASKS,
		payload: {
			tasks,
		},
	};
};

export const getTasksList = () => {
	const thunkAction = function (dispatch) {
		taskGateway
			.fetchTasksList()
			.then((tasksList) => dispatch(tasksListReceived(tasksList)));
	};
	return thunkAction;
};

export const createNewTask = (text) => {
	const thunkAction = function (dispatch) {
		const newTask = {
			text,
			done: false,
		};

		taskGateway.createTask(newTask).then(() => dispatch(getTasksList()));
	};
	return thunkAction;
};

export const deleteTaskById = (taskId) => {
	const thunkAction = function (dispatch) {
		taskGateway.deleteTask(taskId).then(() => dispatch(getTasksList()));
	};
	return thunkAction;
};

export const updateTaskById = (taskId) => {
	const thunkAction = function (dispatch, getState) {
		const state = getState();
		const tasksList = tasksListSelector(state);

		const task = tasksList.find((task) => task.id === taskId);
		const updatedTask = {
			...task,
			done: !task.done,
		};

		taskGateway
			.updateTask(taskId, updatedTask)
			.then(() => dispatch(getTasksList()));
	};
	return thunkAction;
};
