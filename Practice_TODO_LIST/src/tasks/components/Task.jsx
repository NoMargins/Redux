import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ task, deleteTask, updateTask }) => {
	const { id, text, done } = task;
	const stylesDendengingOnCheckbox = classNames('list-item', {
		'list-item_done': done,
	});
	return (
		<li className={stylesDendengingOnCheckbox}>
			<input
				type='checkbox'
				className='list-item__checkbox'
				defaultChecked={done}
				onChange={() => updateTask(id)}
			/>
			<span className='list-item__text'>{text}</span>
			<button
				className='list-item__delete-btn'
				onClick={() => deleteTask(id)}
			></button>
		</li>
	);
};

Task.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			done: PropTypes.bool,
			id: PropTypes.string,
		})
	),
	updateTask: PropTypes.func,
	deleteTask: PropTypes.func,
};

export default Task;
