import React from 'react';
import { Chip, IconButton } from '@material-ui/core';
import { useBaseStyles, StyledBox } from '../styles/app.styles';
import Delete from '@material-ui/icons/Delete';

const DoneTodos = ({
    todosData,
    remove
}) => {
    const classes = useBaseStyles();

    const doneTodos = todosData && Array.isArray(todosData) && todosData.length > 0 ? todosData.filter(
        todo => todo.completed === true
    ) : [];

    return (
        <>
            {doneTodos.length > 0 && <StyledBox>
                {doneTodos.map(todo => (
                    <Chip
                        key={todo.id}
                        className={classes.chip}
                        variant="outlined"
                        size="medium"
                        color="primary"
                        label={todo.text}
                        deleteIcon={(
                            <IconButton color="secondary">
                                <Delete />
                            </IconButton>
                        )}
                        onDelete={(e) => {
                            e.preventDefault();
                            remove(todo.id);
                        }}
                    />
                ))}
            </StyledBox>}
        </>
    );
}

export default DoneTodos;