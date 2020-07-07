import React from 'react'
import IconButton from './IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

export default props => {
    return(
        <IconButton
        onClick={props.onClick}
        name='InActive'
        color='secondary'
        title="Inactive"
        icon={<CancelIcon fontSize="inherit" />} />
        )
}
