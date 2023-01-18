// const baseUrl = 'https://633aeb89e02b9b64c61ad82e.mockapi.io/tasksList';
const baseUrl = 'https://63b4368c9f50390584aa3bd2.mockapi.io/ToDoList';

export const fetchTasksList = () => {
	return fetch(baseUrl).then((resp) => {
		if (resp.ok) {
			return resp.json();
		}
	});
};

export const createTask = (taskData) => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(taskData),
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Failed to create task');
		}
	});
};

export const updateTask = (taskId, taskData) => {
	return fetch(`${baseUrl}/${taskId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(taskData),
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Failed to update task');
		}
	});
};

export const deleteTask = (taskId) => {
	return fetch(`${baseUrl}/${taskId}`, {
		method: 'DELETE',
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Failed to delete task');
		}
	});
};
