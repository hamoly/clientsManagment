import React from 'react';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {
	Table,
	TableBody,
	TableHead,
	TableCell,
	TableRow,
} from '@material-ui/core';

import IconButton from '../Buttons/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import TrashIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';


const row = (
	x,
	i,
    header,
    handleStatue,
	handleRemove,
	startEditing,
	editIdx,
	handleChange,
	stopEditing
) => {
	const currentlyEditing = editIdx === i;
	return (
        <TableRow key={`tr-${i}`} selectable={false}>
        {header.map((y, k) => (
				<TableCell key={`trc-${k}`}>
					{currentlyEditing ? (
						<TextField
							name={y.prop}
							onChange={(e) => handleChange(e, y.prop, i)}
							value={x[y.prop]}
						/>
					) : (
						x[y.prop]
					)}
                </TableCell>
			))}
			<TableCell>
				{currentlyEditing ? (
                    <IconButton
                    onClick={() => stopEditing()}
                name='InActive'
                color='default'
                title="Inactive"
                icon={<CheckCircleIcon fontSize="inherit" />} />
				) : (
                    <IconButton
                    onClick={() => startEditing(i)}
                    name='Delete'
                    color='default'
                    icon={<EditIcon fontSize="inherit" />} />
				)}
            </TableCell>
            <TableCell>
            {x.clientStatue ?
                <IconButton
                onClick={() => handleStatue(i)} name='InActive' color='secondary' title="Inactive" icon={<CancelIcon fontSize="inherit" />} />
                :
                <IconButton
                onClick={() => handleStatue(i)}
                name='InActive'
                color='primary'
                title="Inactive"
                icon={<CheckCircleIcon fontSize="inherit" />} />            }
            </TableCell>
			<TableCell>
				<TrashIcon onClick={() => handleRemove(i)} />
            </TableCell>
		</TableRow>
	);
};

export default ({
	data,
    header,
    handleStatue,
	handleRemove,
	startEditing,
	editIdx,
	handleChange,
	stopEditing,
}) => (
	<Table>
		<TableHead>
            <TableRow>
            {header.map((x, i) => (
                <TableCell key={`thc-${i}`}>{x.name}</TableCell>
				))}
			</TableRow>
		</TableHead>
		<TableBody>
			{data.map((x, i) =>
				row(
					x,
					i,
                    header,
                    handleStatue,
					handleRemove,
					startEditing,
					editIdx,
					handleChange,
					stopEditing
				)
            )}
		</TableBody>
	</Table>
);
