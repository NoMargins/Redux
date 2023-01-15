import Options from './Options.jsx';
import { connect } from 'react-redux';
import { toggleOption } from './store/options.actions.js';
import { selectedOptionsSelector } from './store/options.selectors.js';

const mapStateToProps = (state) => {
	return {
		optionsList: selectedOptionsSelector(state),
	};
};

const mapDispatch = {
	moveOption: toggleOption,
};

export default connect(mapStateToProps, mapDispatch)(Options);
