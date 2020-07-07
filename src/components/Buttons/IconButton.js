import React from 'react';
import IconButton from '@material-ui/core/IconButton';

export default props => {
	const { name, color, icon, onClick } = props;
	return (
		<IconButton color={color} aria-label={name} onClick={e => onClick(e)}>
		{icon}
		</IconButton>
	);
};
