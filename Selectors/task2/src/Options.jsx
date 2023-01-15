import React from 'react';

const Options = ({ title, optionsList, moveOption }) => {
	return (
		<div className='options'>
			<div className='options__title'>{title}</div>
			<ul className='options__list'>
				{optionsList.map((option) => {
					return (
						<li key={option.id}>
							<button
								className='options__list-item'
								onClick={() => moveOption(option.id)}
							>
								{option.name}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Options;
