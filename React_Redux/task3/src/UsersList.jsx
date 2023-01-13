import React from 'react';
import User from './users/User.jsx';
import Pagination from './Pagination.jsx';
import { connect } from 'react-redux';
import * as usersActions from './users/users.actions';

import './index.scss';

class UsersList extends React.Component {
	render() {
		const { currentPage, totalItems, itemsPerPage, goNext, goPrev, usersList } =
			this.props;
		return (
			<>
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
			</>
		);
	}
}

const mapState = (state) => {
	return {
		currentPage: state.currentPage,
		totalItems: state.totalItems,
		itemsPerPage: state.itemsPerPage,
		usersList: state.usersList,
	};
};

const mapDispatch = {
	goNext: usersActions.nextPage,
	goPrev: usersActions.prevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
