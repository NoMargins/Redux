import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';

class CreateTask extends React.Component {
	state = {
		text: '',
	};

	handleInput = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	submitTask = () => {
		this.props.createTask(this.state.text);
		this.setState({
			text: '',
		});
	};

	render() {
		return (
			<div className='create-task'>
				<input
					className='create-task__input'
					type='text'
					value={this.state.text}
					onChange={this.handleInput}
				/>
				<button className='btn create-task__btn' onClick={this.submitTask}>
					Create
				</button>
			</div>
		);
	}
}

CreateTask.propTypes = {
	createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
	createTask: tasksActions.createNewTask,
};

export default connect(null, mapDispatch)(CreateTask);
