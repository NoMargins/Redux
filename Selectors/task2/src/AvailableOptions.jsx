import Options from './Options.jsx';
import { connect } from 'react-redux';
import { toggleOption } from './options/options.actions.js';
import { availableOptionsSelector } from './options/options.selectors.js';

const mapStateToProps = (state) => {
	return {
		optionsList: availableOptionsSelector(state),
	};
};

const mapDispatch = {
	moveOption: toggleOption,
};

export default connect(mapStateToProps, mapDispatch)(Options);
