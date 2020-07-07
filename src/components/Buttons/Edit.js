import React from 'react'
import IconButton from './IconButton';
import EditIcon from '@material-ui/icons/Edit';

export default props => {
    return(
        <IconButton
        onClick={props.onClick}
        name='Delete'
        color='default'
        icon={<EditIcon fontSize="inherit" />} />
        )
}
