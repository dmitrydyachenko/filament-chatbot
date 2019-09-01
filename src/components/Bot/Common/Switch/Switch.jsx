import * as React from 'react';

import './Switch.scss';

const Switch = (props) => {
	const { label, checked, onToggle } = props;

	return (
		<div className="custom-control custom-switch">
			<input id="custom-switch" type="checkbox" className="custom-control-input" checked={checked} onChange={onToggle} />
			<label className="custom-control-label" htmlFor="custom-switch">
				{label}
			</label>
		</div>
	);
};

export default Switch;
