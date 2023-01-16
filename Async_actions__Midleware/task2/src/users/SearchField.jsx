import React, { Component } from 'react';
import { fetchUserAction } from './user.actions';
import { connect } from 'react-redux';

class SearchField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
		};
	}

	onChange = (event) => {
		this.setState({ userName: event.target.value });
	};

	handleUserSearch = () => {
		this.props.fetchUser(this.state.userName);
	};

	render() {
		return (
			<div className='name-form'>
				<input
					type='text'
					valiue={this.state.userName}
					className='name-form__input'
					onChange={this.onChange}
				/>
				<button className='name-form__btn btn' onClick={this.handleUserSearch}>
					Show
				</button>
			</div>
		);
	}
}

const mapDispatch = {
	fetchUser: fetchUserAction,
};

export default connect(null, mapDispatch)(SearchField);
