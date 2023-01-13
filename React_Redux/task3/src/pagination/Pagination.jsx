import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../users/users.actions';
import './pagination.scss';

class Pagination extends React.Component {
	isPrevAvailable = () => {
		return this.props.currentPage > 0;
	};

	isNextAvailable = () => {
		return (
			this.props.currentPage <
			Math.ceil(this.props.totalItems / this.props.itemsPerPage)
		);
	};

	render() {
		const { currentPage, goNext, goPrev, totalItems, itemsPerPage } =
			this.props;
		const isPrevAvailable = this.props.currentPage > 0;
		const isNextAvailable =
			currentPage < Math.ceil(totalItems / itemsPerPage) - 1;
		return (
			<div className='pagination'>
				<button
					className='btn'
					onClick={isPrevAvailable ? goPrev : null}
					disabled={!isPrevAvailable}
				>
					{isPrevAvailable ? '←' : ''}
				</button>
				<span className='pagination__page'>{currentPage + 1}</span>
				<button
					className='btn'
					onClick={isNextAvailable ? goNext : null}
					disabled={!isNextAvailable}
				>
					{isNextAvailable ? '→' : ''}
				</button>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		currentPage: state.currentPage,
		totalItems: state.totalItems,
		itemsPerPage: state.itemsPerPage,
	};
};

const mapDispatch = {
	goNext: usersActions.nextPage,
	goPrev: usersActions.prevPage,
};

export default connect(mapState, mapDispatch)(Pagination);
