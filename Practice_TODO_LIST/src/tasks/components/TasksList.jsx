import React from 'react';
import Task from './Task.jsx';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';
import { tasksListSelector } from '../tasks.selectors';

class TasksList extends React.Component {
	componentDidMount() {
		this.props.getTasksList();
	}

	render() {
		const { taskList, updateTask, deleteTask } = this.props;
		if (taskList.length < 1) {
			return null;
		}
		return (
			<ul className='list'>
				{taskList.map((task) => (
					<Task
						key={task.id}
						task={task}
						updateTask={updateTask}
						deleteTask={deleteTask}
					/>
				))}
			</ul>
		);
	}
}

const mapState = (state) => {
	return {
		taskList: tasksListSelector(state),
	};
};

const mapDispatch = {
	getTasksList: tasksActions.getTasksList,
	deleteTask: tasksActions.deleteTaskById,
	updateTask: tasksActions.updateTaskById,
};

export default connect(mapState, mapDispatch)(TasksList);
