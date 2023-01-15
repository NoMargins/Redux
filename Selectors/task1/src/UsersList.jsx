import React from 'react';
import User from './users/User.jsx';
import Pagination from './Pagination.jsx';
import { connect } from 'react-redux';
import * as usersActions from './users/users.actions';
import {
	currentPageSelector,
	usersListSelector,
	itemsPerPageSelector,
	totalItemsSelector,
} from './users/users.selectors';

import './index.scss';

class UsersList extends React.Component {
	render() {
		const { currentPage, totalItems, itemsPerPage, goNext, goPrev, usersList } =
			this.props;
		return (
			<div>
				<Pagination
					currentPage={currentPage}
					totalItems={totalItems}
					itemsPerPage={itemsPerPage}
					goNext={goNext}
					goPrev={goPrev}
				/>
				<ul className='users'>
					{usersList.map((user) => (
						<User key={user.id} {...user} />
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentPage: currentPageSelector(state),
		totalItems: totalItemsSelector(state),
		itemsPerPage: itemsPerPageSelector(state),
		usersList: usersListSelector(state),
	};
};

const mapDispatch = {
	goNext: usersActions.nextPage,
	goPrev: usersActions.prevPage,
};

export default connect(mapStateToProps, mapDispatch)(UsersList);
