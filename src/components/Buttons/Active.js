import React from 'react'
import IconButton from './IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default props => {
    return(
        <IconButton
        onClick={props.onClick}
        name='Active'
        color='primary'
        icon={<CheckCircleIcon fontSize="inherit" />} />
        )
}
